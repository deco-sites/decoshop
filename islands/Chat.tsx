import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef } from "preact/hooks";

function Chat() {
  const messageEl = useRef<HTMLDivElement>(null);
  const userInput = useSignal("");
  const ws = useSignal<WebSocket | null>(null);
  const messageList = useSignal<{ content: any; role: "user" | "bot" }[]>(
    [],
  );
  const mock = false;

  if (mock) {
    messageList.value = [
        {
            "content": "camisa azul",
            "role": "bot"
        },
        {
            "content": {
                "messageId": "run_GuQ6Ysx73RMWhmL9dmLsSDYX",
                "type": "start_function_call",
                "content": {
                    "name": "deco-sites/decoshop/loaders/productList.ts",
                    "props": {
                        "query": "camisa azul",
                        "storeName": "lojastorra"
                    }
                }
            },
            "role": "user"
        },
        {
            "content": {
                "messageId": "run_GuQ6Ysx73RMWhmL9dmLsSDYX",
                "type": "message",
                "content": "I found a blue shirt for men with long sleeves. It is made of polyester fabric and has a fold-down collar, button closure, and a front pocket with standard sewing and finishing. The brand is Analogy, and it is available in sizes from P to GG. The price is BRL 89.99. You can find more details and purchase it here: [Blue Shirt with Long Sleeves](https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261576)"
            },
            "role": "user"
        },
        {
            "content": {
                "messageId": "run_GuQ6Ysx73RMWhmL9dmLsSDYX",
                "type": "function_calls",
                "content": [
                    {
                        "name": "deco-sites/decoshop/loaders/productList.ts",
                        "props": {
                            "query": "camisa azul",
                            "storeName": "lojastorra"
                        },
                        "response": [
                            {
                                "@type": "Product",
                                "category": "Masculino>Camisas",
                                "productID": "261576",
                                "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261576",
                                "name": "3",
                                "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                "brand": {
                                    "@type": "Brand",
                                    "@id": "2000159",
                                    "name": "Analogy"
                                },
                                "inProductGroupWithID": "69281",
                                "sku": "261576",
                                "gtin": "282240000690223",
                                "releaseDate": 1701399600000,
                                "additionalProperty": [
                                    {
                                        "@type": "PropertyValue",
                                        "name": "Tamanho",
                                        "value": "3",
                                        "valueReference": "SPECIFICATION"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "4",
                                        "value": "Masculino"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "24",
                                        "value": "Camisas"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Novidades",
                                        "propertyID": "138"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "todos os produtos",
                                        "propertyID": "164"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-Todos",
                                        "propertyID": "171"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "produtos-google-shopping",
                                        "propertyID": "174",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-All",
                                        "propertyID": "416"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Colecao-Criteo",
                                        "propertyID": "590",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Sizebay",
                                        "propertyID": "2281"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Rakuten",
                                        "propertyID": "2321"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "RefId",
                                        "value": "282240000690223",
                                        "valueReference": "ReferenceID"
                                    }
                                ],
                                "isVariantOf": {
                                    "@type": "ProductGroup",
                                    "productGroupID": "69281",
                                    "hasVariant": [
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Camisas",
                                            "productID": "261576",
                                            "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261576",
                                            "name": "3",
                                            "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69281",
                                            "sku": "261576",
                                            "gtin": "282240000690223",
                                            "releaseDate": 1701399600000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "3",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "24",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "282240000690223",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                                    "name": "28224000069022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 89.99,
                                                "lowPrice": 89.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 89.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:17:28Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 29.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 22.49,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 17.99,
                                                                "price": 89.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Camisas",
                                            "productID": "261577",
                                            "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261577",
                                            "name": "2",
                                            "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69281",
                                            "sku": "261577",
                                            "gtin": "282240000690222",
                                            "releaseDate": 1701399600000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "2",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "24",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "282240000690222",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                                    "name": "28224000069022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 89.99,
                                                "lowPrice": 89.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 89.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:17:28Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 29.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 22.49,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 17.99,
                                                                "price": 89.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Camisas",
                                            "productID": "261578",
                                            "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261578",
                                            "name": "4",
                                            "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69281",
                                            "sku": "261578",
                                            "gtin": "282240000690224",
                                            "releaseDate": 1701399600000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "4",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "24",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "282240000690224",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                                    "name": "28224000069022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 89.99,
                                                "lowPrice": 89.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 89.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:16:14Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 29.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 22.49,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 17.99,
                                                                "price": 89.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Camisas",
                                            "productID": "261579",
                                            "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261579",
                                            "name": "5",
                                            "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69281",
                                            "sku": "261579",
                                            "gtin": "282240000690225",
                                            "releaseDate": 1701399600000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "5",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "24",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "282240000690225",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                                    "name": "28224000069022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 89.99,
                                                "lowPrice": 89.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 89.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:17:28Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 29.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 22.49,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 17.99,
                                                                "price": 89.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Camisas",
                                            "productID": "261580",
                                            "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p?skuId=261580",
                                            "name": "6",
                                            "description": "<p><strong>Especificações</strong></p><p><strong>Produto</strong>: camisa&nbsp;</p><p><strong>Modelagem</strong>: manga longa</p><p><strong>Detalhe</strong>: não possui</p><p><strong>Gola</strong>: dobrável</p><p><strong>Costura</strong>: padrão</p><p><strong>Manga</strong>: longa</p><p><strong>Categoria</strong>: masculino</p><p><strong>Tamanho</strong>: p ao gg</p><p><strong>Tecido</strong>: malha</p><p><strong>Composição</strong>: 80% poliéster, 20% algodão</p><p><strong>Produzido no Sri Lanka</strong></p><p><strong>Cor: </strong>azul</p><p><strong>Marca</strong>: Analogy</p><p><br><strong>​<br>​Mais detalhes</strong><br>Camisa masculina confeccionada em poliéster. Possui gola dobrável, fechamento por botões, bolso frontal com costura e acabamento padrão.</p><p>​​<br><strong>Modelo veste tamanho M<br>Medidas do modelo</strong></p><p>Altura: 1,80m</p><p>Tórax: 101cm</p><p>Cintura: 85cm</p><p>Quadril: 96cm</p><p>Manequim: 42</p><p><br><strong>​Instruções de lavagem</strong></p><p>Lavar com temperatura máxima de 30°C</p><p>​Não usar alvejante a base de cloro</p><p>Secar com temperatura baixa (40°C)</p><p>Passar com temperatura máxima de 110°C<br></p><p>Lavagem profissional</p><p><br>​O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.<br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69281",
                                            "sku": "261580",
                                            "gtin": "282240000690226",
                                            "releaseDate": 1701399600000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "6",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "24",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "282240000690226",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                                    "name": "28224000069022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28224000069022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                                    "name": "28224000069022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 89.99,
                                                "lowPrice": 89.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 89.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:16:14Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 89.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 44.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 29.99,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 22.49,
                                                                "price": 89.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 17.99,
                                                                "price": 89.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "url": "https://www.lojastorra.com.br/camisa-masculina-manga-longa-com-bolso-azul-28224000069022/p",
                                    "name": "Camisa Masculina Manga Longa Com Bolso Azul",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Manga",
                                            "value": "Manga Longa",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Cor",
                                            "value": "Marinho",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Modelo",
                                            "value": "Social",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estilo",
                                            "value": "Social e Office",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estampa",
                                            "value": "Lisa",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tecido",
                                            "value": "Poliéster",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "3",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "2",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "4",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "5",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "6",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "sellerId",
                                            "value": "1",
                                            "valueReference": "PROPERTY"
                                        }
                                    ],
                                    "model": "28224000069022"
                                },
                                "image": [
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28224000069022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1285347/28224000069022.jpg?v=638370350631600000",
                                        "name": "28224000069022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28224000069022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1285348/28224000069022.jpg?v=638370350646030000",
                                        "name": "28224000069022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28224000069022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1285349/28224000069022.jpg?v=638370350659900000",
                                        "name": "28224000069022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28224000069022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1285350/28224000069022.jpg?v=638370350665930000",
                                        "name": "28224000069022"
                                    }
                                ],
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "BRL",
                                    "highPrice": 89.99,
                                    "lowPrice": 89.99,
                                    "offerCount": 1,
                                    "offers": [
                                        {
                                            "@type": "Offer",
                                            "price": 89.99,
                                            "seller": "1",
                                            "priceValidUntil": "2024-12-01T20:17:28Z",
                                            "inventoryLevel": {
                                                "value": 10000
                                            },
                                            "giftSkuIds": [],
                                            "teasers": [],
                                            "priceSpecification": [
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/ListPrice",
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Vale",
                                                    "description": "Vale à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "PicPay",
                                                    "description": "PicPay à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "AmeDigital",
                                                    "description": "AmeDigital à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Pix",
                                                    "description": "Pix à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 89.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 44.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 29.99,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 4 vezes sem juros",
                                                    "billingDuration": 4,
                                                    "billingIncrement": 22.49,
                                                    "price": 89.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 5 vezes sem juros",
                                                    "billingDuration": 5,
                                                    "billingIncrement": 17.99,
                                                    "price": 89.99
                                                }
                                            ],
                                            "availability": "https://schema.org/InStock"
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "Product",
                                "category": "Masculino>Polos",
                                "productID": "261139",
                                "url": "https://www.lojastorra.com.br/camisa-polo-masculina-piquet-com-bolso-manga-curta-azul-28212000707020/p?skuId=261139",
                                "name": "M",
                                "description": "<h2>Características</h2><p><strong>Segmento: </strong>camisa polo</p><p><strong>Gola:</strong> sim</p><p><strong>Tipo de manga: </strong>curta</p><p><strong>Costura: </strong>padrão</p><p><strong>Acabamento: </strong>padrão</p><p><strong>Textura do tecido: </strong>piquet</p><p><strong>Descrição da estampa: </strong>não possui</p><p><strong>Bordado: </strong>não possui</p><p><strong>Detalhes: </strong>polo masculina com bolso único&nbsp;na frente, com botões e fenda na lateral</p><h2>Especificações técnicas</h2><p><strong>Produto: </strong>polo</p><p><strong>Categoria: </strong>masculina</p><p><strong>Tamanho: </strong>P ao GG</p><p><strong>Tecido: </strong>piquet</p><p><strong>Composição: </strong>100%&nbsp;poliéster</p><p><strong>Produzido: </strong>Brasil</p><p><strong>Cor: </strong>azul</p><p><br></p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,86m</p><p>Tórax: 99cm</p><p>Cintura: 80cm</p><p>Quadril: 101cm</p><p>Manequim: 40/42<br></p><p><br></p><p><strong>Instruções de lavagem:</strong></p><p><span>Lavar com temperatura máxima de 30°C</span></p><p><span>Não usar alvejante a base de cloro</span></p><p><span>Proibido usar secadora</span></p><p><span>Secar pendurada</span></p><p><span>Passar com temperatura máxima de 150°C</span></p><p><span>Não lavar a seco</span></p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong> A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de <a href=\"https://www.lojastorra.com.br/masculino/camisetas\">camiseta masculina</a>.</p>",
                                "brand": {
                                    "@type": "Brand",
                                    "@id": "2000159",
                                    "name": "Analogy"
                                },
                                "inProductGroupWithID": "69168",
                                "sku": "261139",
                                "gtin": "28212000707020M",
                                "releaseDate": 1701226800000,
                                "additionalProperty": [
                                    {
                                        "@type": "PropertyValue",
                                        "name": "Tamanho",
                                        "value": "M",
                                        "valueReference": "SPECIFICATION"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "4",
                                        "value": "Masculino"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "29",
                                        "value": "Polos"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Novidades",
                                        "propertyID": "138"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "todos os produtos",
                                        "propertyID": "164"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-Todos",
                                        "propertyID": "171"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "produtos-google-shopping",
                                        "propertyID": "174",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-All",
                                        "propertyID": "416"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Colecao-Criteo",
                                        "propertyID": "590",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Sizebay",
                                        "propertyID": "2281"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Rakuten",
                                        "propertyID": "2321"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "RefId",
                                        "value": "28212000707020M",
                                        "valueReference": "ReferenceID"
                                    }
                                ],
                                "isVariantOf": {
                                    "@type": "ProductGroup",
                                    "productGroupID": "69168",
                                    "hasVariant": [
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Polos",
                                            "productID": "261139",
                                            "url": "https://www.lojastorra.com.br/camisa-polo-masculina-piquet-com-bolso-manga-curta-azul-28212000707020/p?skuId=261139",
                                            "name": "M",
                                            "description": "<h2>Características</h2><p><strong>Segmento: </strong>camisa polo</p><p><strong>Gola:</strong> sim</p><p><strong>Tipo de manga: </strong>curta</p><p><strong>Costura: </strong>padrão</p><p><strong>Acabamento: </strong>padrão</p><p><strong>Textura do tecido: </strong>piquet</p><p><strong>Descrição da estampa: </strong>não possui</p><p><strong>Bordado: </strong>não possui</p><p><strong>Detalhes: </strong>polo masculina com bolso único&nbsp;na frente, com botões e fenda na lateral</p><h2>Especificações técnicas</h2><p><strong>Produto: </strong>polo</p><p><strong>Categoria: </strong>masculina</p><p><strong>Tamanho: </strong>P ao GG</p><p><strong>Tecido: </strong>piquet</p><p><strong>Composição: </strong>100%&nbsp;poliéster</p><p><strong>Produzido: </strong>Brasil</p><p><strong>Cor: </strong>azul</p><p><br></p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,86m</p><p>Tórax: 99cm</p><p>Cintura: 80cm</p><p>Quadril: 101cm</p><p>Manequim: 40/42<br></p><p><br></p><p><strong>Instruções de lavagem:</strong></p><p><span>Lavar com temperatura máxima de 30°C</span></p><p><span>Não usar alvejante a base de cloro</span></p><p><span>Proibido usar secadora</span></p><p><span>Secar pendurada</span></p><p><span>Passar com temperatura máxima de 150°C</span></p><p><span>Não lavar a seco</span></p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong> A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de <a href=\"https://www.lojastorra.com.br/masculino/camisetas\">camiseta masculina</a>.</p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000159",
                                                "name": "Analogy"
                                            },
                                            "inProductGroupWithID": "69168",
                                            "sku": "261139",
                                            "gtin": "28212000707020M",
                                            "releaseDate": 1701226800000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "M",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "29",
                                                    "value": "Polos"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "28212000707020M",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000707020",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284657/28212000707020.jpg?v=638368776851500000",
                                                    "name": "28212000707020"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000707020",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284658/28212000707020.jpg?v=638368776865130000",
                                                    "name": "28212000707020"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000707020",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284659/28212000707020.jpg?v=638368776878470000",
                                                    "name": "28212000707020"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000707020",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284660/28212000707020.jpg?v=638368776895600000",
                                                    "name": "28212000707020"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 39.99,
                                                "lowPrice": 39.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 39.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:17:28Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 39.99,
                                                                "price": 39.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 19.99,
                                                                "price": 39.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "url": "https://www.lojastorra.com.br/camisa-polo-masculina-piquet-com-bolso-manga-curta-azul-28212000707020/p",
                                    "name": "Camisa Polo Masculina Piquet Com Bolso Manga Curta Azul",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Manga",
                                            "value": "Manga Curta",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Cor",
                                            "value": "Azul",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tecido",
                                            "value": "Piquet",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estilo",
                                            "value": "Casual",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "M",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "sellerId",
                                            "value": "1",
                                            "valueReference": "PROPERTY"
                                        }
                                    ],
                                    "model": "28212000707020"
                                },
                                "image": [
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000707020",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284657/28212000707020.jpg?v=638368776851500000",
                                        "name": "28212000707020"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000707020",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284658/28212000707020.jpg?v=638368776865130000",
                                        "name": "28212000707020"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000707020",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284659/28212000707020.jpg?v=638368776878470000",
                                        "name": "28212000707020"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000707020",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284660/28212000707020.jpg?v=638368776895600000",
                                        "name": "28212000707020"
                                    }
                                ],
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "BRL",
                                    "highPrice": 39.99,
                                    "lowPrice": 39.99,
                                    "offerCount": 1,
                                    "offers": [
                                        {
                                            "@type": "Offer",
                                            "price": 39.99,
                                            "seller": "1",
                                            "priceValidUntil": "2024-12-01T20:17:28Z",
                                            "inventoryLevel": {
                                                "value": 10000
                                            },
                                            "giftSkuIds": [],
                                            "teasers": [],
                                            "priceSpecification": [
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/ListPrice",
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Vale",
                                                    "description": "Vale à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "PicPay",
                                                    "description": "PicPay à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "AmeDigital",
                                                    "description": "AmeDigital à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Pix",
                                                    "description": "Pix à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 39.99,
                                                    "price": 39.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 19.99,
                                                    "price": 39.99
                                                }
                                            ],
                                            "availability": "https://schema.org/InStock"
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "Product",
                                "category": "Masculino>Polos",
                                "productID": "260839",
                                "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p?skuId=260839",
                                "name": "M",
                                "description": "<h2>Características</h2><p><strong>Segmento:</strong>&nbsp;camisa polo</p><p><strong>Gola:&nbsp;</strong>sim</p><p><strong>Tipo de manga:&nbsp;</strong>curta&nbsp;</p><p><strong>Costura:&nbsp;</strong>padrão&nbsp;</p><p><strong>Acabamento:&nbsp;</strong>padrão&nbsp;</p><p><strong>Textura do tecido:</strong>&nbsp;piquet</p><p><strong>Descrição da estampa:</strong>&nbsp;não possui&nbsp;</p><p><strong>Bordado:</strong>&nbsp;não possui&nbsp;</p><p><strong>Detalhes:&nbsp;</strong>camisa polo com botão e bolso frontal e acabamento em ribana&nbsp;</p><h2>Especificações técnicas</h2><p><strong>Produto:&nbsp;</strong>camisa polo&nbsp;</p><p><strong>Categoria:</strong>&nbsp;masculina&nbsp;</p><p><strong>Tamanho:</strong>&nbsp;P ao GG</p><p><strong>Tecido:</strong>&nbsp;malha</p><p><strong>Composição:</strong>&nbsp;50% poliéster 50% algodão&nbsp;</p><p><strong>Produzido:</strong>&nbsp;Brasil&nbsp;</p><p><strong>Cor:&nbsp;</strong>azul</p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,84m<br>Tórax: 102cm<br>Cintura: 80cm<br>Quadril: 99cm<br>Manequim: 40/42<br></p><p><strong>Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Proibido usar secadora<br>Passar com temperatura máxima de 110°C<br>Não lavar a seco<br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong><span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span>A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de<span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span><a href=\"https://www.lojastorra.com.br/masculino/camisetas\" style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 76, 255); text-decoration: none;\">camiseta masculina</a>.</p><p><br><!-- EndFragment --><br><br></p>",
                                "brand": {
                                    "@type": "Brand",
                                    "@id": "2000000",
                                    "name": "TORRA"
                                },
                                "inProductGroupWithID": "69118",
                                "sku": "260839",
                                "gtin": "28212000736022M",
                                "releaseDate": 1701216000000,
                                "additionalProperty": [
                                    {
                                        "@type": "PropertyValue",
                                        "name": "Tamanho",
                                        "value": "M",
                                        "valueReference": "SPECIFICATION"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "4",
                                        "value": "Masculino"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "29",
                                        "value": "Polos"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Novidades",
                                        "propertyID": "138"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "todos os produtos",
                                        "propertyID": "164"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-Todos",
                                        "propertyID": "171"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "produtos-google-shopping",
                                        "propertyID": "174",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-All",
                                        "propertyID": "416"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Colecao-Criteo",
                                        "propertyID": "590",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Sizebay",
                                        "propertyID": "2281"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Rakuten",
                                        "propertyID": "2321"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "RefId",
                                        "value": "28212000736022M",
                                        "valueReference": "ReferenceID"
                                    }
                                ],
                                "isVariantOf": {
                                    "@type": "ProductGroup",
                                    "productGroupID": "69118",
                                    "hasVariant": [
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Polos",
                                            "productID": "260839",
                                            "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p?skuId=260839",
                                            "name": "M",
                                            "description": "<h2>Características</h2><p><strong>Segmento:</strong>&nbsp;camisa polo</p><p><strong>Gola:&nbsp;</strong>sim</p><p><strong>Tipo de manga:&nbsp;</strong>curta&nbsp;</p><p><strong>Costura:&nbsp;</strong>padrão&nbsp;</p><p><strong>Acabamento:&nbsp;</strong>padrão&nbsp;</p><p><strong>Textura do tecido:</strong>&nbsp;piquet</p><p><strong>Descrição da estampa:</strong>&nbsp;não possui&nbsp;</p><p><strong>Bordado:</strong>&nbsp;não possui&nbsp;</p><p><strong>Detalhes:&nbsp;</strong>camisa polo com botão e bolso frontal e acabamento em ribana&nbsp;</p><h2>Especificações técnicas</h2><p><strong>Produto:&nbsp;</strong>camisa polo&nbsp;</p><p><strong>Categoria:</strong>&nbsp;masculina&nbsp;</p><p><strong>Tamanho:</strong>&nbsp;P ao GG</p><p><strong>Tecido:</strong>&nbsp;malha</p><p><strong>Composição:</strong>&nbsp;50% poliéster 50% algodão&nbsp;</p><p><strong>Produzido:</strong>&nbsp;Brasil&nbsp;</p><p><strong>Cor:&nbsp;</strong>azul</p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,84m<br>Tórax: 102cm<br>Cintura: 80cm<br>Quadril: 99cm<br>Manequim: 40/42<br></p><p><strong>Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Proibido usar secadora<br>Passar com temperatura máxima de 110°C<br>Não lavar a seco<br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong><span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span>A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de<span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span><a href=\"https://www.lojastorra.com.br/masculino/camisetas\" style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 76, 255); text-decoration: none;\">camiseta masculina</a>.</p><p><br><!-- EndFragment --><br><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "69118",
                                            "sku": "260839",
                                            "gtin": "28212000736022M",
                                            "releaseDate": 1701216000000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "M",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "29",
                                                    "value": "Polos"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "28212000736022M",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284276/28212000736022.jpg?v=638368585391330000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284277/28212000736022.jpg?v=638368585404070000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284278/28212000736022.jpg?v=638368585418370000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284279/28212000736022.jpg?v=638368585433930000",
                                                    "name": "28212000736022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 59.99,
                                                "lowPrice": 59.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 59.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:21:12Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 29.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 19.99,
                                                                "price": 59.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Polos",
                                            "productID": "260840",
                                            "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p?skuId=260840",
                                            "name": "P",
                                            "description": "<h2>Características</h2><p><strong>Segmento:</strong>&nbsp;camisa polo</p><p><strong>Gola:&nbsp;</strong>sim</p><p><strong>Tipo de manga:&nbsp;</strong>curta&nbsp;</p><p><strong>Costura:&nbsp;</strong>padrão&nbsp;</p><p><strong>Acabamento:&nbsp;</strong>padrão&nbsp;</p><p><strong>Textura do tecido:</strong>&nbsp;piquet</p><p><strong>Descrição da estampa:</strong>&nbsp;não possui&nbsp;</p><p><strong>Bordado:</strong>&nbsp;não possui&nbsp;</p><p><strong>Detalhes:&nbsp;</strong>camisa polo com botão e bolso frontal e acabamento em ribana&nbsp;</p><h2>Especificações técnicas</h2><p><strong>Produto:&nbsp;</strong>camisa polo&nbsp;</p><p><strong>Categoria:</strong>&nbsp;masculina&nbsp;</p><p><strong>Tamanho:</strong>&nbsp;P ao GG</p><p><strong>Tecido:</strong>&nbsp;malha</p><p><strong>Composição:</strong>&nbsp;50% poliéster 50% algodão&nbsp;</p><p><strong>Produzido:</strong>&nbsp;Brasil&nbsp;</p><p><strong>Cor:&nbsp;</strong>azul</p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,84m<br>Tórax: 102cm<br>Cintura: 80cm<br>Quadril: 99cm<br>Manequim: 40/42<br></p><p><strong>Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Proibido usar secadora<br>Passar com temperatura máxima de 110°C<br>Não lavar a seco<br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong><span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span>A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de<span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span><a href=\"https://www.lojastorra.com.br/masculino/camisetas\" style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 76, 255); text-decoration: none;\">camiseta masculina</a>.</p><p><br><!-- EndFragment --><br><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "69118",
                                            "sku": "260840",
                                            "gtin": "28212000736022P",
                                            "releaseDate": 1701216000000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "P",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "29",
                                                    "value": "Polos"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "28212000736022P",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284276/28212000736022.jpg?v=638368585391330000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284277/28212000736022.jpg?v=638368585404070000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284278/28212000736022.jpg?v=638368585418370000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284279/28212000736022.jpg?v=638368585433930000",
                                                    "name": "28212000736022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 59.99,
                                                "lowPrice": 59.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 59.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:21:12Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 29.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 19.99,
                                                                "price": 59.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Polos",
                                            "productID": "260841",
                                            "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p?skuId=260841",
                                            "name": "G",
                                            "description": "<h2>Características</h2><p><strong>Segmento:</strong>&nbsp;camisa polo</p><p><strong>Gola:&nbsp;</strong>sim</p><p><strong>Tipo de manga:&nbsp;</strong>curta&nbsp;</p><p><strong>Costura:&nbsp;</strong>padrão&nbsp;</p><p><strong>Acabamento:&nbsp;</strong>padrão&nbsp;</p><p><strong>Textura do tecido:</strong>&nbsp;piquet</p><p><strong>Descrição da estampa:</strong>&nbsp;não possui&nbsp;</p><p><strong>Bordado:</strong>&nbsp;não possui&nbsp;</p><p><strong>Detalhes:&nbsp;</strong>camisa polo com botão e bolso frontal e acabamento em ribana&nbsp;</p><h2>Especificações técnicas</h2><p><strong>Produto:&nbsp;</strong>camisa polo&nbsp;</p><p><strong>Categoria:</strong>&nbsp;masculina&nbsp;</p><p><strong>Tamanho:</strong>&nbsp;P ao GG</p><p><strong>Tecido:</strong>&nbsp;malha</p><p><strong>Composição:</strong>&nbsp;50% poliéster 50% algodão&nbsp;</p><p><strong>Produzido:</strong>&nbsp;Brasil&nbsp;</p><p><strong>Cor:&nbsp;</strong>azul</p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,84m<br>Tórax: 102cm<br>Cintura: 80cm<br>Quadril: 99cm<br>Manequim: 40/42<br></p><p><strong>Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Proibido usar secadora<br>Passar com temperatura máxima de 110°C<br>Não lavar a seco<br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong><span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span>A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de<span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span><a href=\"https://www.lojastorra.com.br/masculino/camisetas\" style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 76, 255); text-decoration: none;\">camiseta masculina</a>.</p><p><br><!-- EndFragment --><br><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "69118",
                                            "sku": "260841",
                                            "gtin": "28212000736022G",
                                            "releaseDate": 1701216000000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "G",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "29",
                                                    "value": "Polos"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "28212000736022G",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284276/28212000736022.jpg?v=638368585391330000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284277/28212000736022.jpg?v=638368585404070000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284278/28212000736022.jpg?v=638368585418370000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284279/28212000736022.jpg?v=638368585433930000",
                                                    "name": "28212000736022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 59.99,
                                                "lowPrice": 59.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 59.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:21:12Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 29.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 19.99,
                                                                "price": 59.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Masculino>Polos",
                                            "productID": "260842",
                                            "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p?skuId=260842",
                                            "name": "GG",
                                            "description": "<h2>Características</h2><p><strong>Segmento:</strong>&nbsp;camisa polo</p><p><strong>Gola:&nbsp;</strong>sim</p><p><strong>Tipo de manga:&nbsp;</strong>curta&nbsp;</p><p><strong>Costura:&nbsp;</strong>padrão&nbsp;</p><p><strong>Acabamento:&nbsp;</strong>padrão&nbsp;</p><p><strong>Textura do tecido:</strong>&nbsp;piquet</p><p><strong>Descrição da estampa:</strong>&nbsp;não possui&nbsp;</p><p><strong>Bordado:</strong>&nbsp;não possui&nbsp;</p><p><strong>Detalhes:&nbsp;</strong>camisa polo com botão e bolso frontal e acabamento em ribana&nbsp;</p><h2>Especificações técnicas</h2><p><strong>Produto:&nbsp;</strong>camisa polo&nbsp;</p><p><strong>Categoria:</strong>&nbsp;masculina&nbsp;</p><p><strong>Tamanho:</strong>&nbsp;P ao GG</p><p><strong>Tecido:</strong>&nbsp;malha</p><p><strong>Composição:</strong>&nbsp;50% poliéster 50% algodão&nbsp;</p><p><strong>Produzido:</strong>&nbsp;Brasil&nbsp;</p><p><strong>Cor:&nbsp;</strong>azul</p><p><strong>Modelo veste peça tamanho M</strong></p><p><strong>Medidas da Modelo</strong></p><p>Altura: 1,84m<br>Tórax: 102cm<br>Cintura: 80cm<br>Quadril: 99cm<br>Manequim: 40/42<br></p><p><strong>Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Proibido usar secadora<br>Passar com temperatura máxima de 110°C<br>Não lavar a seco<br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><h2>Por que camiseta polo?</h2><p>A camiseta polo é uma peça tradicional do guarda-roupa do dia a dia. Também conhecida como camisa polo, ela tem algumas características que são fáceis de identificar.<strong><span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span>A camisa polo tem o formato de uma camiseta tradicional, mas o seu diferencial é a gola que simula uma gola de camisa, em malha canelada</strong>. A camiseta polo tem esse nome porque foi inspirada nos uniformes dos jogadores de polo, esporte praticado com cavalos. Escolha as suas camisas polos favoritas e aproveite também para conhecer a nossa coleção de<span style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: inherit; display: inline; vertical-align: baseline; margin: 0px; padding: 0px;\">&nbsp;</span><a href=\"https://www.lojastorra.com.br/masculino/camisetas\" style=\"box-sizing: border-box; -webkit-user-drag: none; overflow: visible; font-family: inherit; font-size: inherit; color: rgb(0, 76, 255); text-decoration: none;\">camiseta masculina</a>.</p><p><br><!-- EndFragment --><br><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "69118",
                                            "sku": "260842",
                                            "gtin": "28212000736022GG",
                                            "releaseDate": 1701216000000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "GG",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "4",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "29",
                                                    "value": "Polos"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "28212000736022GG",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284276/28212000736022.jpg?v=638368585391330000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284277/28212000736022.jpg?v=638368585404070000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284278/28212000736022.jpg?v=638368585418370000",
                                                    "name": "28212000736022"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "28212000736022",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1284279/28212000736022.jpg?v=638368585433930000",
                                                    "name": "28212000736022"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 59.99,
                                                "lowPrice": 59.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 59.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:21:12Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 59.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 29.99,
                                                                "price": 59.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 19.99,
                                                                "price": 59.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "url": "https://www.lojastorra.com.br/camisa-polo-masculina-com-bolso-piquet-azul-28212000736022/p",
                                    "name": "Camisa Polo Masculina Com Bolso Piquet Azul",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Manga",
                                            "value": "Manga Curta",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Cor",
                                            "value": "Azul",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tecido",
                                            "value": "Piquet",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estilo",
                                            "value": "Casual",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "M",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "P",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "G",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "GG",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "sellerId",
                                            "value": "1",
                                            "valueReference": "PROPERTY"
                                        }
                                    ],
                                    "model": "28212000736022"
                                },
                                "image": [
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000736022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284276/28212000736022.jpg?v=638368585391330000",
                                        "name": "28212000736022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000736022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284277/28212000736022.jpg?v=638368585404070000",
                                        "name": "28212000736022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000736022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284278/28212000736022.jpg?v=638368585418370000",
                                        "name": "28212000736022"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "28212000736022",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1284279/28212000736022.jpg?v=638368585433930000",
                                        "name": "28212000736022"
                                    }
                                ],
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "BRL",
                                    "highPrice": 59.99,
                                    "lowPrice": 59.99,
                                    "offerCount": 1,
                                    "offers": [
                                        {
                                            "@type": "Offer",
                                            "price": 59.99,
                                            "seller": "1",
                                            "priceValidUntil": "2024-12-01T20:21:12Z",
                                            "inventoryLevel": {
                                                "value": 10000
                                            },
                                            "giftSkuIds": [],
                                            "teasers": [],
                                            "priceSpecification": [
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/ListPrice",
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Vale",
                                                    "description": "Vale à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "PicPay",
                                                    "description": "PicPay à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "AmeDigital",
                                                    "description": "AmeDigital à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Pix",
                                                    "description": "Pix à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 59.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 29.99,
                                                    "price": 59.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 19.99,
                                                    "price": 59.99
                                                }
                                            ],
                                            "availability": "https://schema.org/InStock"
                                        }
                                    ]
                                }
                            },
                            {
                                "@type": "Product",
                                "category": "Plus Size>Masculino>Camisas",
                                "productID": "260035",
                                "url": "https://www.lojastorra.com.br/camisa-plus-size-masculina-estampa-folhagens-manga-curta-azul-21526000123023/p?skuId=260035",
                                "name": "6",
                                "description": "<p><span style=\"font-size: 1.5em; font-weight: 700;\">Características</span><br></p><p><br></p><p><strong>Segmento: </strong>camisa</p><p><br></p><p><strong>Gola:</strong> sim</p><p><br></p><p><strong>Tipo de manga: </strong>curta</p><p><br></p><p><strong>Costura: </strong>padrão</p><p><br></p><p><strong>Acabamento: </strong>padrão</p><p><br></p><p><strong>Textura do tecido: </strong>liso</p><p><br></p><p><strong>Descrição da estampa: </strong>folhagens&nbsp;</p><p><br></p><p><strong>Bordado: </strong>não possui</p><p><br></p><p><strong>Detalhes: </strong>botões&nbsp;</p><p><br></p><h2>Especificações técnicas</h2><p><br></p><p><strong>Produto: </strong>camisa</p><p><br></p><p><strong>Categoria: </strong>masculino</p><p><br></p><p><strong>Tamanho: </strong>P ao GG</p><p><br></p><p><strong>Tecido: </strong>malha</p><p><br></p><p><strong>Composição: </strong>55% algodão e 45% viscose</p><p><br></p><p><strong>Produzido: </strong>no Brasil&nbsp;</p><p><br></p><p><strong>Cor: </strong>Azul&nbsp;</p><p><br></p><p>Modelo veste peça tamanho</p><p><br></p><p><strong>Medidas da Modelo</strong></p><p><br></p><p><strong>Altura:&nbsp; </strong>1,81m</p><p><br></p><p><strong>Busto/Tórax: </strong>103cm</p><p><br></p><p><strong>Cintura</strong>: 82cm</p><p><br></p><p><strong>Quadril: </strong>98cm</p><p><br></p><p><strong>Manequim: </strong>40/42</p><p><br></p><p><strong>- Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Secar com temperatura baixa (40°)<br>Passar com temperatura máxima de 150°C<br>Não lavar a seco</p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><p><br></p><p><strong>Onde comprar camisa?</strong><br><br>Compre camisas no site ou APP Lojas Torra! Aqui você encontra variedade em camisas com preço baixo, para você e toda a sua família.<br></p><p><br>Na Lojas Torra você encontra este e outros modelos que podem ter modelagem padrão, ajustada ou ampla, com design desejado por pessoas de todos os estilos.</p><p><br>A camisa é uma peça básica e essencial no guarda-roupa de todas as pessoas antenadas com a moda, mas que também prezam por um guarda-roupa versátil e que combina com tudo. Aproveite e coloque no seu carrinho agora!<br></p><p><br></p>",
                                "brand": {
                                    "@type": "Brand",
                                    "@id": "2000000",
                                    "name": "TORRA"
                                },
                                "inProductGroupWithID": "68868",
                                "sku": "260035",
                                "gtin": "215260001230236",
                                "releaseDate": 1701043200000,
                                "additionalProperty": [
                                    {
                                        "@type": "PropertyValue",
                                        "name": "Tamanho",
                                        "value": "6",
                                        "valueReference": "SPECIFICATION"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "149",
                                        "value": "Plus Size"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "150",
                                        "value": "Masculino"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "category",
                                        "propertyID": "258",
                                        "value": "Camisas"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Novidades",
                                        "propertyID": "138"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "todos os produtos",
                                        "propertyID": "164"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-Todos",
                                        "propertyID": "171"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "produtos-google-shopping",
                                        "propertyID": "174",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Criteo-All",
                                        "propertyID": "416"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Colecao-Criteo",
                                        "propertyID": "590",
                                        "description": "highlight"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Sizebay",
                                        "propertyID": "2281"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "cluster",
                                        "value": "Rakuten",
                                        "propertyID": "2321"
                                    },
                                    {
                                        "@type": "PropertyValue",
                                        "name": "RefId",
                                        "value": "215260001230236",
                                        "valueReference": "ReferenceID"
                                    }
                                ],
                                "isVariantOf": {
                                    "@type": "ProductGroup",
                                    "productGroupID": "68868",
                                    "hasVariant": [
                                        {
                                            "@type": "Product",
                                            "category": "Plus Size>Masculino>Camisas",
                                            "productID": "260035",
                                            "url": "https://www.lojastorra.com.br/camisa-plus-size-masculina-estampa-folhagens-manga-curta-azul-21526000123023/p?skuId=260035",
                                            "name": "6",
                                            "description": "<p><span style=\"font-size: 1.5em; font-weight: 700;\">Características</span><br></p><p><br></p><p><strong>Segmento: </strong>camisa</p><p><br></p><p><strong>Gola:</strong> sim</p><p><br></p><p><strong>Tipo de manga: </strong>curta</p><p><br></p><p><strong>Costura: </strong>padrão</p><p><br></p><p><strong>Acabamento: </strong>padrão</p><p><br></p><p><strong>Textura do tecido: </strong>liso</p><p><br></p><p><strong>Descrição da estampa: </strong>folhagens&nbsp;</p><p><br></p><p><strong>Bordado: </strong>não possui</p><p><br></p><p><strong>Detalhes: </strong>botões&nbsp;</p><p><br></p><h2>Especificações técnicas</h2><p><br></p><p><strong>Produto: </strong>camisa</p><p><br></p><p><strong>Categoria: </strong>masculino</p><p><br></p><p><strong>Tamanho: </strong>P ao GG</p><p><br></p><p><strong>Tecido: </strong>malha</p><p><br></p><p><strong>Composição: </strong>55% algodão e 45% viscose</p><p><br></p><p><strong>Produzido: </strong>no Brasil&nbsp;</p><p><br></p><p><strong>Cor: </strong>Azul&nbsp;</p><p><br></p><p>Modelo veste peça tamanho</p><p><br></p><p><strong>Medidas da Modelo</strong></p><p><br></p><p><strong>Altura:&nbsp; </strong>1,81m</p><p><br></p><p><strong>Busto/Tórax: </strong>103cm</p><p><br></p><p><strong>Cintura</strong>: 82cm</p><p><br></p><p><strong>Quadril: </strong>98cm</p><p><br></p><p><strong>Manequim: </strong>40/42</p><p><br></p><p><strong>- Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Secar com temperatura baixa (40°)<br>Passar com temperatura máxima de 150°C<br>Não lavar a seco</p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><p><br></p><p><strong>Onde comprar camisa?</strong><br><br>Compre camisas no site ou APP Lojas Torra! Aqui você encontra variedade em camisas com preço baixo, para você e toda a sua família.<br></p><p><br>Na Lojas Torra você encontra este e outros modelos que podem ter modelagem padrão, ajustada ou ampla, com design desejado por pessoas de todos os estilos.</p><p><br>A camisa é uma peça básica e essencial no guarda-roupa de todas as pessoas antenadas com a moda, mas que também prezam por um guarda-roupa versátil e que combina com tudo. Aproveite e coloque no seu carrinho agora!<br></p><p><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "68868",
                                            "sku": "260035",
                                            "gtin": "215260001230236",
                                            "releaseDate": 1701043200000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "6",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "149",
                                                    "value": "Plus Size"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "150",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "258",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "215260001230236",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282792/21526000123023.jpg?v=638367055540270000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282793/21526000123023.jpg?v=638367055555600000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282794/21526000123023.jpg?v=638367055570700000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282795/21526000123023.jpg?v=638367055586300000",
                                                    "name": "21526000123023"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 99.99,
                                                "lowPrice": 99.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 99.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:16:56Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 24.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 19.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 6 vezes sem juros",
                                                                "billingDuration": 6,
                                                                "billingIncrement": 16.66,
                                                                "price": 99.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Plus Size>Masculino>Camisas",
                                            "productID": "260036",
                                            "url": "https://www.lojastorra.com.br/camisa-plus-size-masculina-estampa-folhagens-manga-curta-azul-21526000123023/p?skuId=260036",
                                            "name": "5",
                                            "description": "<p><span style=\"font-size: 1.5em; font-weight: 700;\">Características</span><br></p><p><br></p><p><strong>Segmento: </strong>camisa</p><p><br></p><p><strong>Gola:</strong> sim</p><p><br></p><p><strong>Tipo de manga: </strong>curta</p><p><br></p><p><strong>Costura: </strong>padrão</p><p><br></p><p><strong>Acabamento: </strong>padrão</p><p><br></p><p><strong>Textura do tecido: </strong>liso</p><p><br></p><p><strong>Descrição da estampa: </strong>folhagens&nbsp;</p><p><br></p><p><strong>Bordado: </strong>não possui</p><p><br></p><p><strong>Detalhes: </strong>botões&nbsp;</p><p><br></p><h2>Especificações técnicas</h2><p><br></p><p><strong>Produto: </strong>camisa</p><p><br></p><p><strong>Categoria: </strong>masculino</p><p><br></p><p><strong>Tamanho: </strong>P ao GG</p><p><br></p><p><strong>Tecido: </strong>malha</p><p><br></p><p><strong>Composição: </strong>55% algodão e 45% viscose</p><p><br></p><p><strong>Produzido: </strong>no Brasil&nbsp;</p><p><br></p><p><strong>Cor: </strong>Azul&nbsp;</p><p><br></p><p>Modelo veste peça tamanho</p><p><br></p><p><strong>Medidas da Modelo</strong></p><p><br></p><p><strong>Altura:&nbsp; </strong>1,81m</p><p><br></p><p><strong>Busto/Tórax: </strong>103cm</p><p><br></p><p><strong>Cintura</strong>: 82cm</p><p><br></p><p><strong>Quadril: </strong>98cm</p><p><br></p><p><strong>Manequim: </strong>40/42</p><p><br></p><p><strong>- Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Secar com temperatura baixa (40°)<br>Passar com temperatura máxima de 150°C<br>Não lavar a seco</p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><p><br></p><p><strong>Onde comprar camisa?</strong><br><br>Compre camisas no site ou APP Lojas Torra! Aqui você encontra variedade em camisas com preço baixo, para você e toda a sua família.<br></p><p><br>Na Lojas Torra você encontra este e outros modelos que podem ter modelagem padrão, ajustada ou ampla, com design desejado por pessoas de todos os estilos.</p><p><br>A camisa é uma peça básica e essencial no guarda-roupa de todas as pessoas antenadas com a moda, mas que também prezam por um guarda-roupa versátil e que combina com tudo. Aproveite e coloque no seu carrinho agora!<br></p><p><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "68868",
                                            "sku": "260036",
                                            "gtin": "215260001230235",
                                            "releaseDate": 1701043200000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "5",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "149",
                                                    "value": "Plus Size"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "150",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "258",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "215260001230235",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282792/21526000123023.jpg?v=638367055540270000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282793/21526000123023.jpg?v=638367055555600000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282794/21526000123023.jpg?v=638367055570700000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282795/21526000123023.jpg?v=638367055586300000",
                                                    "name": "21526000123023"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 99.99,
                                                "lowPrice": 99.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 99.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:16:56Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 24.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 19.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 6 vezes sem juros",
                                                                "billingDuration": 6,
                                                                "billingIncrement": 16.66,
                                                                "price": 99.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "@type": "Product",
                                            "category": "Plus Size>Masculino>Camisas",
                                            "productID": "260037",
                                            "url": "https://www.lojastorra.com.br/camisa-plus-size-masculina-estampa-folhagens-manga-curta-azul-21526000123023/p?skuId=260037",
                                            "name": "7",
                                            "description": "<p><span style=\"font-size: 1.5em; font-weight: 700;\">Características</span><br></p><p><br></p><p><strong>Segmento: </strong>camisa</p><p><br></p><p><strong>Gola:</strong> sim</p><p><br></p><p><strong>Tipo de manga: </strong>curta</p><p><br></p><p><strong>Costura: </strong>padrão</p><p><br></p><p><strong>Acabamento: </strong>padrão</p><p><br></p><p><strong>Textura do tecido: </strong>liso</p><p><br></p><p><strong>Descrição da estampa: </strong>folhagens&nbsp;</p><p><br></p><p><strong>Bordado: </strong>não possui</p><p><br></p><p><strong>Detalhes: </strong>botões&nbsp;</p><p><br></p><h2>Especificações técnicas</h2><p><br></p><p><strong>Produto: </strong>camisa</p><p><br></p><p><strong>Categoria: </strong>masculino</p><p><br></p><p><strong>Tamanho: </strong>P ao GG</p><p><br></p><p><strong>Tecido: </strong>malha</p><p><br></p><p><strong>Composição: </strong>55% algodão e 45% viscose</p><p><br></p><p><strong>Produzido: </strong>no Brasil&nbsp;</p><p><br></p><p><strong>Cor: </strong>Azul&nbsp;</p><p><br></p><p>Modelo veste peça tamanho</p><p><br></p><p><strong>Medidas da Modelo</strong></p><p><br></p><p><strong>Altura:&nbsp; </strong>1,81m</p><p><br></p><p><strong>Busto/Tórax: </strong>103cm</p><p><br></p><p><strong>Cintura</strong>: 82cm</p><p><br></p><p><strong>Quadril: </strong>98cm</p><p><br></p><p><strong>Manequim: </strong>40/42</p><p><br></p><p><strong>- Instruções de lavagem:</strong></p><p>Lavar com temperatura máxima de 40°C<br>Não usar alvejante a base de cloro<br>Secar com temperatura baixa (40°)<br>Passar com temperatura máxima de 150°C<br>Não lavar a seco</p><p><br></p><p>O tom das cores dos produtos nas fotos podem sofrer variações em decorrência do flash.</p><p><br></p><p><strong>Onde comprar camisa?</strong><br><br>Compre camisas no site ou APP Lojas Torra! Aqui você encontra variedade em camisas com preço baixo, para você e toda a sua família.<br></p><p><br>Na Lojas Torra você encontra este e outros modelos que podem ter modelagem padrão, ajustada ou ampla, com design desejado por pessoas de todos os estilos.</p><p><br>A camisa é uma peça básica e essencial no guarda-roupa de todas as pessoas antenadas com a moda, mas que também prezam por um guarda-roupa versátil e que combina com tudo. Aproveite e coloque no seu carrinho agora!<br></p><p><br></p>",
                                            "brand": {
                                                "@type": "Brand",
                                                "@id": "2000000",
                                                "name": "TORRA"
                                            },
                                            "inProductGroupWithID": "68868",
                                            "sku": "260037",
                                            "gtin": "215260001230237",
                                            "releaseDate": 1701043200000,
                                            "additionalProperty": [
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "Tamanho",
                                                    "value": "7",
                                                    "valueReference": "SPECIFICATION"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "149",
                                                    "value": "Plus Size"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "150",
                                                    "value": "Masculino"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "category",
                                                    "propertyID": "258",
                                                    "value": "Camisas"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Novidades",
                                                    "propertyID": "138"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "todos os produtos",
                                                    "propertyID": "164"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-Todos",
                                                    "propertyID": "171"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "produtos-google-shopping",
                                                    "propertyID": "174",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Criteo-All",
                                                    "propertyID": "416"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Colecao-Criteo",
                                                    "propertyID": "590",
                                                    "description": "highlight"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Sizebay",
                                                    "propertyID": "2281"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "cluster",
                                                    "value": "Rakuten",
                                                    "propertyID": "2321"
                                                },
                                                {
                                                    "@type": "PropertyValue",
                                                    "name": "RefId",
                                                    "value": "215260001230237",
                                                    "valueReference": "ReferenceID"
                                                }
                                            ],
                                            "image": [
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282792/21526000123023.jpg?v=638367055540270000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282793/21526000123023.jpg?v=638367055555600000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282794/21526000123023.jpg?v=638367055570700000",
                                                    "name": "21526000123023"
                                                },
                                                {
                                                    "@type": "ImageObject",
                                                    "alternateName": "21526000123023",
                                                    "url": "https://torratorra.vtexassets.com/arquivos/ids/1282795/21526000123023.jpg?v=638367055586300000",
                                                    "name": "21526000123023"
                                                }
                                            ],
                                            "offers": {
                                                "@type": "AggregateOffer",
                                                "priceCurrency": "BRL",
                                                "highPrice": 99.99,
                                                "lowPrice": 99.99,
                                                "offerCount": 1,
                                                "offers": [
                                                    {
                                                        "@type": "Offer",
                                                        "price": 99.99,
                                                        "seller": "1",
                                                        "priceValidUntil": "2024-12-01T20:16:56Z",
                                                        "inventoryLevel": {
                                                            "value": 10000
                                                        },
                                                        "giftSkuIds": [],
                                                        "teasers": [],
                                                        "priceSpecification": [
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/ListPrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "American Express",
                                                                "description": "American Express 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Visa",
                                                                "description": "Visa 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Mastercard",
                                                                "description": "Mastercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Hipercard",
                                                                "description": "Hipercard 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Elo",
                                                                "description": "Elo 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Vale",
                                                                "description": "Vale à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "PicPay",
                                                                "description": "PicPay à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "AmeDigital",
                                                                "description": "AmeDigital à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Pix",
                                                                "description": "Pix à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra à vista",
                                                                "billingDuration": 1,
                                                                "billingIncrement": 99.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 2 vezes sem juros",
                                                                "billingDuration": 2,
                                                                "billingIncrement": 49.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 3 vezes sem juros",
                                                                "billingDuration": 3,
                                                                "billingIncrement": 33.33,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 4 vezes sem juros",
                                                                "billingDuration": 4,
                                                                "billingIncrement": 24.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 5 vezes sem juros",
                                                                "billingDuration": 5,
                                                                "billingIncrement": 19.99,
                                                                "price": 99.99
                                                            },
                                                            {
                                                                "@type": "UnitPriceSpecification",
                                                                "priceType": "https://schema.org/SalePrice",
                                                                "priceComponentType": "https://schema.org/Installment",
                                                                "name": "Cartão Torra",
                                                                "description": "Cartão Torra 6 vezes sem juros",
                                                                "billingDuration": 6,
                                                                "billingIncrement": 16.66,
                                                                "price": 99.99
                                                            }
                                                        ],
                                                        "availability": "https://schema.org/InStock"
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "url": "https://www.lojastorra.com.br/camisa-plus-size-masculina-estampa-folhagens-manga-curta-azul-21526000123023/p",
                                    "name": "Camisa Plus Size Masculina Estampa Folhagens Manga Curta Azul",
                                    "additionalProperty": [
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Manga",
                                            "value": "Manga Curta",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Cor",
                                            "value": "Azul",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estilo",
                                            "value": "Fashion",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Estampa",
                                            "value": "Floral",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tecido",
                                            "value": "Algodão",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "6",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "5",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "Tamanho",
                                            "value": "7",
                                            "valueReference": "PROPERTY"
                                        },
                                        {
                                            "@type": "PropertyValue",
                                            "name": "sellerId",
                                            "value": "1",
                                            "valueReference": "PROPERTY"
                                        }
                                    ],
                                    "model": "21526000123023"
                                },
                                "image": [
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "21526000123023",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1282792/21526000123023.jpg?v=638367055540270000",
                                        "name": "21526000123023"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "21526000123023",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1282793/21526000123023.jpg?v=638367055555600000",
                                        "name": "21526000123023"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "21526000123023",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1282794/21526000123023.jpg?v=638367055570700000",
                                        "name": "21526000123023"
                                    },
                                    {
                                        "@type": "ImageObject",
                                        "alternateName": "21526000123023",
                                        "url": "https://torratorra.vtexassets.com/arquivos/ids/1282795/21526000123023.jpg?v=638367055586300000",
                                        "name": "21526000123023"
                                    }
                                ],
                                "offers": {
                                    "@type": "AggregateOffer",
                                    "priceCurrency": "BRL",
                                    "highPrice": 99.99,
                                    "lowPrice": 99.99,
                                    "offerCount": 1,
                                    "offers": [
                                        {
                                            "@type": "Offer",
                                            "price": 99.99,
                                            "seller": "1",
                                            "priceValidUntil": "2024-12-01T20:16:56Z",
                                            "inventoryLevel": {
                                                "value": 10000
                                            },
                                            "giftSkuIds": [],
                                            "teasers": [],
                                            "priceSpecification": [
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/ListPrice",
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "American Express",
                                                    "description": "American Express 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Visa",
                                                    "description": "Visa 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Mastercard",
                                                    "description": "Mastercard 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Hipercard",
                                                    "description": "Hipercard 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Elo",
                                                    "description": "Elo 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Vale",
                                                    "description": "Vale à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "PicPay",
                                                    "description": "PicPay à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "AmeDigital",
                                                    "description": "AmeDigital à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Pix",
                                                    "description": "Pix à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra à vista",
                                                    "billingDuration": 1,
                                                    "billingIncrement": 99.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 2 vezes sem juros",
                                                    "billingDuration": 2,
                                                    "billingIncrement": 49.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 3 vezes sem juros",
                                                    "billingDuration": 3,
                                                    "billingIncrement": 33.33,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 4 vezes sem juros",
                                                    "billingDuration": 4,
                                                    "billingIncrement": 24.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 5 vezes sem juros",
                                                    "billingDuration": 5,
                                                    "billingIncrement": 19.99,
                                                    "price": 99.99
                                                },
                                                {
                                                    "@type": "UnitPriceSpecification",
                                                    "priceType": "https://schema.org/SalePrice",
                                                    "priceComponentType": "https://schema.org/Installment",
                                                    "name": "Cartão Torra",
                                                    "description": "Cartão Torra 6 vezes sem juros",
                                                    "billingDuration": 6,
                                                    "billingIncrement": 16.66,
                                                    "price": 99.99
                                                }
                                            ],
                                            "availability": "https://schema.org/InStock"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "role": "user"
        }
    ]
  }

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
