import { a as jsx } from "./chunk-746fc63d.js";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import "react/jsx-runtime";
const logoUrl = "/assets/logo.bebe2e90.svg";
const Context = React.createContext(void 0);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function PageShell({ children, pageContext }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + vite-plugin-ssr";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
