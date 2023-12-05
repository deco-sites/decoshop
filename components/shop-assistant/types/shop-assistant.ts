export interface Content {
  name: string;
  props: {
    url: string;
    request: string;
  };
  response: string | Product[];
}

export interface Product {
  "@type": string;
  category: string;
  productID: string;
  url: string;
  name: string;
  description: string;
  brand: Brand;
  inProductGroupWithID: string;
  sku: string;
  gtin: string;
  releaseDate: number;
  additionalProperty: PropertyValue[];
  isVariantOf?: ProductGroup;
  image: ImageObject[];
  offers: AggregateOffer;
}

export interface Brand {
  "@type": string;
  "@id": string;
  name: string;
}

export interface PropertyValue {
  "@type": string;
  name: string;
  value: string | number;
  valueReference: string;
}

export interface ProductGroup {
  "@type": string;
  productGroupID: string;
  hasVariant: Product[];
  url: string;
  name: string;
  additionalProperty: PropertyValue[];
  model: string;
}

export interface ImageObject {
  "@type": string;
  alternateName: string;
  url: string;
  name: string;
}

export interface AggregateOffer {
  "@type": string;
  priceCurrency: string;
  highPrice: number;
  lowPrice: number;
  offerCount: number;
  offers: Offer[];
}

export interface Offer {
  "@type": string;
  price: number;
  seller: string;
  priceValidUntil: string;
  inventoryLevel: InventoryLevel;
  giftSkuIds: any[]; // Precisaria definir o tipo correto
  teasers: any[]; // Precisaria definir o tipo correto
  priceSpecification: UnitPriceSpecification[];
  availability: string;
}

export interface InventoryLevel {
  value: number;
}

export interface UnitPriceSpecification {
  "@type": string;
  priceType: string;
  priceComponentType?: string;
  name?: string;
  description?: string;
  billingDuration?: number;
  billingIncrement?: number;
  price: number;
}

export interface Message {
  content: Content[] | string;
  type: string;
  role: "user" | "bot";
}
