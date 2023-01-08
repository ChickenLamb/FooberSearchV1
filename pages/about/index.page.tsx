import React from 'react'
import { Logo, Footer } from '../../assets/assets'
import './code.css'

export { Page }

function Page() {
  return (
    <>
      <div style={{overflow:"auto",width:"100%",backgroundColor:"red", height:"100vh", position:"relative"}}>
      <div style={{height:"20vh", display:"flex"}}><h1 style={{marginLeft:"5%"}}>Home V1.01</h1>
      <a style={{marginRight:"5%"}} href='assets'>go to assets</a></div>
      <div style={{ width: "23%", minWidth: "200px", display:"flex", height: "30vh", minHeight: "200px" }}>
        <Logo />
      </div>
      <div style={{padding:"30px 0",height:"10vh", bottom: "85px", display:"flex",flexWrap:"wrap",alignContent:"center", justifyContent:"center"}}><input style={{marginRight:"0"}} type={"text"}></input>
        <button style={{marginRight:"auto"}}>搜尋</button></div>
        <div style={{ height:"40vh", display:"flex", }}><Footer /></div>
      </div>
      
      
      {/* <div style={{ position: "relative", height: "100vh" }}>
      <h1>Home V1.01</h1>
      
      <div style={{ width: "23vw", minWidth: "200px", margin: "auto", maxHeight: "50vh", minHeight: "200px" }}>
        <Logo />
      </div>
      <div style={{ position: "relative", bottom: "85px", margin: "10px 0 10px 10%", display: "flex", justifyContent: "center" }}><input type={"text"}></input>
        <button>搜尋</button></div>

      <div style={{ position: "absolute", width: "100vw", bottom: 0 }}><Footer /></div>

    </div> */}
    </>
  )
}
