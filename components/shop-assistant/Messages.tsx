import { memo } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import { Content, Message, Product } from "./types/shop-assistant.ts";

function Messages({ messageList }: { messageList: Message[] }) {
  const messageEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For automatic scrolling
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

  return (
    <div ref={messageEl} class="overflow-y-auto flex flex-col mx-5 pt-4 h-full">
      {messageList.map((message, index) => (
        message.role === "bot"
          ? <BotMessage key={index} message={message} />
          : <UserMessage key={index} message={message} />
      ))}
    </div>
  );
}

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

export default Messages;
