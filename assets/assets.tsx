import React, { FC, ReactElement } from "react";
import logo from "/assets/logo.svg";
import styled from "./style-components-fix";
import {GetIpData, IpData} from './othersFunction'
 type FoodPandaPerData = {
  food_name: string;
  shop_name: string;
  deliver_fee: number;
  deliver_time: number;
  price: number;
  url: string;
};
 type UberEatPerData = {
  food_name: string;
  shop_name: string;
  deliver_fee: number;
  deliver_time: number;
  price: number;
  url: string;
};
type Style={style?:React.CSSProperties;IpData?:IpData; [key: string]: any};
 type BoardProps = {
  FoodPandaPerData: FoodPandaPerData;
  UberEatPerData: UberEatPerData;
};
//<a> with no styling = <A>
export const A = styled.a`
  color: var(--black-color);
  box-shadow: none;
  &:hover {
    box-shadow: none;
    background-color: var(--white-color);
    color: var(--black-color);
  }
  &::after {
    content: none;
    margin: 0;
  }
`;
{/* <A> with styling */ }
export const A1 = styled.a`
  color: var(--black-color);
  box-shadow: none;
  border: 2px solid var(--primary-color);
  box-shadow: 3px 3px 2px 1px var(--shadow-color);
  border-radius: var(--default-radius);
  &:hover {
    box-shadow: none;
    background-color: var(--white-color);
    color: var(--black-color);
  }
  &::after {
    content: none;
    margin: 0;
  }
`;

