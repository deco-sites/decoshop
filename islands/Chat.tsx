import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef } from "preact/hooks";
import InstagramSearch from "../components/InstagramSearch.tsx";

function Chat() {
  const messageEl = useRef<HTMLDivElement>(null);
  const userInput = useSignal("");
  const selectedUserInstagram = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<{ content: any; role: "user" | "bot" }[]>([]);
  const mock = true;

  if (mock) {
    messageList.value = [
      {
        content: "camisa azul",
        role: "bot",
      },
      {
        content: {
          messageId: "run_GuQ6Ysx73RMWhmL9dmLsSDYX",
          type: "message",
          content:
            "I found a blue shirt for men with long sleeves. It is made of polyester fabric and has a fold-down collar, button closure, and a front pocket with standard sewing and finishing. The brand is Analogy, and it is available in sizes from P to GG. The price is BRL 89.99. You can find more details and purchase it here: [Blue Shirt with Long Sleeves](https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261576)",
        },
        role: "user",
      },
      {
        content: {
          messageId: "run_GuQ6Ysx73RMWhmL9dmLsSDYX",
          type: "function_calls",
          content: [
            {
              name: "deco-sites/decoshop/loaders/productList.ts",
              props: {
                query: "camisa azul",
                storeName: "lojastorra",
              },
              response: [
                {
                  "@type": "Product",
                  category: "Masculino>Camisas",
                  productID: "261576",
                  url: "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261576",
                  name: "3",
                  description:
                    "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                  brand: {
                    "@type": "Brand",
                    "@id": "2000159",
                    name: "Analogy",
                  },
                  inProductGroupWithID: "69281",
                  sku: "261576",
                  gtin: "282240000690223",
                  releaseDate: 1701399600000,
                  image: [
                    {
                      "@type": "ImageObject",
                      alternateName: "28224000069022",
                      url: "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                      name: "28224000069022",
                    },
                  ],
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "BRL",
                    highPrice: 89.99,
                    lowPrice: 89.99,
                    offerCount: 1,
                    offers: [
                      {
                        "@type": "Offer",
                        price: 89.99,
                        seller: "1",
                        priceValidUntil: "2024-12-01T20:17:28Z",
                        inventoryLevel: {
                          value: 10000,
                        },
                        giftSkuIds: [],
                        teasers: [],
                        priceSpecification: [
                          {
                            "@type": "UnitPriceSpecification",
                            priceType: "https://schema.org/ListPrice",
                            price: 89.99,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            priceType: "https://schema.org/SalePrice",
                            price: 89.99,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            priceType: "https://schema.org/SalePrice",
                            priceComponentType:
                              "https://schema.org/Installment",
                            name: "American Express",
                            description: "American Express à vista",
                            billingDuration: 1,
                            billingIncrement: 89.99,
                            price: 89.99,
                          },
                        ],
                        availability: "https://schema.org/InStock",
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        role: "user",
      },
    ];
  }

  const onUser = (user: string) => {
    selectedUserInstagram.value = user;
  };

  useEffect(() => {
    const host = window.location.host;
    const websocket = window.location.protocol === "https:" ? "wss" : "ws";
    ws.value = new WebSocket(
      `${websocket}://${host}/live/invoke/ai-assistants/actions/chat.ts?assistant=Boteco`
    );
    ws.value.onmessage = (event: MessageEvent) => {
      updateMessages(event.data);
    };
  }, []);

  const updateMessages = useCallback((data: string) => {
    const jsonData = JSON.parse(data);
    const newMessageObject: { content: any; role: "user" | "bot" } = {
      content: jsonData,
      role: "user",
    };
    messageList.value = [...messageList.value, newMessageObject];
    console.log(messageList.value);
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

  const handleSubmit = () => {
    send(userInput.value);
    const newMessageObject: { content: string; role: "user" | "bot" } = {
      content: userInput.value,
      role: "bot",
    };
    messageList.value = [...messageList.value, newMessageObject];
    userInput.value = "";
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return selectedUserInstagram.value ? (
    <>
      <div class="w-1/2 shadow-md h-full flex flex-col justify-end z-50 bg-white fixed">
        <div class="bg-green-500 flex justify-center p-3 text-white">
          Boteco
        </div>
        <div
          ref={messageEl}
          class="h-full overflow-y-auto pt-4 flex flex-col mx-5"
        >
          {messageList.value.map((message, index) => (
            <div
              key={index}
              class={`p-2 rounded-2xl mb-3 w-fit text-sm max-w-s ${
                message.role === "user"
                  ? "bg-gray-200 text-black self-start"
                  : "bg-green-600 text-white self-end"
              }`}
            >
              {typeof message.content === "string" ? (
                <div>{message.content}</div>
              ) : message.content.type === "function_calls" ? (
                message.content.content.map((productData, productIndex) => (
                  <ProductShelf
                    key={productIndex}
                    products={productData.response}
                  />
                ))
              ) : message.content.type === "message" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: message.content.content,
                  }}
                ></div>
              ) : null}
            </div>
          ))}
        </div>

        <div class="flex flex-row items-center bg-gray-100 rounded-xl relative mb-4 p-4 mt-4 mx-4">
          <textarea
            id="userInput"
            placeholder="Ask..."
            class="w-full grow h-16 outline-none relative resize-none pr-6 bg-gray-100 text-sm"
            value={userInput.value}
            onInput={(e: Event) =>
              (userInput.value = (e.target as HTMLTextAreaElement).value)
            }
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
      </div>
    </>
  ) : (
    <InstagramSearch onUser={onUser} />
  );
}

const ProductShelf = ({ products }) => {
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
                <p className="text-lg text-sm mt-2">{product.name}</p>
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
