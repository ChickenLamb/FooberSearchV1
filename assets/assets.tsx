import React from "react";
import logo from "/assets/logo.svg";
import styled from "styled-components";
const MyStyled: typeof styled =
  typeof styled === "function" ? styled : styled.default;

// export default MyStyled;
export function ColorPalette() {
  return (
    <div
      style={{
        display: "flex",
        flexShrink: 1,
        flexGrow: 1,
        flexWrap: "wrap",
        border: "1px solid black",
        boxSizing: "border-box",
        padding: "10px",
      }}
    >
      <h1 style={{ flexBasis: "100%" }}>ColorPalette</h1>
      <h3 style={{ flexBasis: "100%" }}>primary color:</h3>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          flexBasis: "25%",
          border: "1px solid black",
        }}
      >
        #FFFFFF (white)
      </div>
      <h3 style={{ flexBasis: "100%" }}>secondary color:</h3>
      <div style={{ backgroundColor: "#FF7F00", flexBasis: "25%" }}>
        #FF7F00 (bright orange)
      </div>
      <div style={{ backgroundColor: "#FFA07A", flexBasis: "25%" }}>
        #FFA07A (light salmon)
      </div>
      <div style={{ backgroundColor: "#FFB6C1", flexBasis: "25%" }}>
        #FFB6C1 (light pink)
      </div>
      <div style={{ backgroundColor: "#FF8C00", flexBasis: "25%" }}>
        #FF8C00 (dark orange)*
      </div>
      <div style={{ backgroundColor: "#FFC0CB", flexBasis: "25%" }}>
        #FFC0CB (pink)
      </div>
      <div style={{ backgroundColor: "#FF4500", flexBasis: "25%" }}>
        #FF4500 (orangered)
      </div>
      <div style={{ backgroundColor: "#FF69B4", flexBasis: "25%" }}>
        #FF69B4 (hot pink)
      </div>
      <div style={{ backgroundColor: "#FF1493", flexBasis: "25%" }}>
        #FF1493 (deep pink)
      </div>
      <h3 style={{ flexBasis: "100%" }}>motion color:</h3>
      <div style={{ backgroundColor: "#00FF00", flexBasis: "25%" }}>
        #00FF00 (bright green)
      </div>
      <div
        style={{
          color: "#FFFFFF",
          backgroundColor: "#006400",
          flexBasis: "25%",
        }}
      >
        #006400 (dark green)
      </div>
      <div style={{ backgroundColor: "#7FFF00", flexBasis: "25%" }}>
        #7FFF00 (chartreuse)
      </div>
      <div style={{ backgroundColor: "#32CD32", flexBasis: "25%" }}>
        #32CD32 (lime green)
      </div>
      <h3 style={{ flexBasis: "100%" }}>subtle color:</h3>
      <div
        style={{
          color: "#FFFFFF",
          backgroundColor: "#00008B",
          flexBasis: "33%",
        }}
      >
        #00008B
      </div>
      <div style={{ backgroundColor: "#EE82EE", flexBasis: "33%" }}>
        #EE82EE
      </div>
      <div
        style={{
          color: "#FFFFFF",
          backgroundColor: "#2F2F4F",
          flexBasis: "33%",
        }}
      >
        #2F2F4F
      </div>
    </div>
  );
}
export function Fonts() {
  return (
    <div
      style={{
        display: "flex",
        flexShrink: 1,
        flexGrow: 1,
        flexWrap: "wrap",
        border: "1px solid black",
        boxSizing: "border-box",
        padding: "10px",
      }}
    >
      <h1 style={{ flexBasis: "100%" }}>
        <a
          href="https://gwfh.mranftl.com/fonts/noto-sans-tc?subsets=chinese-traditional,latin"
          target={"_blank"}
        >
          Fonts(Noto Sans TC sans-serif)
        </a>
      </h1>
      <h3 style={{ flexBasis: "100%" }}>English:</h3>
      <p style={{ flexBasis: "100%" }}>The cat sat on the mat.</p>
      <h3 style={{ flexBasis: "100%" }}>中文（繁體）:</h3>
      <p style={{ flexBasis: "100%" }}>花开富贵在君王邸，花谢贫贱在我床前。</p>
      <cite><strong>font-weight</strong>:100,300,<strong>400(default)</strong>,500,700,900.<br/> html default <strong>font-size</strong>: <strong>10pt</strong></cite>
    </div>
  );
}
export function Logo() {
  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
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
export function ComponentsWithoutChildren() {
  return (
    <div
    style={{
      width:"fit-content",
      height:"fit-content"
    }}
    >
      Components Without Children
    </div>
  );
}
const ComponentWithChildren = MyStyled.div`
  width:fit-content;
  height:fit-content;
`;
export function ComponentsWithChildren({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width:"fit-content",
        height:"fit-content"
      }}
    >
      {children}
    </div>
  );
}

// show all assets done
export function Assets() {
  return (
    <div style={{margin:"10px"}}>
      <ColorPalette />
      <Fonts />

      <h3>Build Component Using Options below:</h3>
      <ComponentsWithoutChildren/>
      <ComponentWithChildren>Component With Children</ComponentWithChildren>
      <ComponentsWithChildren>Components With Children</ComponentsWithChildren>
      <Logo />
      <Button>This is a Button</Button>
      <input type={"text"}></input>
    </div>
  );
}
