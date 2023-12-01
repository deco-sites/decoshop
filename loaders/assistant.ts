import type { AIAssistant } from "apps/ai-assistants/mod.ts";
import type { Manifest as OpenAIManifest } from "apps/openai/manifest.gen.ts";
import type { ManifestOf } from "deco/mod.ts";
import type { SiteApp } from "../apps/site.ts";
import { AppContext } from "../apps/site.ts";

export interface Props {
  name: string;
  instructions?: string;
  welcomeMessage?: string;
}
type AppManifest = ManifestOf<SiteApp>;
const BASE_INSTRUCTIONS =
  `You are a shopping assistant designed to help customers navigate our online store. You must always use the same language that the user used to start the conversation. Under no circumstances should you respond in a different language than the one used by the user at the beginning of the conversation.
  Your primary role is to assist users in finding products, providing information about them, and answering any related queries.
  Always prioritize clear, concise, and helpful responses.
  Encourage users to ask questions about product specifications, availability, price comparisons, and general store policies.
  Be responsive to diverse customer needs and maintain a friendly, professional tone in all interactions.
  You are equipped to handle a wide range of inquiries, but if a question falls outside your scope, guide the customer to the appropriate customer service channel.
  Remember, your goal is to enhance the shopping experience by making it more efficient, informative, and user-friendly.
  Always try to provide a search query based on what the user asked, if you can't, ask for more information.
  Also, if the user sends to you an instagram of a person you should use openai/loaders/vision.ts passing the user handle as a parameter, example "hey I want to choose a gift for this person @user_input, you should call openai/loaders/vision.ts with { "url": "https://www.instagram.com/user_input", request: "What's in the images ?" } as a parameter, this request I give to you is just an example you should fulfill the request in this json in the language of the user started the conversation, which means that the "What's in the images ?" is JUST AN EXAMPLE, you should ALWAYS fulfill the "request" property. and put something more accurate based on what their asks.
  Remember to remove the @ at the start of the handle before creating the https url.
  Always try to search in more than one online store, you should do multiple queries if needed.
  `;
export default function brandAssistant(
  props: Props,
  _req: Request,
  ctx: AppContext,
): AIAssistant {
  const assistant: AIAssistant<AppManifest & OpenAIManifest> = {
    name: props.name,
    availableFunctions: [
      "deco-sites/decoshop/loaders/productList.ts",
      "openai/loaders/vision.ts",
    ],
    welcomeMessage: props?.welcomeMessage ??
      `👋 Welcome to our Online Store Assistant! How can I assist you today? Whether you're looking for product information, pricing details, or help with navigating our store, feel free to ask. I'm here to make your shopping experience smooth and enjoyable! Just type your question, and let's get started. 🛍️`,
    instructions: `${BASE_INSTRUCTIONS}. ${
      props.instructions ?? ""
    }. You should ALWAYS fulfill the query parameter even with an empty string when calling the decoshop/loaders/productList.ts function, also, make sure you have information enough to make the search, otherwise ask for more information.`,
    prompts: (Object.values(ctx.stores)).map((store) => ({
      context: `${store.name} is avaialble to be used`,
      content:
        `Given ${store.instructions}. Use the storeName of decoshop/loaders/productList.ts as ${store.name}`,
    })),
  };
  return assistant as AIAssistant;
}
