import React from 'react'
import { Counter } from './Counter'
import { Logo, Footer } from '../../assets/assets'
export { Page }

function Page() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <h1>Home V1.01</h1>
      <a style={{ position: "absolute", right: "20%", top: "2%" }} href='assets'>go to assets</a>
      <div style={{ width: "23vw", minWidth: "200px", margin: "auto", maxHeight: "50vh", minHeight: "200px" }}>
        <Logo />
      </div>
      <div style={{ position: "relative", bottom: "85px", margin: "10px 0 10px 10%", display: "flex", justifyContent: "center" }}><input type={"text"}></input>
        <button>搜尋</button></div>

      <div style={{ position: "absolute", width: "100vw", bottom: 0 }}><Footer /></div>

    </div>
  )
}


