# Readme
---

## Steps to do:
1. Prototyping in `Assets.tsx` file( using style component *emotion* ) (DOING...)
2. import Component to Pages
3. Write Functions


`Base setup work from commit:`[6a05c45](https://github.com/ChickenLamb/FooberSearchV1/tree/6a05c45f8c2152368fdf5b142f40e3c668fb1c15)
1. imported default font-family:"Noto Sans TCsans-serif"
2. default font-size: 10pt
3. body font-size: 1.2em(12pt)
4. Checkout Assets page on hosting directory ['./assets'](https://foober-search-v1.vercel.app/assets)
---
# NOTICE
## Custom CSS/static Assets Import:
1. import Custom Global CSS styling, static Assets to PageShell.tsx (will include static files imported in PageShell.tsx when client production bundling as default)
2. import Custom Global CSS styling, static Assets to client code (will include static files imported in _default.page.client.tsx when client production bundling as default)
3. import Custom Global CSS styling, static Assets to sever code (By default, static assets (CSS, images, ...) imported only by server code are missing in the client production bundle (i.e. /dist/client/assets/).untouch all import in sever code and import all used assets file from sever code to client code again  `OR` We need to set vite plugin ssr config  `includeAssetsImportedByServer` to `true`(Experimental) if we want static files imported in sever code(_default.page.client.tsx) to be included when production bundling, otherwise it will be ignored when production bundling.)

## [style-components-fix.tsx](https://github.com/ChickenLamb/FooberSearchV1/tree/main/assets/style-components-fix.tsx)
`// DO NOT DELETE THIS FILE
// TO FIX message "TypeError: styled.a is not a function" when production bundling 'styled-components' modules`
---
## Tweaking to do:
1. subsetting fonts to improve load time using Glyphhanger?

## Tweaking Made:
1. enable only woff2, but it's usage is only [96%](https://caniuse.com/woff2)

## Vercel
! Hosting override output directory to `'dist/client/'`

Website Showcase on vercel hosting: [Go to Webpage](https://foober-search-v1.vercel.app/)
---
