import { AppContext } from "../apps/site.ts";
import { notFound } from "deco/mod.ts";
export interface Props {
  /**
   * @title Query String
   * @description The query that wants to be done
   * @examples "shoes"\n"tshirt"\n"blue tshirt"
   */
  query: string;
  /**
   * @title Store Name
   * @description The store name
   * @examples zeedog\naviator
   */
  storeName: string;
}

export default async function (
  { query, storeName }: Props,
  _req: Request,
  ctx: AppContext,
) {
  const store = ctx.stores[storeName];
  if (!store) {
    notFound();
  }
  const response = await fetch(
    new URL(
      `/live/invoke/vtex/loaders/intelligentSearch/productList.ts`,
      store.url,
    ),
    {
      method: "POST",
      body: JSON.stringify({
        props: {
          query,
          count: 4,
        },
      }),
    },
  ).then((resp) => resp.json());
  return response;
}
