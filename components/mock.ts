export const cache = [
  {
    user: "maaboca",
    url:
      "https://media.discordapp.net/attachments/1064991350237429800/1180245672105099365/1.jpg?ex=657cb870&is=656a4370&hm=de0f7eb31266d4dfdbd1abef74f6a3eeae180e55621cd94558352c2cbe789e85&=&format=webp&width=1102&height=1228",
  },
  {
    user: "guifromrio",
    url:
      "https://media.discordapp.net/attachments/1064991350237429800/1180245671735992502/2.jpg?ex=657cb870&is=656a4370&hm=ab9f36925e28c0545f63a9d6a3d563fb621394de24dc4753262f5fbc975ea50e&=&format=webp&width=1082&height=1228",
  },
];

export const mockMsgList: {type: string, content: any, role: 'user' | 'bot' }[] = [
  {
      "content": "Quero um presente para @guifromrio",
      "type": "message",
      "role": "user"
  },
  {
      "content": {
          "name": "openai/loaders/vision.ts",
          "props": {
              "url": "https://www.instagram.com/guifromrio",
              "request": "Com base nessas imagens, o que essa pessoa gostaria de receber de presente?"
          }
      },
      "type": "start_function_call",
      "role": "bot"
  },
  {
      "content": {
          "name": "deco-sites/decoshop/loaders/productList.ts",
          "props": {
              "query": "tênis",
              "storeName": "zeedog"
          }
      },
      "type": "start_function_call",
      "role": "bot"
  },
  {
      "content": "Com base nas informações fornecidas, sugiro o Tênis Japan S ASICS x Zee.Dog Feminino Grafite. Ele está disponível na Zee.Dog e é uma ótima opção para presentear alguém que valoriza relacionamentos, gosta de exercícios físicos, viaja e gosta de tecnologia. O tênis é unissex e está disponível nos tamanhos 34, 35, 36 e 37, com um preço de 599 reais.",
      "type": "message",
      "role": "bot"
  },
  {
      "content": [
          {
              "name": "openai/loaders/vision.ts",
              "props": {
                  "url": "https://www.instagram.com/guifromrio",
                  "request": "Com base nessas imagens, o que essa pessoa gostaria de receber de presente?"
              },
              "response": [
                  "NEVER ANSWER IN ENGLISH. Valoriza relacionamentos, gosta de exercicios fisicos, corre com tenis novos, tem cachorros, gosta de viajar e explorar locais novos, gosta de tecnologia"
              ]
          },
          {
              "name": "deco-sites/decoshop/loaders/productList.ts",
              "props": {
                  "query": "tênis",
                  "storeName": "zeedog"
              },
              "response": [
                  {
                      "@type": "Product",
                      "category": "Human>Calçados",
                      "productID": "4215867",
                      "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215867",
                      "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 34",
                      "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                      "brand": {
                          "@type": "Brand",
                          "@id": "930833574",
                          "name": "ZEEDOG"
                      },
                      "inProductGroupWithID": "5052812",
                      "sku": "4215867",
                      "gtin": "7908471119210",
                      "releaseDate": 1669852800000,
                      "additionalProperty": [
                          {
                              "@type": "PropertyValue",
                              "name": "Tamanho",
                              "value": "34",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "gender",
                              "value": "unisex",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010297",
                              "value": "Human"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010530",
                              "value": "Calçados"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Coleção de Bloqueio",
                              "propertyID": "144"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "asics",
                              "propertyID": "620"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "zdh_flashpromo_lp",
                              "propertyID": "701"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday Human 2023",
                              "propertyID": "756"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Segunda Chance BF 2023",
                              "propertyID": "758"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday | 50%",
                              "propertyID": "761"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "RefId",
                              "value": "5052812_0_0_34",
                              "valueReference": "ReferenceID"
                          }
                      ],
                      "isVariantOf": {
                          "@type": "ProductGroup",
                          "productGroupID": "5052812",
                          "hasVariant": [
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215867",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215867",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 34",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215867",
                                  "gtin": "7908471119210",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "34",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_34",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 10000
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Boleto Bancário",
                                                      "description": "Boleto Bancário à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Vale",
                                                      "description": "Vale à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Maestro",
                                                      "description": "Maestro à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Debito",
                                                      "description": "Venda Direta Debito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "PicPay",
                                                      "description": "PicPay à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Pix",
                                                      "description": "Pix à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/InStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215866",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215866",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 35",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215866",
                                  "gtin": "7908471118992",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "35",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_35",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 10000
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Boleto Bancário",
                                                      "description": "Boleto Bancário à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Vale",
                                                      "description": "Vale à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Maestro",
                                                      "description": "Maestro à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Debito",
                                                      "description": "Venda Direta Debito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "PicPay",
                                                      "description": "PicPay à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Pix",
                                                      "description": "Pix à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/InStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215865",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215865",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 36",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215865",
                                  "gtin": "7908471119005",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "36",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_36",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 10000
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Boleto Bancário",
                                                      "description": "Boleto Bancário à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Vale",
                                                      "description": "Vale à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Maestro",
                                                      "description": "Maestro à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Debito",
                                                      "description": "Venda Direta Debito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "PicPay",
                                                      "description": "PicPay à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Pix",
                                                      "description": "Pix à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/InStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215864",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215864",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 37",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215864",
                                  "gtin": "7908471119012",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "37",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_37",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 10000
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Boleto Bancário",
                                                      "description": "Boleto Bancário à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Vale",
                                                      "description": "Vale à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Maestro",
                                                      "description": "Maestro à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Debito",
                                                      "description": "Venda Direta Debito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "PicPay",
                                                      "description": "PicPay à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Pix",
                                                      "description": "Pix à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/InStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215863",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215863",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 38",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215863",
                                  "gtin": "7908471119029",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "38",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_38",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215862",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p?skuId=4215862",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite 39",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052812",
                                  "sku": "4215862",
                                  "gtin": "7908471119036",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "39",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052812_0_0_39",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:55:07Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              }
                          ],
                          "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-grafite-1420416/p",
                          "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite",
                          "additionalProperty": [
                              {
                                  "@type": "PropertyValue",
                                  "name": "Release_Date",
                                  "value": "2022-12-03",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Cor",
                                  "value": "Preto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "nome_produto",
                                  "value": "Grafite",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Filtro de Tipo",
                                  "value": "Calçados",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Imagens_Medidas",
                                  "value": "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/size_chart_calcados_grafite.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Bundle_Recomendacao",
                                  "value": "['carrossel':'1','posicao':'1','produto':'5052807'];\r\n['carrossel':'1','posicao':'2','produto':'5052809'];\r\n['carrossel':'2','posicao':'1','produto':'5052764'];\r\n['carrossel':'2','posicao':'2','produto':'5052765'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Fotos_Produto",
                                  "value": "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main1.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main2.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main3.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main4.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main5.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main6.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Age",
                                  "value": "adulto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Estampas_Relacionadas",
                                  "value": "['idProduto':'5052812','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite','nomeEstampa':'Grafite','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png'];\r\n['idProduto':'5052814','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White','nomeEstampa':'Off-White','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "TableSizeChart",
                                  "value": "<ul class=\"sizes\">\r\n   <li>A. COMPRIMENTO</li>\r\n   <li><span>34</span>23 cm</li>\r\n   <li><span>35</span>24 cm</li>\r\n   <li><span>36</span>24.5 cm</li>\r\n   <li><span>37</span>25 cm</li>\r\n   <li><span>38</span>26 cm</li>\r\n   <li><span>39</span>26.5 cm</li>\r\n\r\n</ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Descricao_Produto",
                                  "value": "ASICS e Zee.Dog Human se juntam para uma colaboração inédita. A coleção conta com duas versões do icônico tênis JAPAN S, além de uma coleção de roupas e acessórios.\r\nO tênis JAPAN S™ é baseado em um modelo de 1981. A peça retrabalhada apresenta uma silhueta de cano baixo e biqueira inspirada nas quadras e cores retrô.\r\nEle foi atualizado com design cupsole leve modificado, complementado com conforto premium e mais amortecimento. Imitando a estética de um tênis de basquete, seu look retrô é combinado a marcas registradas nostálgicas da ASICS, como as Tiger Stripes nos painéis laterais e “ASICS” escrito no calcanhar.\r\nA estética vintage inspirada no basquete do JAPAN S™ é combinada a detalhes específicos para as quadras inspirados nos tênis usados pelos atletas dos anos 80.",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Atributos_Especiais",
                                  "value": "<ul><li>Modelo Feminino;</li>\r\n<li>Feito em lona e tecido tressado;</li>\r\n<li>Bordado de alta definição no calcanhar;</li>\r\n<li>Cadarço em cor alternativa;</li>\r\n<li>100% algodão</li></ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "facebook_image",
                                  "value": "https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main1.jpg",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Tamanho",
                                  "value": "34",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Tamanho",
                                  "value": "35",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Tamanho",
                                  "value": "36",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Tamanho",
                                  "value": "37",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "sellerId",
                                  "value": "1",
                                  "valueReference": "PROPERTY"
                              }
                          ],
                          "model": "1420416"
                      },
                      "image": [
                          {
                              "@type": "ImageObject",
                              "alternateName": "cinza",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211682/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055050257170000",
                              "name": "cinza"
                          },
                          {
                              "@type": "ImageObject",
                              "alternateName": "mainhover",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211683/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055050334800000",
                              "name": "mainhover"
                          }
                      ],
                      "offers": {
                          "@type": "AggregateOffer",
                          "priceCurrency": "BRL",
                          "highPrice": 599,
                          "lowPrice": 599,
                          "offerCount": 1,
                          "offers": [
                              {
                                  "@type": "Offer",
                                  "price": 599,
                                  "seller": "1",
                                  "priceValidUntil": "2024-12-04T21:55:07Z",
                                  "inventoryLevel": {
                                      "value": 10000
                                  },
                                  "giftSkuIds": [],
                                  "teasers": [],
                                  "priceSpecification": [
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/ListPrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SRP",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "American Express",
                                          "description": "American Express à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "American Express",
                                          "description": "American Express 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "American Express",
                                          "description": "American Express 3 vezes sem juros",
                                          "billingDuration": 3,
                                          "billingIncrement": 199.66,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Visa",
                                          "description": "Visa à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Visa",
                                          "description": "Visa 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Visa",
                                          "description": "Visa 3 vezes sem juros",
                                          "billingDuration": 3,
                                          "billingIncrement": 199.66,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Mastercard",
                                          "description": "Mastercard à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Mastercard",
                                          "description": "Mastercard 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Mastercard",
                                          "description": "Mastercard 3 vezes sem juros",
                                          "billingDuration": 3,
                                          "billingIncrement": 199.66,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Boleto Bancário",
                                          "description": "Boleto Bancário à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Hipercard",
                                          "description": "Hipercard à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Hipercard",
                                          "description": "Hipercard 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Hipercard",
                                          "description": "Hipercard 3 vezes sem juros",
                                          "billingDuration": 3,
                                          "billingIncrement": 199.66,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Elo",
                                          "description": "Elo à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Elo",
                                          "description": "Elo 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Vale",
                                          "description": "Vale à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Maestro",
                                          "description": "Maestro à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Venda Direta Debito",
                                          "description": "Venda Direta Debito à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Venda Direta Credito",
                                          "description": "Venda Direta Credito à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Venda Direta Credito",
                                          "description": "Venda Direta Credito 2 vezes sem juros",
                                          "billingDuration": 2,
                                          "billingIncrement": 299.5,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Venda Direta Credito",
                                          "description": "Venda Direta Credito 3 vezes sem juros",
                                          "billingDuration": 3,
                                          "billingIncrement": 199.66,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "PicPay",
                                          "description": "PicPay à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "priceComponentType": "https://schema.org/Installment",
                                          "name": "Pix",
                                          "description": "Pix à vista",
                                          "billingDuration": 1,
                                          "billingIncrement": 599,
                                          "price": 599
                                      }
                                  ],
                                  "availability": "https://schema.org/InStock"
                              }
                          ]
                      }
                  },
                  {
                      "@type": "Product",
                      "category": "Human>Calçados",
                      "productID": "4215885",
                      "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215885",
                      "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  39",
                      "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                      "brand": {
                          "@type": "Brand",
                          "@id": "930833574",
                          "name": "ZEEDOG"
                      },
                      "inProductGroupWithID": "5052815",
                      "sku": "4215885",
                      "gtin": "7908471119159",
                      "releaseDate": 1669852800000,
                      "additionalProperty": [
                          {
                              "@type": "PropertyValue",
                              "name": "Tamanho",
                              "value": "39",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "gender",
                              "value": "unisex",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010297",
                              "value": "Human"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010530",
                              "value": "Calçados"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Coleção de Bloqueio",
                              "propertyID": "144"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "asics",
                              "propertyID": "620"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "zdh_flashpromo_lp",
                              "propertyID": "701"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday Human 2023",
                              "propertyID": "756"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Segunda Chance BF 2023",
                              "propertyID": "758"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "RefId",
                              "value": "5052815_0_0_39",
                              "valueReference": "ReferenceID"
                          }
                      ],
                      "isVariantOf": {
                          "@type": "ProductGroup",
                          "productGroupID": "5052815",
                          "hasVariant": [
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215885",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215885",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  39",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215885",
                                  "gtin": "7908471119159",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "39",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_39",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215886",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215886",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  40",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215886",
                                  "gtin": "7908471119166",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "40",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_40",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215888",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215888",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  41",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215888",
                                  "gtin": "7908471119173",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "41",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_41",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215883",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215883",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  42",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215883",
                                  "gtin": "7908471119180",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "42",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_42",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215887",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215887",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  43",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215887",
                                  "gtin": "7908471119197",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "43",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_43",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:19Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215884",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p?skuId=4215884",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White  44",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052815",
                                  "sku": "4215884",
                                  "gtin": "7908471119203",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "44",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052815_0_0_44",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              }
                          ],
                          "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-off-white--1420419/p",
                          "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White",
                          "additionalProperty": [
                              {
                                  "@type": "PropertyValue",
                                  "name": "Release_Date",
                                  "value": "2022-12-03",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Cor",
                                  "value": "Branco",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "nome_produto",
                                  "value": "Off-White",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Filtro de Tipo",
                                  "value": "Calçados",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Imagens_Medidas",
                                  "value": "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/size_chart_calcados_offwhite.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Bundle_Recomendacao",
                                  "value": "['carrossel':'1','posicao':'1','produto':'5052810'];\r\n['carrossel':'1','posicao':'2','produto':'5052808'];\r\n['carrossel':'2','posicao':'1','produto':'5052764'];\r\n['carrossel':'2','posicao':'2','produto':'5052765'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Fotos_Produto",
                                  "value": "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main1.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main2.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main3.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main4.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main5.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main6.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Age",
                                  "value": "adulto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Estampas_Relacionadas",
                                  "value": "['idProduto':'5052813','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite','nomeEstampa':'Grafite','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png'];\r\n['idProduto':'5052815','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White','nomeEstampa':'Off-White','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "TableSizeChart",
                                  "value": "<ul class=\"sizes\">\r\n   <li>A. COMPRIMENTO</li>\r\n   <li><span>39</span>26 cm</li>\r\n   <li><span>40</span>27 cm</li>\r\n   <li><span>41</span>27.5 cm</li>\r\n   <li><span>42</span>28.5 cm</li>\r\n   <li><span>43</span>29.5 cm</li>\r\n   <li><span>44</span>30 cm</li>\r\n\r\n</ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Descricao_Produto",
                                  "value": "ASICS e Zee.Dog Human se juntam para uma colaboração inédita. A coleção conta com duas versões do icônico tênis JAPAN S, além de uma coleção de roupas e acessórios.\r\nO tênis JAPAN S™ é baseado em um modelo de 1981. A peça retrabalhada apresenta uma silhueta de cano baixo e biqueira inspirada nas quadras e cores retrô.\r\nEle foi atualizado com design cupsole leve modificado, complementado com conforto premium e mais amortecimento. Imitando a estética de um tênis de basquete, seu look retrô é combinado a marcas registradas nostálgicas da ASICS, como as Tiger Stripes nos painéis laterais e “ASICS” escrito no calcanhar.\r\nA estética vintage inspirada no basquete do JAPAN S™ é combinada a detalhes específicos para as quadras inspirados nos tênis usados pelos atletas dos anos 80.",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Atributos_Especiais",
                                  "value": "<ul><li>Modelo Masculino;</li>\r\n<li>Feito em lona e veludo cotelê;</li>\r\n<li>Bordado de alta definição no calcanhar;</li>\r\n<li>Cadarço em cor alternativa;</li>\r\n<li>100% algodão</li></ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "facebook_image",
                                  "value": "https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main1.jpg",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "sellerId",
                                  "value": "1",
                                  "valueReference": "PROPERTY"
                              }
                          ],
                          "model": "1420419"
                      },
                      "image": [
                          {
                              "@type": "ImageObject",
                              "alternateName": "cinza",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211700/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055081453900000",
                              "name": "cinza"
                          },
                          {
                              "@type": "ImageObject",
                              "alternateName": "mainhover",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211701/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055081527070000",
                              "name": "mainhover"
                          }
                      ],
                      "offers": {
                          "@type": "AggregateOffer",
                          "priceCurrency": "BRL",
                          "highPrice": 599,
                          "lowPrice": 599,
                          "offerCount": 1,
                          "offers": [
                              {
                                  "@type": "Offer",
                                  "price": 599,
                                  "seller": "1",
                                  "priceValidUntil": "2024-12-04T21:57:18Z",
                                  "inventoryLevel": {
                                      "value": 0
                                  },
                                  "giftSkuIds": [],
                                  "teasers": [],
                                  "priceSpecification": [
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/ListPrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SRP",
                                          "price": 599
                                      }
                                  ],
                                  "availability": "https://schema.org/OutOfStock"
                              }
                          ]
                      }
                  },
                  {
                      "@type": "Product",
                      "category": "Human>Calçados",
                      "productID": "4215871",
                      "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215871",
                      "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 39",
                      "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                      "brand": {
                          "@type": "Brand",
                          "@id": "930833574",
                          "name": "ZEEDOG"
                      },
                      "inProductGroupWithID": "5052813",
                      "sku": "4215871",
                      "gtin": "7908471119043",
                      "releaseDate": 1669852800000,
                      "additionalProperty": [
                          {
                              "@type": "PropertyValue",
                              "name": "Tamanho",
                              "value": "39",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "gender",
                              "value": "unisex",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010297",
                              "value": "Human"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010530",
                              "value": "Calçados"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Coleção de Bloqueio",
                              "propertyID": "144"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "asics",
                              "propertyID": "620"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "zdh_flashpromo_lp",
                              "propertyID": "701"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday Human 2023",
                              "propertyID": "756"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Segunda Chance BF 2023",
                              "propertyID": "758"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "RefId",
                              "value": "5052813_0_0_39",
                              "valueReference": "ReferenceID"
                          }
                      ],
                      "isVariantOf": {
                          "@type": "ProductGroup",
                          "productGroupID": "5052813",
                          "hasVariant": [
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215871",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215871",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 39",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215871",
                                  "gtin": "7908471119043",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "39",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_39",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:19Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215872",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215872",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 40",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215872",
                                  "gtin": "7908471119050",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "40",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_40",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215874",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215874",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 41",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215874",
                                  "gtin": "7908471119067",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "41",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_41",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "American Express",
                                                      "description": "American Express 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Visa",
                                                      "description": "Visa 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Mastercard",
                                                      "description": "Mastercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Boleto Bancário",
                                                      "description": "Boleto Bancário à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Hipercard",
                                                      "description": "Hipercard 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Elo",
                                                      "description": "Elo 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Vale",
                                                      "description": "Vale à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Maestro",
                                                      "description": "Maestro à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Debito",
                                                      "description": "Venda Direta Debito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 2 vezes sem juros",
                                                      "billingDuration": 2,
                                                      "billingIncrement": 299.5,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Venda Direta Credito",
                                                      "description": "Venda Direta Credito 3 vezes sem juros",
                                                      "billingDuration": 3,
                                                      "billingIncrement": 199.66,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "PicPay",
                                                      "description": "PicPay à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "priceComponentType": "https://schema.org/Installment",
                                                      "name": "Pix",
                                                      "description": "Pix à vista",
                                                      "billingDuration": 1,
                                                      "billingIncrement": 599,
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215870",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215870",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 42",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215870",
                                  "gtin": "7908471119074",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "42",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_42",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215873",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215873",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 43",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215873",
                                  "gtin": "7908471119081",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "43",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_43",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215869",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p?skuId=4215869",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite 44",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052813",
                                  "sku": "4215869",
                                  "gtin": "7908471119098",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "44",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052813_0_0_44",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:57:18Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              }
                          ],
                          "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-masculino-grafite-1420417/p",
                          "name": "Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite",
                          "additionalProperty": [
                              {
                                  "@type": "PropertyValue",
                                  "name": "Release_Date",
                                  "value": "2022-12-03",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Cor",
                                  "value": "Preto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "nome_produto",
                                  "value": "Grafite",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Filtro de Tipo",
                                  "value": "Calçados",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Imagens_Medidas",
                                  "value": "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/size_chart_calcados_grafite.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Bundle_Recomendacao",
                                  "value": "['carrossel':'1','posicao':'1','produto':'5052810'];\r\n['carrossel':'1','posicao':'2','produto':'5052808'];\r\n['carrossel':'2','posicao':'1','produto':'5052764'];\r\n['carrossel':'2','posicao':'2','produto':'5052765'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Fotos_Produto",
                                  "value": "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main1.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main2.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main3.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main4.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main5.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main6.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite | Zee.Dog'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Age",
                                  "value": "adulto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Estampas_Relacionadas",
                                  "value": "['idProduto':'5052813','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Masculino Grafite','nomeEstampa':'Grafite','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png'];\r\n['idProduto':'5052815','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Masculino Off-White','nomeEstampa':'Off-White','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "TableSizeChart",
                                  "value": "<ul class=\"sizes\">\r\n   <li>A. COMPRIMENTO</li>\r\n   <li><span>39</span>26 cm</li>\r\n   <li><span>40</span>27 cm</li>\r\n   <li><span>41</span>27.5 cm</li>\r\n   <li><span>42</span>28.5 cm</li>\r\n   <li><span>43</span>29.5 cm</li>\r\n   <li><span>44</span>30 cm</li>\r\n\r\n</ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Descricao_Produto",
                                  "value": "ASICS e Zee.Dog Human se juntam para uma colaboração inédita. A coleção conta com duas versões do icônico tênis JAPAN S, além de uma coleção de roupas e acessórios.\r\nO tênis JAPAN S™ é baseado em um modelo de 1981. A peça retrabalhada apresenta uma silhueta de cano baixo e biqueira inspirada nas quadras e cores retrô.\r\nEle foi atualizado com design cupsole leve modificado, complementado com conforto premium e mais amortecimento. Imitando a estética de um tênis de basquete, seu look retrô é combinado a marcas registradas nostálgicas da ASICS, como as Tiger Stripes nos painéis laterais e “ASICS” escrito no calcanhar.\r\nA estética vintage inspirada no basquete do JAPAN S™ é combinada a detalhes específicos para as quadras inspirados nos tênis usados pelos atletas dos anos 80.",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Atributos_Especiais",
                                  "value": "<ul><li>Modelo Masculino;</li>\r\n<li>Feito em lona e tecido tressado;</li>\r\n<li>Bordado de alta definição no calcanhar;</li>\r\n<li>Cadarço em cor alternativa;</li>\r\n<li>100% algodão</li></ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "facebook_image",
                                  "value": "https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_main1.jpg",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "sellerId",
                                  "value": "1",
                                  "valueReference": "PROPERTY"
                              }
                          ],
                          "model": "1420417"
                      },
                      "image": [
                          {
                              "@type": "ImageObject",
                              "alternateName": "cinza",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211690/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png?v=638055054091900000",
                              "name": "cinza"
                          },
                          {
                              "@type": "ImageObject",
                              "alternateName": "mainhover",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211691/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_hover.png?v=638055054154230000",
                              "name": "mainhover"
                          }
                      ],
                      "offers": {
                          "@type": "AggregateOffer",
                          "priceCurrency": "BRL",
                          "highPrice": 599,
                          "lowPrice": 599,
                          "offerCount": 1,
                          "offers": [
                              {
                                  "@type": "Offer",
                                  "price": 599,
                                  "seller": "1",
                                  "priceValidUntil": "2024-12-04T21:57:19Z",
                                  "inventoryLevel": {
                                      "value": 0
                                  },
                                  "giftSkuIds": [],
                                  "teasers": [],
                                  "priceSpecification": [
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/ListPrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SRP",
                                          "price": 599
                                      }
                                  ],
                                  "availability": "https://schema.org/OutOfStock"
                              }
                          ]
                      }
                  },
                  {
                      "@type": "Product",
                      "category": "Human>Calçados",
                      "productID": "4215876",
                      "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215876",
                      "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  34",
                      "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                      "brand": {
                          "@type": "Brand",
                          "@id": "930833574",
                          "name": "ZEEDOG"
                      },
                      "inProductGroupWithID": "5052814",
                      "sku": "4215876",
                      "gtin": "7908471119227",
                      "releaseDate": 1669852800000,
                      "additionalProperty": [
                          {
                              "@type": "PropertyValue",
                              "name": "Tamanho",
                              "value": "34",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "gender",
                              "value": "unisex",
                              "valueReference": "SPECIFICATION"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010297",
                              "value": "Human"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "category",
                              "propertyID": "4010530",
                              "value": "Calçados"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Coleção de Bloqueio",
                              "propertyID": "144"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "asics",
                              "propertyID": "620"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "zdh_flashpromo_lp",
                              "propertyID": "701"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday Human 2023",
                              "propertyID": "756"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Segunda Chance BF 2023",
                              "propertyID": "758"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "cluster",
                              "value": "Black Friday | 50%",
                              "propertyID": "761"
                          },
                          {
                              "@type": "PropertyValue",
                              "name": "RefId",
                              "value": "5052814_0_0_34",
                              "valueReference": "ReferenceID"
                          }
                      ],
                      "isVariantOf": {
                          "@type": "ProductGroup",
                          "productGroupID": "5052814",
                          "hasVariant": [
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215876",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215876",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  34",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215876",
                                  "gtin": "7908471119227",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "34",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_34",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215877",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215877",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  35",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215877",
                                  "gtin": "7908471119104",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "35",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_35",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215881",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215881",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  36",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215881",
                                  "gtin": "7908471119111",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "36",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_36",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215880",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215880",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  37",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215880",
                                  "gtin": "7908471119128",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "37",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_37",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215878",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215878",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  38",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215878",
                                  "gtin": "7908471119135",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "38",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_38",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              },
                              {
                                  "@type": "Product",
                                  "category": "Human>Calçados",
                                  "productID": "4215879",
                                  "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p?skuId=4215879",
                                  "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White  39",
                                  "description": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                                  "brand": {
                                      "@type": "Brand",
                                      "@id": "930833574",
                                      "name": "ZEEDOG"
                                  },
                                  "inProductGroupWithID": "5052814",
                                  "sku": "4215879",
                                  "gtin": "7908471119142",
                                  "releaseDate": 1669852800000,
                                  "additionalProperty": [
                                      {
                                          "@type": "PropertyValue",
                                          "name": "Tamanho",
                                          "value": "39",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "gender",
                                          "value": "unisex",
                                          "valueReference": "SPECIFICATION"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010297",
                                          "value": "Human"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "category",
                                          "propertyID": "4010530",
                                          "value": "Calçados"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Coleção de Bloqueio",
                                          "propertyID": "144"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "asics",
                                          "propertyID": "620"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "zdh_flashpromo_lp",
                                          "propertyID": "701"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday Human 2023",
                                          "propertyID": "756"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Segunda Chance BF 2023",
                                          "propertyID": "758"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "cluster",
                                          "value": "Black Friday | 50%",
                                          "propertyID": "761"
                                      },
                                      {
                                          "@type": "PropertyValue",
                                          "name": "RefId",
                                          "value": "5052814_0_0_39",
                                          "valueReference": "ReferenceID"
                                      }
                                  ],
                                  "image": [
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "cinza",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                                          "name": "cinza"
                                      },
                                      {
                                          "@type": "ImageObject",
                                          "alternateName": "mainhover",
                                          "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                                          "name": "mainhover"
                                      }
                                  ],
                                  "offers": {
                                      "@type": "AggregateOffer",
                                      "priceCurrency": "BRL",
                                      "highPrice": 599,
                                      "lowPrice": 599,
                                      "offerCount": 1,
                                      "offers": [
                                          {
                                              "@type": "Offer",
                                              "price": 599,
                                              "seller": "1",
                                              "priceValidUntil": "2024-12-04T21:52:44Z",
                                              "inventoryLevel": {
                                                  "value": 0
                                              },
                                              "giftSkuIds": [],
                                              "teasers": [],
                                              "priceSpecification": [
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/ListPrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SalePrice",
                                                      "price": 599
                                                  },
                                                  {
                                                      "@type": "UnitPriceSpecification",
                                                      "priceType": "https://schema.org/SRP",
                                                      "price": 599
                                                  }
                                              ],
                                              "availability": "https://schema.org/OutOfStock"
                                          }
                                      ]
                                  }
                              }
                          ],
                          "url": "https://www.zeedog.com.br/tenis-japan-s-asics-x-zeedog-human-feminino-off-white--1420418/p",
                          "name": "Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White",
                          "additionalProperty": [
                              {
                                  "@type": "PropertyValue",
                                  "name": "Release_Date",
                                  "value": "2022-12-03",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Cor",
                                  "value": "Branco",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "nome_produto",
                                  "value": "Off-White",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Filtro de Tipo",
                                  "value": "Calçados",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Imagens_Medidas",
                                  "value": "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/size_chart_calcados_offwhite.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Bundle_Recomendacao",
                                  "value": "['carrossel':'1','posicao':'1','produto':'5052807'];\r\n['carrossel':'1','posicao':'2','produto':'5052809'];\r\n['carrossel':'2','posicao':'1','produto':'5052764'];\r\n['carrossel':'2','posicao':'2','produto':'5052765'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Fotos_Produto",
                                  "value": "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main1.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main2.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main3.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main4.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main5.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main6.jpg','altImagem':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off White | Zee.Dog'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Age",
                                  "value": "adulto",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "gender",
                                  "value": "unisex",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Estampas_Relacionadas",
                                  "value": "['idProduto':'5052812','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Feminino Grafite','nomeEstampa':'Grafite','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/tênis_Japan_S_Asics_x_Zee.Dog_Human_Grafite_active__.png'];\r\n['idProduto':'5052814','nomeProduto':'Tênis Japan S ASICS x Zee.Dog Human Feminino Off-White','nomeEstampa':'Off-White','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png'];",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "TableSizeChart",
                                  "value": "<ul class=\"sizes\">\r\n   <li>A. COMPRIMENTO</li>\r\n   <li><span>34</span>23 cm</li>\r\n   <li><span>35</span>24 cm</li>\r\n   <li><span>36</span>24.5 cm</li>\r\n   <li><span>37</span>25 cm</li>\r\n   <li><span>38</span>26 cm</li>\r\n   <li><span>39</span>26.5 cm</li>\r\n\r\n</ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Descricao_Produto",
                                  "value": "ASICS e Zee.Dog Human se juntam para uma colaboração inédita. A coleção conta com duas versões do icônico tênis JAPAN S, além de uma coleção de roupas e acessórios.\r\nO tênis JAPAN S™ é baseado em um modelo de 1981. A peça retrabalhada apresenta uma silhueta de cano baixo e biqueira inspirada nas quadras e cores retrô.\r\nEle foi atualizado com design cupsole leve modificado, complementado com conforto premium e mais amortecimento. Imitando a estética de um tênis de basquete, seu look retrô é combinado a marcas registradas nostálgicas da ASICS, como as Tiger Stripes nos painéis laterais e “ASICS” escrito no calcanhar.\r\nA estética vintage inspirada no basquete do JAPAN S™ é combinada a detalhes específicos para as quadras inspirados nos tênis usados pelos atletas dos anos 80.",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "Atributos_Especiais",
                                  "value": "<ul><li>Modelo Feminino;</li>\r\n<li>Feito em lona e veludo cotelê;</li>\r\n<li>Bordado de alta definição no calcanhar;</li>\r\n<li>Cadarço em cor alternativa;</li>\r\n<li>100% algodão</li></ul>",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "facebook_image",
                                  "value": "https://zeedog.vteximg.com.br/arquivos/Tênis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_main1.jpg",
                                  "valueReference": "PROPERTY"
                              },
                              {
                                  "@type": "PropertyValue",
                                  "name": "sellerId",
                                  "value": "1",
                                  "valueReference": "PROPERTY"
                              }
                          ],
                          "model": "1420418"
                      },
                      "image": [
                          {
                              "@type": "ImageObject",
                              "alternateName": "cinza",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211692/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_active.png?v=638055078973970000",
                              "name": "cinza"
                          },
                          {
                              "@type": "ImageObject",
                              "alternateName": "mainhover",
                              "url": "https://zeedog.vtexassets.com/arquivos/ids/211693/Tenis_Japan_S_Asics_x_Zee.Dog_Human_Off_White_hover.png?v=638055079055970000",
                              "name": "mainhover"
                          }
                      ],
                      "offers": {
                          "@type": "AggregateOffer",
                          "priceCurrency": "BRL",
                          "highPrice": 599,
                          "lowPrice": 599,
                          "offerCount": 1,
                          "offers": [
                              {
                                  "@type": "Offer",
                                  "price": 599,
                                  "seller": "1",
                                  "priceValidUntil": "2024-12-04T21:52:44Z",
                                  "inventoryLevel": {
                                      "value": 0
                                  },
                                  "giftSkuIds": [],
                                  "teasers": [],
                                  "priceSpecification": [
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/ListPrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SalePrice",
                                          "price": 599
                                      },
                                      {
                                          "@type": "UnitPriceSpecification",
                                          "priceType": "https://schema.org/SRP",
                                          "price": 599
                                      }
                                  ],
                                  "availability": "https://schema.org/OutOfStock"
                              }
                          ]
                      }
                  }
              ]
          }
      ],
      "type": "function_calls",
      "role": "bot"
  }
]