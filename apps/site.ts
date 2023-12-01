import website, { Props as WebSiteProps } from "apps/website/mod.ts";
import { App, AppContext as AC } from "deco/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

/**
 * @title {{{name}}}
 */
export interface Store {
  name: string;
  url: string;
  instructions: string;
}
export interface Props extends WebSiteProps {
  stores?: Store[];
}

export interface State {
  stores: Record<string, Store>;
}

type WebsiteApp = ReturnType<typeof website>;
export default function Site(
  state: Props,
): App<Manifest, State, [
  WebsiteApp,
]> {
  return {
    state: {
      ...state,
      stores: (state?.stores ?? []).reduce(
        (acc, store) => ({ [store.name]: store, ...acc }),
        {},
      ),
    },
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps } from "apps/website/mod.ts";