export function ColorPalette() {
  return (
    <div
      style={{
        display: "flex",
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
        #FF8C00 (dark orange)<strong>*primary-color</strong>
      </div>
      <div style={{ backgroundColor: "#FFC0CB", flexBasis: "25%" }}>
        #FFC0CB (pink)<strong>***shadow-color</strong>
      </div>
      <div style={{ backgroundColor: "#FF4500", flexBasis: "25%" }}>
        #FF4500 (orangered)******footer-color
      </div>
      <div style={{ backgroundColor: "#FF69B4", flexBasis: "25%" }}>
        #FF69B4 (hot pink)
      </div>
      <div style={{ backgroundColor: "#FF1493", flexBasis: "25%" }}>
        #FF1493 (deep pink)<strong>**secondary-color</strong>
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
      <h3 style={{ flexBasis: "100%" }}>other color:</h3>
      <div style={{ backgroundColor: "#FF0000", flexBasis: "25%" }}>
        #FF0000 (red)<strong>****link-color</strong>
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          flexBasis: "25%",
          border: "1px solid black",
        }}
      >
        #FFFFFF (red)<strong>*****text-hover-color</strong>
      </div>
    </div>
  );
}
export function Fonts() {
  return (
    <div
      style={{
        display: "flex",
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
      <cite>
        <strong>font-weight</strong>:100,300,<strong>400(default)</strong>
        ,500,700,900.
        <br /> html default <strong>font-size</strong>: <strong>10pt</strong>
      </cite>
    </div>
  );
}
export function Logo() {
  return (
    <>
      <A href="/">
        <img
          // style={{ display: "block" }}
          src={logo}
          height={"auto"}
          width={"100%"}
          alt="logo"
        />
      </A>
    </>
  );
}
// can also be written with 
// export const Footer :FC<Style> =({style:style}): ReactElement =>{
  export function Footer({
    style,IpData
  }: Style){
  const style1:React.CSSProperties = {...style,width:"100%" };
    console.log(IpData,"here is input")
  return (
    <div style={style1}>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          color: "var(--white-color)",
          backgroundColor: "var(--footer-color)",
          padding: "30px 0px 30px 5%",
          overflow: "auto",
          display: "flex",
        }}
      >
        <span style={{ flexBasis: "10%" }}>Footer</span>  <cite style={{ flexBasis: "40%" }}>{IpData?.city}, {IpData?.state}</cite>

        <a style={{ flexGrow: 1, margin: "0 10px" }} href="#about">
          About
        </a>
        <a style={{ flexGrow: 1, margin: "0 10px" }} href="#advertising">
          Advertising
        </a>
        <a style={{ flexGrow: 1, margin: "0 10px" }} href="#business">
          Business
        </a>
        <a style={{ flexGrow: 1, margin: "0 10px" }} href="#how-search-works">
          How Search works
        </a>
      </div>
    </div>
  );
}
export const Board: FC<BoardProps> = ({
  FoodPandaPerData: FoodPandaPerData,
  UberEatPerData: UberEatPerData,
}): ReactElement => {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: "1.6rem",
        boxSizing: "border-box",
        paddingLeft:"30px",
        paddingRight:"230px",
        margin:"30px 0"
      }}
    >

      <div
        style={{
          flexGrow: 2, flexShrink: 1,
          // border:"1px solid black",
          borderRadius: "var(--default-radius)",
          backgroundColor: "var(--white-color)",
          height: "25vh",
          minWidth: "300px",
          minHeight: "300px",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>FoodName</h2>
        <h3 style={{ textAlign: "center" }}>這筆資料正確嗎？</h3>
        <div style={{ margin: "5px 0", width: "100%", display: "inline-flex", alignItems: "center", }}><div style={{ textAlign: "right", flexBasis: "72%", fontSize: "2rem" }}>11</div><button style={{ fontSize: "2rem" }}>🖒</button></div>
        <div style={{ margin: "5px 0", width: "100%", display: "inline-flex", alignItems: "center", }}><div style={{ textAlign: "right", flexBasis: "72%", fontSize: "2rem" }}> 3</div><button style={{ fontSize: "2rem" }}>🖓</button></div>

      </div>

      <A1 style={{ flexGrow: 1, flexShrink: 1 }} target={"_blank"} href={FoodPandaPerData.url}>
        <div
          style={{
            borderRadius: "var(--default-radius)",
            backgroundColor: "var(--white-color)",
            width: "100%",
            height: "25vh",
            minWidth: "300px",
            minHeight: "300px",
            boxSizing: "border-box",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#CD0B66" }}>FoodPanda</h2>
          <h3>{FoodPandaPerData.shop_name}</h3>
          <ul>
            <li>送餐時間：{FoodPandaPerData.deliver_time}分鐘</li>
            <li>價格：    ${FoodPandaPerData.price}</li>
            <li>外送費用：${FoodPandaPerData.deliver_fee}</li>
          </ul>
          <h1 style={{ textAlign: "right" }}>${FoodPandaPerData.price + FoodPandaPerData.deliver_fee}</h1>
        </div>
      </A1>
      <A1 style={{ flexGrow: 1, flexShrink: 1 }} target={"_blank"} href={UberEatPerData.url}>
        <div
          style={{
            borderRadius: "var(--default-radius)",
            backgroundColor: "var(--white-color)",
            width: "100%",
            height: "25vh",
            minWidth: "300px",
            minHeight: "300px",
            boxSizing: "border-box",
            padding: "20px",
          }}
        >
          <h2 style={{
            color: "#06C167",
            textShadow: "1px 1px #142328"
          }}>UberEat</h2>
          <h3>{UberEatPerData.shop_name}</h3>
          <ul>
            <li>送餐時間：{UberEatPerData.deliver_time}分鐘</li>
            <li>價格：    ${UberEatPerData.price}</li>
            <li>外送費用：${UberEatPerData.deliver_fee}</li>
          </ul>
          <h1 style={{ textAlign: "right" }}>${UberEatPerData.price + UberEatPerData.deliver_fee}</h1>
        </div>
      </A1>
    </div>
  );
};
export function ComponentsWithoutChildren() {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      Components Without Children
    </div>
  );
}

export function ComponentsWithChildren({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      {children}
    </div>
  );
}

// show all assets done
export function Assets() {
  return (
    <div style={{ margin: "10px" }}>
      {/* all component are built using model below */}
      {/* <h3>Build Component Using Options below:</h3>
      <ComponentsWithoutChildren/>
      <ComponentsWithChildren>Components With Children</ComponentsWithChildren> */}
      <ColorPalette />
      <Fonts />
      <div style={{ width: "500px" }}>
        <Logo />
      </div>
      <hr />
      <button>this is a button</button>
      <input type={"text"}></input>
      <hr />
      <h2>為您找到相似的‘FoodName’有</h2>
      <Board
        FoodPandaPerData={{
          food_name: "foodname01",
          shop_name: "shopname01",
          deliver_fee: 49,
          deliver_time: 25,
          price: 100,
          url: "https://www.foodpanda.com.tw/en/restaurant/e5oc/qi-zhan-cha-san-zhong-zi-qiang-dian",
        }}
        UberEatPerData={{
          food_name: "foodname02",
          shop_name: "shopname02",
          deliver_fee: 59,
          deliver_time: 35,
          price: 110,
          url: "https://www.ubereats.com/tw-en/store/%E5%AF%A7%E5%A4%8F%E5%A4%9C%E5%B8%82-%E5%AF%A7%E5%A4%8F%E9%9A%A8%E7%B7%A3%E7%B4%A0%E9%A3%9F/-rt8e3bNUeOkQoFI23lsQg?diningMode=DELIVERY",
        }}
      />
      <hr />
      <Footer />
    </div>
  );
}
