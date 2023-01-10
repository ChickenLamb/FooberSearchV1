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
const UberEatPerData = {
  food_name: "foodname02",
  shop_name: "shopname02",
  deliver_fee: 59,
  deliver_time: 35,
  price: 110,
  url: "https://www.ubereats.com/tw-en/store/%E5%AF%A7%E5%A4%8F%E5%A4%9C%E5%B8%82-%E5%AF%A7%E5%A4%8F%E9%9A%A8%E7%B7%A3%E7%B4%A0%E9%A3%9F/-rt8e3bNUeOkQoFI23lsQg?diningMode=DELIVERY",
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, paddingBottom: "12vh", paddingRight: "2vh" }}>
          {/* map response data here */}
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='UberEat' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
          <Board1 style={{ flex: "1 1 auto" }} render='FoodPanda' FoodPandaPerData={FoodPandaPerData} UberEatPerData={UberEatPerData} />
        </div>

      </div>

      <div style={{ position: "fixed", width: "100%", height: "10vh", display: "flex", }}><Footer style={{ marginBottom: "0" }} IpData={Data?.Ip} /></div>
    </div>
  )
}


