import { j as jsxs, F as Fragment, a as jsx } from "./chunk-746fc63d.js";
import styled from "styled-components";
import "react/jsx-runtime";
const logo = "/assets/logo.bebe2e90.svg";
const MyStyled = typeof styled === "function" ? styled : styled.default;
function Logo() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        margin: 10
      },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logo, height: 64, width: 64, alt: "logo" }) })
    }
  );
}
function Content({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        padding: 20,
        borderLeft: "2px solid #eee",
        minHeight: "fit-content"
      },
      children
    }
  );
}
const Button = MyStyled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover{

    background-color:blue;
  }
`;
function Assets() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Content, { children: "ddddf" }),
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx(Button, { children: "This is a Button" })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Assets, {}) });
}
export {
  Page
};
