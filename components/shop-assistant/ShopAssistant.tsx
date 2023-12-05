import { Signal, useSignal } from "@preact/signals";
import { useCallback, useEffect } from "preact/hooks";
import { cache } from "../mock.ts";
import InstagramSearch from "../shop-assistant/InstagramSearch.tsx";
import { ChatContainer } from "./ChatContainer.tsx";
import { Message } from "./types/shop-assistant.ts";

function ShopAssistant() {
  const selectedUserInstagram = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<Message[]>([]);

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

  if (!selectedUserInstagram.value) {
    return <InstagramSearch onUser={onUser} />;
  }

  return (
    <div class="flex flex-row justify-between">
      <ChatContainer
        send={send}
        messageList={messageList}
        updateMessageList={updateMessageList}
      />
      <InstagramContainer selectedUserInstagram={selectedUserInstagram} />
    </div>
  );
}

function InstagramContainer(
  { selectedUserInstagram }: { selectedUserInstagram: Signal<string> },
) {
  const screenshot = cache.find(
    ({ user }) => user === selectedUserInstagram.value,
  )?.url;

  return (
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
  );
}

export default ShopAssistant;
