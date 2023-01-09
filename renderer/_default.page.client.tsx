import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'
// Workaround: we import icon.svg here as well, even though we don't use it in this file,
// to make Vite include icon.svg in the client bundle.
import '../assets/icon.svg'
// ContextWrapper to create global{SearchQuery, Ip location...Interface Data} state variables in child element
import { GlobalDataProvider } from '../assets/DataContext'
export { render }

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('page-view')!,
    <GlobalDataProvider>
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
    </GlobalDataProvider>
  )
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
