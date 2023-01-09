import React,{useState,useEffect, useContext} from 'react'
import { Logo, Footer } from '../../assets/assets'
import {type GlobalDatadef, type GlobalDatafunc, GlobalData, SetGlobalData } from '../../assets/DataContext'
import {GetIpData} from '../../assets/othersFunction'
import { navigate } from "vite-plugin-ssr/client/router";
export { Page }

function Page() {
  const Data = useContext<GlobalDatadef|null>(GlobalData)
  const setData = useContext<GlobalDatafunc|null>(SetGlobalData)
  // let SearchURL = new URL(window.location.href);
  
  useEffect(()=>{
    // get user ip
    GetIpData(setData?.SetIp);
    console.log(window.location.href)
    // setData?.SetSearchQuery(SearchURL.searchParams.get("q")||"")
    
},[])

useEffect(()=>{console.log(Data)},[Data])
  return (
    <div style={{ overflow: "auto", width: "100%", backgroundColor: "var(--white-color)", height: "100vh", position: "relative" }}>
      <div style={{ height: "20vh", display: "flex" }}><h1 style={{ marginLeft: "5%" }}>Search V1.01</h1>
        <a style={{ marginRight: "5%" }} href='assets'>go to assets</a></div>
      <div style={{ width: "23%", minWidth: "200px", display: "flex", height: "40vh", minHeight: "200px" }}>
       
      </div>
      
      <div style={{ height: "40vh", display: "flex", }}><Footer style={{ marginBottom: "0" }} IpData={Data?.Ip}/></div>
    </div>
  )
}


