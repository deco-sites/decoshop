import { memo } from "preact/compat";
import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Content, Message, Product, UserMsg } from "./types/shop-assistant.ts";

export function Messages({ messageList }: { messageList: Message[] }) {
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
    <div
      ref={messageEl}
      class="overflow-y-auto flex flex-col mx-5 pt-4 h-full min-h-[50vh]"
    >
      {messageList.map((message, index) => (
        message.role === "assistant"
          ? <BotMessage key={index} message={message} />
          : <UserMessage key={index} message={message as UserMsg} />
      ))}
    </div>
  );
}

const BotMessage = memo(({ message }: { message: Message }) => {
  if (message.type === "function_calls") {
    return (
      <BotMessageWrapper>
        <>
          {(message.content as Content[])
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
      </BotMessageWrapper>
    );
  }

  if (message.type === "message") {
    return (
      <BotMessageWrapper>
        {message.content.map((message, index) => {
          if ("value" in message) {
            return <div key={index}>{message.value}</div>;
          }

          return null;
        })}
      </BotMessageWrapper>
    );
  }

  return null;
});

function BotMessageWrapper({ children }: { children: ComponentChildren }) {
  return (
    <div class="mb-3 p-2 rounded-2xl bg-gray-200 text-black text-sm max-w-s w-fit self-start">
      {children}
    </div>
  );
}

function UserMessage({ message }: { message: UserMsg }) {
  return (
    <div class="mb-3 p-2 rounded-2xl bg-green-600 text-white text-sm max-w-s w-fit self-end">
      {message.content.map((message, index) => {
        if ("value" in message) {
          return <div key={index}>{message.value}</div>;
        }
        if ("fileId" in message) {
          return <div key={index}>{message.fileId}</div>;
        }
        return null;
      })}
    </div>
  );
}

function ProductShelf({ products }: { products: Product[] }) {
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
}
