import React from 'react'
import logo from '/assets/logo.svg'

export function Logo() {
    return (
      <div
        style={{
          marginTop: 20,
          marginBottom: 10
        }}
      >
        <a href="/">
          <img src={logo} height={64} width={64} alt="logo" />
        </a>
      </div>
    )
  }
  export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}
export function Assets(){
    return(<>
    <Content>ddd</Content>
    </>
        
    )
}