import React from 'react'
import logo from '/assets/logo.svg'
import styled from 'styled-components'
const MyStyled: typeof styled = typeof styled === 'function' ? styled : styled.default;

// export default MyStyled;

export function Logo() {
    return (
      <div
        style={{
          margin:10
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
        padding:20,
        borderLeft: '2px solid #eee',
        minHeight: 'fit-content'
      }}
    >
      {children}
    </div>
  )
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
`

// show all assets done
export function Assets(){
    return(<>
    <Content>ddddf</Content>
    <Logo/>
    <Button>This is a Button</Button>
    </>
        
    )
}