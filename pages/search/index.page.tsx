import React, { useState, useEffect, useContext } from 'react'
import { Logo, Footer, Board1, Board } from '../../assets/assets'
import { type GlobalDatadef, type GlobalDatafunc, GlobalData, SetGlobalData } from '../../assets/DataContext'
import { GetIpData, SearchClick, SearchEnter } from '../../assets/othersFunction'
import { navigate } from "vite-plugin-ssr/client/router";
export { Page }
const FoodPandaPerData = {
  food_name: "foodname01",
  shop_name: "shopname01",
  deliver_fee: 49,
  deliver_time: 25,
  price: 100,
  url: "https://www.foodpanda.com.tw/en/restaurant/e5oc/qi-zhan-cha-san-zhong-zi-qiang-dian",
}
const FoodPandaPerData1 = {
  food_name: "無刺虱目魚肉湯",
  shop_name: "享之饌虱目魚 (台北南昌店)",
  deliver_fee: 49,
  deliver_time: 25,
  price: 100,
  url: "https://www.foodpanda.com.tw/en/restaurant/ial9/xiang-zhi-zhuan-shi-mu-yu-tai-bei-nan-chang-dian",
}
const FoodPandaPerData2 = {
  food_name: "虱目魚粥",
  shop_name: "古早味虱目魚粥",
  deliver_fee: 49,
  deliver_time: 25,
  price: 80,
  url: "https://www.foodpanda.com.tw/en/restaurant/u1un/gu-zao-wei-shi-mu-yu-zhou",
}
const FoodPandaPerData3 = {
  food_name: "魚肚煎",
  shop_name: "滿塘台南虱目魚 (台北西門店)",
  deliver_fee: 49,
  deliver_time: 25,
  price: 240,
  url: "https://www.foodpanda.com.tw/en/restaurant/cggj/man-tang-tai-nan-shi-mu-yu-tai-bei-xi-men-dian",
}
const UberEatPerData = {
  food_name: "foodname02",
  shop_name: "shopname02",
  deliver_fee: 59,
  deliver_time: 35,
  price: 110,
  url: "https://www.ubereats.com/tw-en/store/%E5%AF%A7%E5%A4%8F%E5%A4%9C%E5%B8%82-%E5%AF%A7%E5%A4%8F%E9%9A%A8%E7%B7%A3%E7%B4%A0%E9%A3%9F/-rt8e3bNUeOkQoFI23lsQg?diningMode=DELIVERY",
}
const UberEatPerData1 = {
  food_name: "無刺虱目魚肉湯",
  shop_name: "享之饌虱目魚 (台北南昌店)",
  deliver_fee: 59,
  deliver_time: 35,
  price: 100,
  url: "https://www.ubereats.com/tw-en/store/%E4%BA%AB%E4%B9%8B%E9%A5%8C%E8%99%B1%E7%9B%AE%E9%AD%9A/WAXS02tiS6-ZjPL7JZ6NSg/33bb03b0-9698-5735-8e39-7006a9afd00e/3301464d-7ad3-50ce-b5f7-36494371a61c/ff8c60db-324f-5515-9802-eebb46ccfff6",
}
const UberEatPerData2 = {
  food_name: "無刺虱目魚肚煎",
  shop_name: "享之饌虱目魚 (台北南昌店)",
  deliver_fee: 59,
  deliver_time: 35,
  price: 190,
  url: "https://www.ubereats.com/tw-en/store/%E4%BA%AB%E4%B9%8B%E9%A5%8C%E8%99%B1%E7%9B%AE%E9%AD%9A/WAXS02tiS6-ZjPL7JZ6NSg/33bb03b0-9698-5735-8e39-7006a9afd00e/7e12b8f3-bcca-5d66-9ae6-285e4a560798/0342d32a-efb1-5328-8880-d33a40c69681",
}
const UberEatPerData3 = {
  food_name: "無刺虱目魚肚煎",
  shop_name: "潭村虱目魚店",
  deliver_fee: 59,
  deliver_time: 35,
  price: 210,
  url: "https://www.ubereats.com/tw-en/store/%E6%BD%AD%E6%9D%91%E8%99%B1%E7%9B%AE%E9%AD%9A%E5%BA%97/a8U-3wL-QNaLi3URPA4hfQ/36f684ee-be3f-4e48-8666-cf2365163359/7e12b8f3-8469-55f3-812d-aebb742d9931/bb78327a-8aea-4799-841f-6e5c21f8ecf8",
}

function Page() {
  const Data = useContext<GlobalDatadef | null>(GlobalData)
  const setData = useContext<GlobalDatafunc | null>(SetGlobalData)
  const [InputQuery, setInputQuery] = useState<string>("")
  if (typeof window !== 'undefined') {
    //here `window` is available
    var SearchURL = new URL(window.location.href);
  }

  useEffect(() => {
    // get user ip
    GetIpData(setData?.SetIp);
    console.log()
    //init searchquery from url param
    SearchURL.searchParams.get("q") !== null ? setData?.SetSearchQuery(SearchURL.searchParams.get("q") || "") : null
    setInputQuery(SearchURL.searchParams.get("q") || "")
    // implement get request here

  }, [])
 

  useEffect(() => { console.log(Data) }, [Data])
  return (
    <div style={{width: "100%", backgroundColor: "var(--white-color)", height: "100vh", position: "relative"
    }}>
      <div style={{ height: "20vh", display: "flex" }}>
        <Logo style={{ width: "20vh" }} />
        <div style={{ marginLeft: "5%" }}>
          <h1 >Search V1.01</h1><br />
          <div style={{display:"flex", gap:5}}>
          <input style={{flex:"1 1 70%"}} value={InputQuery} onKeyDown={e => SearchEnter(e, InputQuery)} onChange={e => { setInputQuery(e.target.value) }}  type={"text"}></input>
          <button style={{flex:"1 1 30%"}} onClick={e=>SearchClick(InputQuery)} >搜尋</button>
          </div>
          </div>
        <a style={{ marginRight: "5%" }} href='assets'>go to assets</a></div>
      <div style={{
        paddingLeft: "5%",
        width: "100%", minWidth: "200px", height: "70vh", minHeight: "200px"
      }}>
        <h2>為您找到相似的‘{Data?.SearchQuery || ""}’有</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingBottom: "20vh", paddingRight: "2vh", overflow:"overlay" }}>
          {/* map response data here */}
          <Board FoodPandaPerData={FoodPandaPerData1} UberEatPerData={UberEatPerData1} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData2} UberEatPerData={UberEatPerData2} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData3} UberEatPerData={UberEatPerData3} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData3} UberEatPerData={UberEatPerData3} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData2} UberEatPerData={UberEatPerData2} />
        </div>

      </div>

      <div style={{ position: "fixed", width: "100%", height: "10vh", display: "flex", }}><Footer style={{ marginBottom: "0" }} IpData={Data?.Ip} /></div>
    </div>
  )
}


