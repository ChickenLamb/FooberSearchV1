import React,{useState,useEffect, useContext} from 'react'
import { Logo, Footer } from '../../assets/assets'
import {type GlobalDatadef, type GlobalDatafunc, GlobalData, SetGlobalData } from '../../assets/DataContext'
import {GetIpData} from '../../assets/othersFunction'
import { navigate } from "vite-plugin-ssr/client/router";
export { Page }

function Page() {
  const Data = useContext<GlobalDatadef|null>(GlobalData)
  const setData = useContext<GlobalDatafunc|null>(SetGlobalData)
  if (typeof window !== 'undefined') {
    //here `window` is available
    var SearchURL = new URL(window.location.href);
  }
  
  useEffect(()=>{
    // get user ip
    GetIpData(setData?.SetIp);
    setData?.SetSearchQuery(SearchURL.searchParams.get("q")||"")
    
},[])

useEffect(()=>{console.log(Data)},[Data])
  return (
    <div style={{ overflow: "auto", width: "100%", backgroundColor: "var(--white-color)", height: "100vh", position: "relative" }}>
      <div style={{ height: "20vh", display: "flex" }}><h1 style={{ marginLeft: "5%" }}>Search V1.01</h1>
        <a style={{ marginRight: "5%" }} href='assets'>go to assets</a></div>
      <div style={{ width: "100%", minWidth: "200px", height: "40vh", minHeight: "200px" }}>
      <h2 style={{paddingLeft:"5%" }}>為您找到相似的‘{Data?.SearchQuery||""}’有</h2>
      </div>
      
      <div style={{ height: "40vh", display: "flex", }}><Footer style={{ marginBottom: "0" }} IpData={Data?.Ip}/></div>
    </div>
  )
}


