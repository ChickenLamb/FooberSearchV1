import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
// By default, static assets (CSS, images, ...) imported only by server code are missing in the client production bundle
// A workaround is to make sure that all assets are imported at least once from client code(_default.page.client.tsx).
// Else we need to set `includeAssetsImportedByServer` to `true` if we want
// static assets in sever code(_default.page.server.tsx)  to be included in production bundle (i.e. /dist/client/assets/) , otherwise it will be ignored.
import logoUrl from '../assets/icon.svg'
import type { PageContextServer } from './types'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Foober Search'
  const desc = (documentProps && documentProps.description) || 'Foodpanda and UberEats Searcher All in one Platform'

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
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
