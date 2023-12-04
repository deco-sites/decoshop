import { useSignal } from "@preact/signals";
import { memo } from "preact/compat";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { cache, mockMsgList } from "../components/mock.ts";
import InstagramSearch from "../components/InstagramSearch.tsx";
import { Content, Message, Product } from "../components/types/chat.ts";

function Chat() {
  const messageEl = useRef<HTMLDivElement>(null);
  const userInput = useSignal("");
  const selectedUserInstagram = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<Message[]>([]);
  const mock = false;

  if (mock) {
    messageList.value = mockMsgList;
  }

  useEffect(() => {
    const host = window.location.host;
    const websocket = window.location.protocol === "https:" ? "wss" : "ws";
    ws.value = new WebSocket(
      `${websocket}://${host}/live/invoke/ai-assistants/actions/chat.ts?assistant=Boteco`,
    );
    ws.value.onmessage = (event: MessageEvent) => {
      const { content, type } = JSON.parse(event.data);
      updateMessageList({ content, type, role: "bot" });
    };
  }, []);

  useEffect(() => {
    // For automatic srolling
    const messageElement = messageEl.current;

    if (messageElement) {
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.addedNodes.length) {
            messageElement.scrollTop = messageElement.scrollHeight;
          }
        }
      });

      observer.observe(messageElement, { childList: true });

      return () => observer.disconnect();
    }
  }, []);

  const send = useCallback((text: string) => {
    if (ws.value) {
      ws.value.send(text);
    }
  }, []);

  const updateMessageList = ({ content, type, role }: Message): void => {
    const newMessageObject: Message = {
      content,
      type,
      role,
    };
    messageList.value = [...messageList.value, newMessageObject];
  };

  console.log({ cache, s: selectedUserInstagram.value });

  const onUser = (user: string) => {
    const message = `Quero um presente para @${user}`;
    send(message);
    updateMessageList({
      content: message,
      type: "message",
      role: "user",
    });
    selectedUserInstagram.value = user;
  };

  const screenshot = cache.find(
    ({ user }) => user === selectedUserInstagram.value,
  )?.url;

  const handleSubmit = () => {
    if (!userInput.value) return;

    send(userInput.value);

    updateMessageList({
      content: userInput.value,
      type: "message",
      role: "user",
    });

    userInput.value = "";
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const ProductListResponse = ({ content }: { content: Content[] }) => (
    <>
      {content
        .filter((res) =>
          res.name === "deco-sites/decoshop/loaders/productList.ts"
        )
        .map((productData, index) => (
          <ProductShelf
            key={index}
            products={productData.response as Product[]}
          />
        ))}
    </>
  );

  const BotMessage = memo(({ message }: { message: Message }) => {
    const renderContent = () => {
      switch (message.type) {
        case "function_calls":
          return <ProductListResponse content={message.content as Content[]} />;
        case "message":
          return <div>{message.content}</div>;
        default:
          return null;
      }
    };

    const content = renderContent();

    return content && (
      <div class="mb-3 p-2 rounded-2xl bg-gray-200 text-black text-sm max-w-s w-fit self-start">
        {content}
      </div>
    );
  });

  const UserMessage = ({ message }: { message: Message }) => {
    return (
      <div class="mb-3 p-2 rounded-2xl bg-green-600 text-white text-sm max-w-s w-fit self-end">
        {message.content}
      </div>
    );
  };

  const InputArea = () => (
    <div class="flex flex-row items-center bg-gray-100 rounded-xl relative mb-4 p-4 mt-4 mx-4">
      <textarea
        id="userInput"
        placeholder="Ask..."
        class="w-full grow h-32 outline-none relative resize-none pr-6 bg-gray-100 text-sm"
        value={userInput.value}
        onInput={(
          e,
        ) => (userInput.value = (e.target as HTMLTextAreaElement).value)}
        onKeyDown={handleKeydown}
      />
      <button
        type="button"
        class="bg-green-600 hover:bg-green-700 absolute rounder-md font-light text-white py-1 px-4 rounded-lg text-sm bottom-3 right-3"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );

  const MessageList = ({ messages }: { messages: Message[] }) => (
    <div ref={messageEl} class="overflow-y-auto flex flex-col mx-5 pt-4 h-full">
      {messages.map((message, index) => (
        message.role === "bot"
          ? <BotMessage key={index} message={message} />
          : <UserMessage key={index} message={message} />
      ))}
    </div>
  );

  const MessageContainer = () => {
    return (
      <div class="w-1/2 shadow-md h-[100vh] flex flex-col justify-end z-50 bg-white">
        <div class="bg-green-500 flex justify-center p-3 text-white">
          shop.deco.cx
        </div>
        <MessageList messages={messageList.value} />
        <InputArea />
      </div>
    );
  };

  return selectedUserInstagram.value
    ? (
      <div class="flex flex-row justify-between">
        <MessageContainer />
        <div class="w-1/2 h-full flex flex-col relative">
          <div class="absolute bg-[#00000044] inset-0 flex justify-center items-center">
            Carregando...
          </div>
          <input
            type="text"
            class="h-12 p-2 w-full"
            value={`https://instagram.com/${selectedUserInstagram.value}`}
          />
          <img src={screenshot} class="w-full" alt="Screenshot" />
        </div>
      </div>
    )
    : <InstagramSearch onUser={onUser} />;
}

const ProductShelf = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex overflow-x-auto mt-4">
      <div className="flex flex-col space-x-4">
        <div class="mb-4 ml-4 font-medium">{products[0].brand.name}</div>
        <div class="flex flex-row w-full">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center mr-4">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={product.image[0].url}
                  alt={product.name}
                  className="w-36 h-36 rounded-lg"
                />
              </a>
              <div class="flex flex-col">
                <p className="text-sm mt-2">{product.name}</p>
                <p className="text-gray-500">
                  R$ {product.offers.offers[0].price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
