import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef } from "preact/hooks";

function Chat() {
  const messageEl = useRef<HTMLDivElement>(null);
  const userInput = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<{ content: any; role: "user" | "bot" }[]>(
    [],
  );

  messageList.value = [
    {
      "content": "coleira azul de gato",
      "role": "bot",
    },
    {
      "content":
        'A coleira para gatos "Ultimate Blue" da Zee.Cat tem fecho breakaway, que abre sozinho caso o gato se enrosque, além de ser totalmente regulável. O tamanho é único, com regulagem ajustável, e a coleira é feita de super poliéster estampado com tecnologia heat-transfer teteron. Além disso, possui uma logo emborrachada da Zee.Cat, feita em material atóxico. A largura da tira é de 1 cm e a regulagem do pescoço varia de 20 a 30 cm. O preço da coleira é de R$ 59. Esta coleira está em estoque e pode ser encontrada no seguinte link: [Coleira para gatos Ultimate Blue](https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p?skuId=4156233)',
      "role": "user",
    },
    {
      "content": [
        [
          {
            "@type": "Product",
            "category": "Gatos>Coleiras",
            "productID": "4156233",
            "url":
              "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p?skuId=4156233",
            "name": "Coleira para gatos Ultimate Blue",
            "description": "Coleira para gatos Ultimate Blue",
            "brand": {
              "@type": "Brand",
              "@id": "930833574",
              "name": "ZEEDOG",
            },
            "inProductGroupWithID": "5032500",
            "sku": "4156233",
            "gtin": "7908471101055",
            "releaseDate": 1635033600000,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Tamanho",
                "value": "U",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "gender",
                "value": "unisex",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000096",
                "value": "Gatos",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000120",
                "value": "Coleiras",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Loja",
                "propertyID": "136",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Clerk",
                "propertyID": "139",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Apollo 13",
                "propertyID": "142",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção de Bloqueio",
                "propertyID": "144",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Últimos lançamentos Zee.Cat",
                "propertyID": "175",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Feed Criteo",
                "propertyID": "265",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Fast Shop",
                "propertyID": "283",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleções Pets Reposições",
                "propertyID": "355",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_homeZH_3.1",
                "propertyID": "399",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_CRMbonus_acessorios",
                "propertyID": "421",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_homeZD_2.3",
                "propertyID": "422",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda",
                "propertyID": "482",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda-sem-pre-sales",
                "propertyID": "483",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "solids-l4-out-21",
                "propertyID": "484",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "solids-ultimate-blue",
                "propertyID": "485",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "lancamento-l4-2021",
                "propertyID": "493",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "launch-ZeeCat-nov-21",
                "propertyID": "501",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Live-Auto-Gatos-Acessorios",
                "propertyID": "502",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao-lojinha-mafia-trigatos",
                "propertyID": "576",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "troca-bf22",
                "propertyID": "609",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "copa-do-mundo",
                "propertyID": "618",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "escolhidos-ate-100",
                "propertyID": "624",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "FlashPromo",
                "propertyID": "638",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_estampas_monocromaticas",
                "propertyID": "699",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_lp",
                "propertyID": "702",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_landing",
                "propertyID": "704",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_flash_promo_lp",
                "propertyID": "725",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "promo_pre_bf_2023",
                "propertyID": "729",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_coleiras",
                "propertyID": "732",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "dia_do_cliente_2023",
                "propertyID": "741",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "gatos_solids",
                "propertyID": "744",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday 2023",
                "propertyID": "755",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Segunda Chance BF 2023",
                "propertyID": "758",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday | 40%",
                "propertyID": "762",
              },
              {
                "@type": "PropertyValue",
                "name": "RefId",
                "value": "5032500_0_0_U",
                "valueReference": "ReferenceID",
              },
            ],
            "isVariantOf": {
              "@type": "ProductGroup",
              "productGroupID": "5032500",
              "hasVariant": [
                {
                  "@type": "Product",
                  "category": "Gatos>Coleiras",
                  "productID": "4156233",
                  "url":
                    "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p?skuId=4156233",
                  "name": "Coleira para gatos Ultimate Blue",
                  "description": "Coleira para gatos Ultimate Blue",
                  "brand": {
                    "@type": "Brand",
                    "@id": "930833574",
                    "name": "ZEEDOG",
                  },
                  "inProductGroupWithID": "5032500",
                  "sku": "4156233",
                  "gtin": "7908471101055",
                  "releaseDate": 1635033600000,
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Tamanho",
                      "value": "U",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "gender",
                      "value": "unisex",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000096",
                      "value": "Gatos",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000120",
                      "value": "Coleiras",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Loja",
                      "propertyID": "136",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Clerk",
                      "propertyID": "139",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Apollo 13",
                      "propertyID": "142",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção de Bloqueio",
                      "propertyID": "144",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Últimos lançamentos Zee.Cat",
                      "propertyID": "175",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Feed Criteo",
                      "propertyID": "265",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Fast Shop",
                      "propertyID": "283",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleções Pets Reposições",
                      "propertyID": "355",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_homeZH_3.1",
                      "propertyID": "399",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_CRMbonus_acessorios",
                      "propertyID": "421",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_homeZD_2.3",
                      "propertyID": "422",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda",
                      "propertyID": "482",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda-sem-pre-sales",
                      "propertyID": "483",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "solids-l4-out-21",
                      "propertyID": "484",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "solids-ultimate-blue",
                      "propertyID": "485",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "lancamento-l4-2021",
                      "propertyID": "493",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "launch-ZeeCat-nov-21",
                      "propertyID": "501",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Live-Auto-Gatos-Acessorios",
                      "propertyID": "502",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao-lojinha-mafia-trigatos",
                      "propertyID": "576",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "troca-bf22",
                      "propertyID": "609",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "copa-do-mundo",
                      "propertyID": "618",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "escolhidos-ate-100",
                      "propertyID": "624",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "FlashPromo",
                      "propertyID": "638",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_estampas_monocromaticas",
                      "propertyID": "699",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_lp",
                      "propertyID": "702",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_landing",
                      "propertyID": "704",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_flash_promo_lp",
                      "propertyID": "725",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "promo_pre_bf_2023",
                      "propertyID": "729",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_coleiras",
                      "propertyID": "732",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "dia_do_cliente_2023",
                      "propertyID": "741",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "gatos_solids",
                      "propertyID": "744",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday 2023",
                      "propertyID": "755",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Segunda Chance BF 2023",
                      "propertyID": "758",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday | 40%",
                      "propertyID": "762",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "RefId",
                      "value": "5032500_0_0_U",
                      "valueReference": "ReferenceID",
                    },
                  ],
                  "image": [
                    {
                      "@type": "ImageObject",
                      "alternateName": "cinza",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/202613/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png?v=637656886349730000",
                      "name": "cinza",
                    },
                    {
                      "@type": "ImageObject",
                      "alternateName": "mainhover",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/202614/coleira-para-gatos-ultimate-blue-zeecat-pet-hover.png?v=637656886434000000",
                      "name": "mainhover",
                    },
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "BRL",
                    "highPrice": 59,
                    "lowPrice": 59,
                    "offerCount": 1,
                    "offers": [
                      {
                        "@type": "Offer",
                        "price": 59,
                        "seller": "1",
                        "priceValidUntil": "2024-12-01T18:19:57Z",
                        "inventoryLevel": {
                          "value": 10000,
                        },
                        "giftSkuIds": [],
                        "teasers": [],
                        "priceSpecification": [
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/ListPrice",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SRP",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Boleto Bancário",
                            "description": "Boleto Bancário à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Elo",
                            "description": "Elo à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Elo",
                            "description": "Elo 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Vale",
                            "description": "Vale à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Maestro",
                            "description": "Maestro à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Debito",
                            "description": "Venda Direta Debito à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description": "Venda Direta Credito à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description":
                              "Venda Direta Credito 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description":
                              "Venda Direta Credito 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "PicPay",
                            "description": "PicPay à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Pix",
                            "description": "Pix à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                        ],
                        "availability": "https://schema.org/InStock",
                      },
                    ],
                  },
                },
              ],
              "url":
                "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p",
              "name": "Coleira para gatos Ultimate Blue",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Release_Date",
                  "value": "2021-10-28",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cor",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "nome_produto",
                  "value": "Ultimate Blue",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Imagens_Medidas",
                  "value":
                    "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/Zee.Cat-Coleira-Size-Chart-BR.png'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Bundle_Recomendacao",
                  "value":
                    "['carrossel':'1','posicao':'1','produto':'5032515'];\r\n['carrossel':'2','posicao':'1','produto':'5033799'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Fotos_Produto",
                  "value":
                    "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-1.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlVideo':'https://d17lu9slax0fqq.cloudfront.net/videos/pdp/zeecat-buckle-guide.mp4','urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-2.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-3.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-4.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Age",
                  "value": "adulto",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Estampas_Relacionadas",
                  "value":
                    "['idProduto':'5032500','nomeProduto':'Coleira para gatos Ultimate Blue','nomeEstampa':'Ultimate Blue','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png'];\r\n['idProduto':'5032501','nomeProduto':'Coleira para gatos Pink Led','nomeEstampa':'Pink Led','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-pink-led-zeecat-pet-active.png'];\r\n['idProduto':'5032502','nomeProduto':'Coleira para gatos Sand','nomeEstampa':'Sand','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-sand-zeecat-pet-active.png'];\r\n['idProduto':'5000865','nomeProduto':'Coleira para gatos Gotham','nomeEstampa':'Gotham','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_gotham_preto_zeecat_gato_pet_fb.jpg'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "TableSizeChart",
                  "value":
                    '<ul class="sizes">\r\n   <li>Largura da tira</li>\r\n   <li><span>U</span>1 cm</li>\r\n</ul>\r\n<ul class="sizes">\r\n   <li>Regulagem do pescoço</li>\r\n   <li><span>U</span>20 a 30 cm</li>\r\n</ul>',
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Descricao_Produto",
                  "value":
                    "A coleira para gatos Ultimate Blue da Zee.Cat tem fecho breakway, que abre sozinho caso o gato se enrosque, além de ser totalmente regulável.",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Atributos_Especiais",
                  "value":
                    "<ul><li>Tamanho único com regulagem ajustável;</li>\r\n<li>Exclusivo fecho breakaway que abre sozinho caso o gato se enrosque;</li>\r\n<li>Super poliéster estampado com tecnologia heat-transfer teteron;</li>\r\n<li>Logo emborrachada da Zee.Cat, feita em material atóxico.</li></ul>",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "facebook_image",
                  "value":
                    "https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-1.jpg",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Tamanho",
                  "value": "U",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "sellerId",
                  "value": "1",
                  "valueReference": "PROPERTY",
                },
              ],
              "model": "9010003",
            },
            "image": [
              {
                "@type": "ImageObject",
                "alternateName": "cinza",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/202613/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png?v=637656886349730000",
                "name": "cinza",
              },
              {
                "@type": "ImageObject",
                "alternateName": "mainhover",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/202614/coleira-para-gatos-ultimate-blue-zeecat-pet-hover.png?v=637656886434000000",
                "name": "mainhover",
              },
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "highPrice": 59,
              "lowPrice": 59,
              "offerCount": 1,
              "offers": [
                {
                  "@type": "Offer",
                  "price": 59,
                  "seller": "1",
                  "priceValidUntil": "2024-12-01T18:19:57Z",
                  "inventoryLevel": {
                    "value": 10000,
                  },
                  "giftSkuIds": [],
                  "teasers": [],
                  "priceSpecification": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/ListPrice",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SRP",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Boleto Bancário",
                      "description": "Boleto Bancário à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Elo",
                      "description": "Elo à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Elo",
                      "description": "Elo 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Vale",
                      "description": "Vale à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Maestro",
                      "description": "Maestro à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Debito",
                      "description": "Venda Direta Debito à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "PicPay",
                      "description": "PicPay à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Pix",
                      "description": "Pix à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                  ],
                  "availability": "https://schema.org/InStock",
                },
              ],
            },
          },
          {
            "@type": "Product",
            "category": "Gatos>Coleiras",
            "productID": "4008257",
            "url":
              "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p?skuId=4008257",
            "name": "Coleira para gatos Neopro Azul\n U",
            "description": "Coleira para gatos Neopro Azul",
            "brand": {
              "@type": "Brand",
              "@id": "930833574",
              "name": "ZEEDOG",
            },
            "inProductGroupWithID": "5005699",
            "sku": "4008257",
            "gtin": "7898582481095",
            "releaseDate": 1593043200000,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Tamanho",
                "value": "U",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "gender",
                "value": "unisex",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000096",
                "value": "Gatos",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000120",
                "value": "Coleiras",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Loja",
                "propertyID": "136",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Clerk",
                "propertyID": "139",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Apollo 13",
                "propertyID": "142",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção de Bloqueio",
                "propertyID": "144",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Últimos lançamentos Zee.Cat",
                "propertyID": "175",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Neopro",
                "propertyID": "183",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Neopro Azul",
                "propertyID": "185",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Estampa NeoPro",
                "propertyID": "189",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Feed Criteo",
                "propertyID": "265",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Promo Até 40 Off",
                "propertyID": "266",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Fast Shop",
                "propertyID": "283",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção BF 2020 Completo",
                "propertyID": "337",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção Facebook",
                "propertyID": "346",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Produtos Reposicao Jan-2021",
                "propertyID": "348",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleções Pets Reposições Acessórios",
                "propertyID": "356",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_CRMbonus_acessorios",
                "propertyID": "421",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_fp_acessorios",
                "propertyID": "458",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda",
                "propertyID": "482",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda-sem-pre-sales",
                "propertyID": "483",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Live-Auto-Gatos-Acessorios",
                "propertyID": "502",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_lp",
                "propertyID": "702",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "promo_pre_bf_2023",
                "propertyID": "729",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_coleiras",
                "propertyID": "732",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Promo Especial",
                "propertyID": "737",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "gatos_neopro",
                "propertyID": "743",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday 2023",
                "propertyID": "755",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Segunda Chance BF 2023",
                "propertyID": "758",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday | 50% até 70%",
                "propertyID": "764",
              },
              {
                "@type": "PropertyValue",
                "name": "RefId",
                "value": "5005699_0_0_U",
                "valueReference": "ReferenceID",
              },
            ],
            "isVariantOf": {
              "@type": "ProductGroup",
              "productGroupID": "5005699",
              "hasVariant": [
                {
                  "@type": "Product",
                  "category": "Gatos>Coleiras",
                  "productID": "4008257",
                  "url":
                    "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p?skuId=4008257",
                  "name": "Coleira para gatos Neopro Azul\n U",
                  "description": "Coleira para gatos Neopro Azul",
                  "brand": {
                    "@type": "Brand",
                    "@id": "930833574",
                    "name": "ZEEDOG",
                  },
                  "inProductGroupWithID": "5005699",
                  "sku": "4008257",
                  "gtin": "7898582481095",
                  "releaseDate": 1593043200000,
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Tamanho",
                      "value": "U",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "gender",
                      "value": "unisex",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000096",
                      "value": "Gatos",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000120",
                      "value": "Coleiras",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Loja",
                      "propertyID": "136",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Clerk",
                      "propertyID": "139",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Apollo 13",
                      "propertyID": "142",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção de Bloqueio",
                      "propertyID": "144",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Últimos lançamentos Zee.Cat",
                      "propertyID": "175",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Neopro",
                      "propertyID": "183",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Neopro Azul",
                      "propertyID": "185",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Estampa NeoPro",
                      "propertyID": "189",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Feed Criteo",
                      "propertyID": "265",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Promo Até 40 Off",
                      "propertyID": "266",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Fast Shop",
                      "propertyID": "283",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção BF 2020 Completo",
                      "propertyID": "337",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção Facebook",
                      "propertyID": "346",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Produtos Reposicao Jan-2021",
                      "propertyID": "348",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleções Pets Reposições Acessórios",
                      "propertyID": "356",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_CRMbonus_acessorios",
                      "propertyID": "421",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_fp_acessorios",
                      "propertyID": "458",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda",
                      "propertyID": "482",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda-sem-pre-sales",
                      "propertyID": "483",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Live-Auto-Gatos-Acessorios",
                      "propertyID": "502",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_lp",
                      "propertyID": "702",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "promo_pre_bf_2023",
                      "propertyID": "729",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_coleiras",
                      "propertyID": "732",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Promo Especial",
                      "propertyID": "737",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "gatos_neopro",
                      "propertyID": "743",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday 2023",
                      "propertyID": "755",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Segunda Chance BF 2023",
                      "propertyID": "758",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday | 50% até 70%",
                      "propertyID": "764",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "RefId",
                      "value": "5005699_0_0_U",
                      "valueReference": "ReferenceID",
                    },
                  ],
                  "image": [
                    {
                      "@type": "ImageObject",
                      "alternateName": "cinza",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/197569/coleira-para-gatos-blue-zeecat-neopro-zeedog-active.png?v=637514338580900000",
                      "name": "cinza",
                    },
                    {
                      "@type": "ImageObject",
                      "alternateName": "mainhover",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/201656/coleira-para-gatos-blue-zeecat-neopro-zeedog-hover.png?v=637636075653100000",
                      "name": "mainhover",
                    },
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "BRL",
                    "highPrice": 69,
                    "lowPrice": 69,
                    "offerCount": 1,
                    "offers": [
                      {
                        "@type": "Offer",
                        "price": 69,
                        "seller": "1",
                        "priceValidUntil": "2024-12-01T18:19:57Z",
                        "inventoryLevel": {
                          "value": 0,
                        },
                        "giftSkuIds": [],
                        "teasers": [],
                        "priceSpecification": [
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/ListPrice",
                            "price": 69,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "price": 69,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SRP",
                            "price": 69,
                          },
                        ],
                        "availability": "https://schema.org/OutOfStock",
                      },
                    ],
                  },
                },
              ],
              "url":
                "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p",
              "name": "Coleira para gatos Neopro Azul",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Release_Date",
                  "value": "2019-12-31",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cor",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "nome_produto",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Bundle_Recomendacao",
                  "value":
                    "['carrossel':'1','posicao':'1','produto':'5006028'];\r\n['carrossel':'1','posicao':'2','produto':'5011104'];\r\n['carrossel':'1','posicao':'3','produto':'413'];\r\n['carrossel':'2','posicao':'1','produto':'5006180'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "estampa",
                  "value": "Neopro Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Fotos_Produto",
                  "value":
                    "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-1-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlVideo':'https://s3-sa-east-1.amazonaws.com/zee.dog/videos/pdp/zeecat-buckle-guide.mp4','urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-2-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-3-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-4-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Age",
                  "value": "adulto",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Estampas_Relacionadas",
                  "value":
                    "['idProduto':'5005698','nomeProduto':'Coleira para gatos Neopro Preto','nomeEstampa':'Preto','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_preto_zeedog_gato_pet_fb.jpg'];\r\n['idProduto':'5005699','nomeProduto':'Coleira para gatos Neopro Azul','nomeEstampa':'Azul','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_blue_zeecat_gato_pet_fb.png'];\r\n['idProduto':'5005700','nomeProduto':'Coleira para gatos Neopro Coral','nomeEstampa':'Coral','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_red_zeecat_gato_pet_fb.png'];\r\n['idProduto':'5005701','nomeProduto':'Coleira para gatos Neopro Verde Limão','nomeEstampa':'Verde Limão','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/ids/172379_2/coleira-para-gatos_neopro_limegreen_zeecat_gato_pet_active.png'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "TableSizeChart",
                  "value":
                    '<ul class="sizes">\r\n   <li>Largura da tira</li>\r\n   <li><span>U</span>1 cm</li>\r\n</ul>\r\n<ul class="sizes">\r\n   <li>Regulagem do pescoço</li>\r\n   <li><span>U</span>20 a 30 cm</li>\r\n</ul>',
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Descricao_Produto",
                  "value":
                    "A coleira para gatos NeoPro é mais um super lançamento da Zee.Dog. A coleira possui uma nova tecnologia com ultra proteção externa de borracha de PVC chamada NeoPro, resistente à água e à ação do tempo, evitando que a coleira fique suja, molhada ou arranhada. Além de ser muito mais fácil de limpar, a coleira é feita com a mesma qualidade e material que a coleira para cachorro da Zee.Dog. Nossas coleiras de gato tem fecho breakway, que abre sozinho caso o gato se enrosque. Totalmente reguláveis, para gatos de atitude.",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Atributos_Especiais",
                  "value":
                    "<ul>\r\n\r\n<li>Nova tecnologia NeoPro, com ultra proteção resistente à água e à ação do tempo</li>\r\n<li>Muito fácil de limpar</li>\r\n<li>Tamanho único com regularem ajustável.</li>\r\n<li>Exclusivo fecho breakaway que abre sozinho caso o gato se enrosque.</li>\r\n<li>Logo emborrachada da Zee.Dog, feita em material atóxico.</li>\r\n</ul>",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "facebook_image",
                  "value":
                    "https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-1.jpg",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "sellerId",
                  "value": "1",
                  "valueReference": "PROPERTY",
                },
              ],
              "model": "901278",
            },
            "image": [
              {
                "@type": "ImageObject",
                "alternateName": "cinza",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/197569/coleira-para-gatos-blue-zeecat-neopro-zeedog-active.png?v=637514338580900000",
                "name": "cinza",
              },
              {
                "@type": "ImageObject",
                "alternateName": "mainhover",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/201656/coleira-para-gatos-blue-zeecat-neopro-zeedog-hover.png?v=637636075653100000",
                "name": "mainhover",
              },
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "highPrice": 69,
              "lowPrice": 69,
              "offerCount": 1,
              "offers": [
                {
                  "@type": "Offer",
                  "price": 69,
                  "seller": "1",
                  "priceValidUntil": "2024-12-01T18:19:57Z",
                  "inventoryLevel": {
                    "value": 0,
                  },
                  "giftSkuIds": [],
                  "teasers": [],
                  "priceSpecification": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/ListPrice",
                      "price": 69,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "price": 69,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SRP",
                      "price": 69,
                    },
                  ],
                  "availability": "https://schema.org/OutOfStock",
                },
              ],
            },
          },
        ],
        [
          {
            "@type": "Product",
            "category": "Gatos>Coleiras",
            "productID": "4156233",
            "url":
              "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p?skuId=4156233",
            "name": "Coleira para gatos Ultimate Blue",
            "description": "Coleira para gatos Ultimate Blue",
            "brand": {
              "@type": "Brand",
              "@id": "930833574",
              "name": "ZEEDOG",
            },
            "inProductGroupWithID": "5032500",
            "sku": "4156233",
            "gtin": "7908471101055",
            "releaseDate": 1635033600000,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Tamanho",
                "value": "U",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "gender",
                "value": "unisex",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000096",
                "value": "Gatos",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000120",
                "value": "Coleiras",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Loja",
                "propertyID": "136",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Clerk",
                "propertyID": "139",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Apollo 13",
                "propertyID": "142",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção de Bloqueio",
                "propertyID": "144",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Últimos lançamentos Zee.Cat",
                "propertyID": "175",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Feed Criteo",
                "propertyID": "265",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Fast Shop",
                "propertyID": "283",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleções Pets Reposições",
                "propertyID": "355",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_homeZH_3.1",
                "propertyID": "399",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_CRMbonus_acessorios",
                "propertyID": "421",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_homeZD_2.3",
                "propertyID": "422",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda",
                "propertyID": "482",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda-sem-pre-sales",
                "propertyID": "483",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "solids-l4-out-21",
                "propertyID": "484",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "solids-ultimate-blue",
                "propertyID": "485",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "lancamento-l4-2021",
                "propertyID": "493",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "launch-ZeeCat-nov-21",
                "propertyID": "501",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Live-Auto-Gatos-Acessorios",
                "propertyID": "502",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao-lojinha-mafia-trigatos",
                "propertyID": "576",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "troca-bf22",
                "propertyID": "609",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "copa-do-mundo",
                "propertyID": "618",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "escolhidos-ate-100",
                "propertyID": "624",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "FlashPromo",
                "propertyID": "638",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_estampas_monocromaticas",
                "propertyID": "699",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_lp",
                "propertyID": "702",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_landing",
                "propertyID": "704",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_flash_promo_lp",
                "propertyID": "725",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "promo_pre_bf_2023",
                "propertyID": "729",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_coleiras",
                "propertyID": "732",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "dia_do_cliente_2023",
                "propertyID": "741",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "gatos_solids",
                "propertyID": "744",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday 2023",
                "propertyID": "755",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Segunda Chance BF 2023",
                "propertyID": "758",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday | 40%",
                "propertyID": "762",
              },
              {
                "@type": "PropertyValue",
                "name": "RefId",
                "value": "5032500_0_0_U",
                "valueReference": "ReferenceID",
              },
            ],
            "isVariantOf": {
              "@type": "ProductGroup",
              "productGroupID": "5032500",
              "hasVariant": [
                {
                  "@type": "Product",
                  "category": "Gatos>Coleiras",
                  "productID": "4156233",
                  "url":
                    "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p?skuId=4156233",
                  "name": "Coleira para gatos Ultimate Blue",
                  "description": "Coleira para gatos Ultimate Blue",
                  "brand": {
                    "@type": "Brand",
                    "@id": "930833574",
                    "name": "ZEEDOG",
                  },
                  "inProductGroupWithID": "5032500",
                  "sku": "4156233",
                  "gtin": "7908471101055",
                  "releaseDate": 1635033600000,
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Tamanho",
                      "value": "U",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "gender",
                      "value": "unisex",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000096",
                      "value": "Gatos",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000120",
                      "value": "Coleiras",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Loja",
                      "propertyID": "136",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Clerk",
                      "propertyID": "139",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Apollo 13",
                      "propertyID": "142",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção de Bloqueio",
                      "propertyID": "144",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Últimos lançamentos Zee.Cat",
                      "propertyID": "175",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Feed Criteo",
                      "propertyID": "265",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Fast Shop",
                      "propertyID": "283",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleções Pets Reposições",
                      "propertyID": "355",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_homeZH_3.1",
                      "propertyID": "399",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_CRMbonus_acessorios",
                      "propertyID": "421",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_homeZD_2.3",
                      "propertyID": "422",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda",
                      "propertyID": "482",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda-sem-pre-sales",
                      "propertyID": "483",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "solids-l4-out-21",
                      "propertyID": "484",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "solids-ultimate-blue",
                      "propertyID": "485",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "lancamento-l4-2021",
                      "propertyID": "493",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "launch-ZeeCat-nov-21",
                      "propertyID": "501",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Live-Auto-Gatos-Acessorios",
                      "propertyID": "502",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao-lojinha-mafia-trigatos",
                      "propertyID": "576",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "troca-bf22",
                      "propertyID": "609",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "copa-do-mundo",
                      "propertyID": "618",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "escolhidos-ate-100",
                      "propertyID": "624",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "FlashPromo",
                      "propertyID": "638",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_estampas_monocromaticas",
                      "propertyID": "699",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_lp",
                      "propertyID": "702",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_landing",
                      "propertyID": "704",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_flash_promo_lp",
                      "propertyID": "725",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "promo_pre_bf_2023",
                      "propertyID": "729",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_coleiras",
                      "propertyID": "732",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "dia_do_cliente_2023",
                      "propertyID": "741",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "gatos_solids",
                      "propertyID": "744",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday 2023",
                      "propertyID": "755",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Segunda Chance BF 2023",
                      "propertyID": "758",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday | 40%",
                      "propertyID": "762",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "RefId",
                      "value": "5032500_0_0_U",
                      "valueReference": "ReferenceID",
                    },
                  ],
                  "image": [
                    {
                      "@type": "ImageObject",
                      "alternateName": "cinza",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/202613/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png?v=637656886349730000",
                      "name": "cinza",
                    },
                    {
                      "@type": "ImageObject",
                      "alternateName": "mainhover",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/202614/coleira-para-gatos-ultimate-blue-zeecat-pet-hover.png?v=637656886434000000",
                      "name": "mainhover",
                    },
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "BRL",
                    "highPrice": 59,
                    "lowPrice": 59,
                    "offerCount": 1,
                    "offers": [
                      {
                        "@type": "Offer",
                        "price": 59,
                        "seller": "1",
                        "priceValidUntil": "2024-12-01T18:19:57Z",
                        "inventoryLevel": {
                          "value": 10000,
                        },
                        "giftSkuIds": [],
                        "teasers": [],
                        "priceSpecification": [
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/ListPrice",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SRP",
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "American Express",
                            "description": "American Express 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Visa",
                            "description": "Visa 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Mastercard",
                            "description": "Mastercard 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Boleto Bancário",
                            "description": "Boleto Bancário à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Hipercard",
                            "description": "Hipercard 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Elo",
                            "description": "Elo à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Elo",
                            "description": "Elo 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Vale",
                            "description": "Vale à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Maestro",
                            "description": "Maestro à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Debito",
                            "description": "Venda Direta Debito à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description": "Venda Direta Credito à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description":
                              "Venda Direta Credito 2 vezes sem juros",
                            "billingDuration": 2,
                            "billingIncrement": 29.5,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Venda Direta Credito",
                            "description":
                              "Venda Direta Credito 3 vezes sem juros",
                            "billingDuration": 3,
                            "billingIncrement": 19.66,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "PicPay",
                            "description": "PicPay à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "priceComponentType":
                              "https://schema.org/Installment",
                            "name": "Pix",
                            "description": "Pix à vista",
                            "billingDuration": 1,
                            "billingIncrement": 59,
                            "price": 59,
                          },
                        ],
                        "availability": "https://schema.org/InStock",
                      },
                    ],
                  },
                },
              ],
              "url":
                "https://www.zeedog.com.br/coleira-para-gatos-ultimate-blue-9010003/p",
              "name": "Coleira para gatos Ultimate Blue",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Release_Date",
                  "value": "2021-10-28",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cor",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "nome_produto",
                  "value": "Ultimate Blue",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Imagens_Medidas",
                  "value":
                    "['sku':'u','urlImagem':'https://zeedog.vteximg.com.br/arquivos/Zee.Cat-Coleira-Size-Chart-BR.png'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Bundle_Recomendacao",
                  "value":
                    "['carrossel':'1','posicao':'1','produto':'5032515'];\r\n['carrossel':'2','posicao':'1','produto':'5033799'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Fotos_Produto",
                  "value":
                    "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-1.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlVideo':'https://d17lu9slax0fqq.cloudfront.net/videos/pdp/zeecat-buckle-guide.mp4','urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-2.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-3.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-4.jpg','altImagem':'Coleira para gatos Ultimate Blue  | Zee.Cat'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Age",
                  "value": "adulto",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Estampas_Relacionadas",
                  "value":
                    "['idProduto':'5032500','nomeProduto':'Coleira para gatos Ultimate Blue','nomeEstampa':'Ultimate Blue','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png'];\r\n['idProduto':'5032501','nomeProduto':'Coleira para gatos Pink Led','nomeEstampa':'Pink Led','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-pink-led-zeecat-pet-active.png'];\r\n['idProduto':'5032502','nomeProduto':'Coleira para gatos Sand','nomeEstampa':'Sand','imagemProduto':'http://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-sand-zeecat-pet-active.png'];\r\n['idProduto':'5000865','nomeProduto':'Coleira para gatos Gotham','nomeEstampa':'Gotham','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_gotham_preto_zeecat_gato_pet_fb.jpg'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "TableSizeChart",
                  "value":
                    '<ul class="sizes">\r\n   <li>Largura da tira</li>\r\n   <li><span>U</span>1 cm</li>\r\n</ul>\r\n<ul class="sizes">\r\n   <li>Regulagem do pescoço</li>\r\n   <li><span>U</span>20 a 30 cm</li>\r\n</ul>',
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Descricao_Produto",
                  "value":
                    "A coleira para gatos Ultimate Blue da Zee.Cat tem fecho breakway, que abre sozinho caso o gato se enrosque, além de ser totalmente regulável.",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Atributos_Especiais",
                  "value":
                    "<ul><li>Tamanho único com regulagem ajustável;</li>\r\n<li>Exclusivo fecho breakaway que abre sozinho caso o gato se enrosque;</li>\r\n<li>Super poliéster estampado com tecnologia heat-transfer teteron;</li>\r\n<li>Logo emborrachada da Zee.Cat, feita em material atóxico.</li></ul>",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "facebook_image",
                  "value":
                    "https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-ultimate-blue-zeecat-pet-main-1.jpg",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Tamanho",
                  "value": "U",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "sellerId",
                  "value": "1",
                  "valueReference": "PROPERTY",
                },
              ],
              "model": "9010003",
            },
            "image": [
              {
                "@type": "ImageObject",
                "alternateName": "cinza",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/202613/coleira-para-gatos-ultimate-blue-zeecat-pet-active.png?v=637656886349730000",
                "name": "cinza",
              },
              {
                "@type": "ImageObject",
                "alternateName": "mainhover",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/202614/coleira-para-gatos-ultimate-blue-zeecat-pet-hover.png?v=637656886434000000",
                "name": "mainhover",
              },
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "highPrice": 59,
              "lowPrice": 59,
              "offerCount": 1,
              "offers": [
                {
                  "@type": "Offer",
                  "price": 59,
                  "seller": "1",
                  "priceValidUntil": "2024-12-01T18:19:57Z",
                  "inventoryLevel": {
                    "value": 10000,
                  },
                  "giftSkuIds": [],
                  "teasers": [],
                  "priceSpecification": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/ListPrice",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SRP",
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "American Express",
                      "description": "American Express 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Visa",
                      "description": "Visa 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Mastercard",
                      "description": "Mastercard 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Boleto Bancário",
                      "description": "Boleto Bancário à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Hipercard",
                      "description": "Hipercard 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Elo",
                      "description": "Elo à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Elo",
                      "description": "Elo 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Vale",
                      "description": "Vale à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Maestro",
                      "description": "Maestro à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Debito",
                      "description": "Venda Direta Debito à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito 2 vezes sem juros",
                      "billingDuration": 2,
                      "billingIncrement": 29.5,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Venda Direta Credito",
                      "description": "Venda Direta Credito 3 vezes sem juros",
                      "billingDuration": 3,
                      "billingIncrement": 19.66,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "PicPay",
                      "description": "PicPay à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "priceComponentType": "https://schema.org/Installment",
                      "name": "Pix",
                      "description": "Pix à vista",
                      "billingDuration": 1,
                      "billingIncrement": 59,
                      "price": 59,
                    },
                  ],
                  "availability": "https://schema.org/InStock",
                },
              ],
            },
          },
          {
            "@type": "Product",
            "category": "Gatos>Coleiras",
            "productID": "4008257",
            "url":
              "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p?skuId=4008257",
            "name": "Coleira para gatos Neopro Azul\n U",
            "description": "Coleira para gatos Neopro Azul",
            "brand": {
              "@type": "Brand",
              "@id": "930833574",
              "name": "ZEEDOG",
            },
            "inProductGroupWithID": "5005699",
            "sku": "4008257",
            "gtin": "7898582481095",
            "releaseDate": 1593043200000,
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Tamanho",
                "value": "U",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "gender",
                "value": "unisex",
                "valueReference": "SPECIFICATION",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000096",
                "value": "Gatos",
              },
              {
                "@type": "PropertyValue",
                "name": "category",
                "propertyID": "2000120",
                "value": "Coleiras",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Loja",
                "propertyID": "136",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Clerk",
                "propertyID": "139",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Apollo 13",
                "propertyID": "142",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção de Bloqueio",
                "propertyID": "144",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Últimos lançamentos Zee.Cat",
                "propertyID": "175",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Neopro",
                "propertyID": "183",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Neopro Azul",
                "propertyID": "185",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Estampa NeoPro",
                "propertyID": "189",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Feed Criteo",
                "propertyID": "265",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Promo Até 40 Off",
                "propertyID": "266",
                "description": "highlight",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Fast Shop",
                "propertyID": "283",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção BF 2020 Completo",
                "propertyID": "337",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleção Facebook",
                "propertyID": "346",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Produtos Reposicao Jan-2021",
                "propertyID": "348",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Coleções Pets Reposições Acessórios",
                "propertyID": "356",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_CRMbonus_acessorios",
                "propertyID": "421",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "colecao_fp_acessorios",
                "propertyID": "458",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda",
                "propertyID": "482",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "teste-pre-venda-sem-pre-sales",
                "propertyID": "483",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Live-Auto-Gatos-Acessorios",
                "propertyID": "502",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zd_flashpromo_lp",
                "propertyID": "702",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "promo_pre_bf_2023",
                "propertyID": "729",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "zc_coleiras",
                "propertyID": "732",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Promo Especial",
                "propertyID": "737",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "gatos_neopro",
                "propertyID": "743",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday 2023",
                "propertyID": "755",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Segunda Chance BF 2023",
                "propertyID": "758",
              },
              {
                "@type": "PropertyValue",
                "name": "cluster",
                "value": "Black Friday | 50% até 70%",
                "propertyID": "764",
              },
              {
                "@type": "PropertyValue",
                "name": "RefId",
                "value": "5005699_0_0_U",
                "valueReference": "ReferenceID",
              },
            ],
            "isVariantOf": {
              "@type": "ProductGroup",
              "productGroupID": "5005699",
              "hasVariant": [
                {
                  "@type": "Product",
                  "category": "Gatos>Coleiras",
                  "productID": "4008257",
                  "url":
                    "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p?skuId=4008257",
                  "name": "Coleira para gatos Neopro Azul\n U",
                  "description": "Coleira para gatos Neopro Azul",
                  "brand": {
                    "@type": "Brand",
                    "@id": "930833574",
                    "name": "ZEEDOG",
                  },
                  "inProductGroupWithID": "5005699",
                  "sku": "4008257",
                  "gtin": "7898582481095",
                  "releaseDate": 1593043200000,
                  "additionalProperty": [
                    {
                      "@type": "PropertyValue",
                      "name": "Tamanho",
                      "value": "U",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "gender",
                      "value": "unisex",
                      "valueReference": "SPECIFICATION",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000096",
                      "value": "Gatos",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "category",
                      "propertyID": "2000120",
                      "value": "Coleiras",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Loja",
                      "propertyID": "136",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Clerk",
                      "propertyID": "139",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Apollo 13",
                      "propertyID": "142",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção de Bloqueio",
                      "propertyID": "144",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Últimos lançamentos Zee.Cat",
                      "propertyID": "175",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Neopro",
                      "propertyID": "183",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Neopro Azul",
                      "propertyID": "185",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Estampa NeoPro",
                      "propertyID": "189",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Feed Criteo",
                      "propertyID": "265",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Promo Até 40 Off",
                      "propertyID": "266",
                      "description": "highlight",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Fast Shop",
                      "propertyID": "283",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção BF 2020 Completo",
                      "propertyID": "337",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleção Facebook",
                      "propertyID": "346",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Produtos Reposicao Jan-2021",
                      "propertyID": "348",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Coleções Pets Reposições Acessórios",
                      "propertyID": "356",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_CRMbonus_acessorios",
                      "propertyID": "421",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "colecao_fp_acessorios",
                      "propertyID": "458",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda",
                      "propertyID": "482",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "teste-pre-venda-sem-pre-sales",
                      "propertyID": "483",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Live-Auto-Gatos-Acessorios",
                      "propertyID": "502",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zd_flashpromo_lp",
                      "propertyID": "702",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "promo_pre_bf_2023",
                      "propertyID": "729",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "zc_coleiras",
                      "propertyID": "732",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Promo Especial",
                      "propertyID": "737",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "gatos_neopro",
                      "propertyID": "743",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday 2023",
                      "propertyID": "755",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Segunda Chance BF 2023",
                      "propertyID": "758",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "cluster",
                      "value": "Black Friday | 50% até 70%",
                      "propertyID": "764",
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "RefId",
                      "value": "5005699_0_0_U",
                      "valueReference": "ReferenceID",
                    },
                  ],
                  "image": [
                    {
                      "@type": "ImageObject",
                      "alternateName": "cinza",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/197569/coleira-para-gatos-blue-zeecat-neopro-zeedog-active.png?v=637514338580900000",
                      "name": "cinza",
                    },
                    {
                      "@type": "ImageObject",
                      "alternateName": "mainhover",
                      "url":
                        "https://zeedog.vtexassets.com/arquivos/ids/201656/coleira-para-gatos-blue-zeecat-neopro-zeedog-hover.png?v=637636075653100000",
                      "name": "mainhover",
                    },
                  ],
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "BRL",
                    "highPrice": 69,
                    "lowPrice": 69,
                    "offerCount": 1,
                    "offers": [
                      {
                        "@type": "Offer",
                        "price": 69,
                        "seller": "1",
                        "priceValidUntil": "2024-12-01T18:19:57Z",
                        "inventoryLevel": {
                          "value": 0,
                        },
                        "giftSkuIds": [],
                        "teasers": [],
                        "priceSpecification": [
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/ListPrice",
                            "price": 69,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SalePrice",
                            "price": 69,
                          },
                          {
                            "@type": "UnitPriceSpecification",
                            "priceType": "https://schema.org/SRP",
                            "price": 69,
                          },
                        ],
                        "availability": "https://schema.org/OutOfStock",
                      },
                    ],
                  },
                },
              ],
              "url":
                "https://www.zeedog.com.br/coleira-para-gatos-neopro-azul--901278/p",
              "name": "Coleira para gatos Neopro Azul",
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Release_Date",
                  "value": "2019-12-31",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Cor",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "nome_produto",
                  "value": "Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Bundle_Recomendacao",
                  "value":
                    "['carrossel':'1','posicao':'1','produto':'5006028'];\r\n['carrossel':'1','posicao':'2','produto':'5011104'];\r\n['carrossel':'1','posicao':'3','produto':'413'];\r\n['carrossel':'2','posicao':'1','produto':'5006180'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "estampa",
                  "value": "Neopro Azul",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Fotos_Produto",
                  "value":
                    "['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-1-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlVideo':'https://s3-sa-east-1.amazonaws.com/zee.dog/videos/pdp/zeecat-buckle-guide.mp4','urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-2-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-3-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];\r\n['urlImagem':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-4-.jpg','altImagem':'Coleira para gatos Neopro Azul | Zee.Dog'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Age",
                  "value": "adulto",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "gender",
                  "value": "unisex",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Estampas_Relacionadas",
                  "value":
                    "['idProduto':'5005698','nomeProduto':'Coleira para gatos Neopro Preto','nomeEstampa':'Preto','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_preto_zeedog_gato_pet_fb.jpg'];\r\n['idProduto':'5005699','nomeProduto':'Coleira para gatos Neopro Azul','nomeEstampa':'Azul','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_blue_zeecat_gato_pet_fb.png'];\r\n['idProduto':'5005700','nomeProduto':'Coleira para gatos Neopro Coral','nomeEstampa':'Coral','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos_neopro_red_zeecat_gato_pet_fb.png'];\r\n['idProduto':'5005701','nomeProduto':'Coleira para gatos Neopro Verde Limão','nomeEstampa':'Verde Limão','imagemProduto':'https://zeedog.vteximg.com.br/arquivos/ids/172379_2/coleira-para-gatos_neopro_limegreen_zeecat_gato_pet_active.png'];",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "TableSizeChart",
                  "value":
                    '<ul class="sizes">\r\n   <li>Largura da tira</li>\r\n   <li><span>U</span>1 cm</li>\r\n</ul>\r\n<ul class="sizes">\r\n   <li>Regulagem do pescoço</li>\r\n   <li><span>U</span>20 a 30 cm</li>\r\n</ul>',
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Descricao_Produto",
                  "value":
                    "A coleira para gatos NeoPro é mais um super lançamento da Zee.Dog. A coleira possui uma nova tecnologia com ultra proteção externa de borracha de PVC chamada NeoPro, resistente à água e à ação do tempo, evitando que a coleira fique suja, molhada ou arranhada. Além de ser muito mais fácil de limpar, a coleira é feita com a mesma qualidade e material que a coleira para cachorro da Zee.Dog. Nossas coleiras de gato tem fecho breakway, que abre sozinho caso o gato se enrosque. Totalmente reguláveis, para gatos de atitude.",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "Atributos_Especiais",
                  "value":
                    "<ul>\r\n\r\n<li>Nova tecnologia NeoPro, com ultra proteção resistente à água e à ação do tempo</li>\r\n<li>Muito fácil de limpar</li>\r\n<li>Tamanho único com regularem ajustável.</li>\r\n<li>Exclusivo fecho breakaway que abre sozinho caso o gato se enrosque.</li>\r\n<li>Logo emborrachada da Zee.Dog, feita em material atóxico.</li>\r\n</ul>",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "facebook_image",
                  "value":
                    "https://zeedog.vteximg.com.br/arquivos/coleira-para-gatos-neopro-blue-azul-zeecat-zeedog-gato-pet-main-1.jpg",
                  "valueReference": "PROPERTY",
                },
                {
                  "@type": "PropertyValue",
                  "name": "sellerId",
                  "value": "1",
                  "valueReference": "PROPERTY",
                },
              ],
              "model": "901278",
            },
            "image": [
              {
                "@type": "ImageObject",
                "alternateName": "cinza",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/197569/coleira-para-gatos-blue-zeecat-neopro-zeedog-active.png?v=637514338580900000",
                "name": "cinza",
              },
              {
                "@type": "ImageObject",
                "alternateName": "mainhover",
                "url":
                  "https://zeedog.vtexassets.com/arquivos/ids/201656/coleira-para-gatos-blue-zeecat-neopro-zeedog-hover.png?v=637636075653100000",
                "name": "mainhover",
              },
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "BRL",
              "highPrice": 69,
              "lowPrice": 69,
              "offerCount": 1,
              "offers": [
                {
                  "@type": "Offer",
                  "price": 69,
                  "seller": "1",
                  "priceValidUntil": "2024-12-01T18:19:57Z",
                  "inventoryLevel": {
                    "value": 0,
                  },
                  "giftSkuIds": [],
                  "teasers": [],
                  "priceSpecification": [
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/ListPrice",
                      "price": 69,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SalePrice",
                      "price": 69,
                    },
                    {
                      "@type": "UnitPriceSpecification",
                      "priceType": "https://schema.org/SRP",
                      "price": 69,
                    },
                  ],
                  "availability": "https://schema.org/OutOfStock",
                },
              ],
            },
          },
        ],
      ],
      "role": "user",
    },
  ];

  useEffect(() => {
    const host = window.location.host;
    const websocket = window.location.protocol === "https:" ? "wss" : "ws";
    ws.value = new WebSocket(
      `${websocket}://${host}/live/invoke/ai-assistants/actions/chat.ts?assistant=Boteco`,
    );
    ws.value.onmessage = (event: MessageEvent) => {
      updateMessages(event.data);
    };
  }, []);

  const updateMessages = useCallback((data: string) => {
    const jsonData = JSON.parse(data);
    const newMessageObject: { content: any; role: "user" | "bot" } = {
      content: jsonData.content,
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

  return (
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
              {typeof message.content === "string"
                ? <div>{message.content}</div>
                : message.content.map((shelfArray: any) => (
                  <ProductShelf products={shelfArray} />
                ))}
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
              userInput.value = (e.target as HTMLTextAreaElement).value}
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
