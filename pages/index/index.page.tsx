import React,{useState,useEffect} from 'react'
import { Logo, Footer } from '../../assets/assets'
import {GetIpData} from '../../assets/othersFunction'

export { Page }

function Page() {
  const [IpData,setIpData] = useState<any>('');
  useEffect(()=>{
    // get ip address object
    GetIpData(setIpData);
},[])
  return (
    <div style={{ overflow: "auto", width: "100%", backgroundColor: "var(--white-color)", height: "100vh", position: "relative" }}>
      <div style={{ height: "20vh", display: "flex" }}><h1 style={{ marginLeft: "5%" }}>Home V1.01</h1>
        <a style={{ marginRight: "5%" }} href='assets'>go to assets</a></div>
      <div style={{ width: "23%", minWidth: "200px", display: "flex", height: "30vh", minHeight: "200px" }}>
        <Logo />
      </div>
      <div style={{ padding: "30px 0", height: "10vh", bottom: "85px", display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center" }}><input style={{ marginRight: "0" }} type={"text"}></input>
        <button style={{ marginRight: "auto" }}>搜尋</button></div>
      <div style={{ height: "40vh", display: "flex", }}><Footer style={{ marginBottom: "0" }} IpData={IpData}/></div>
    </div>
  )
}


