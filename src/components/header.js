import React from "react"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <Nav>
      <Title>Serempre App</Title>
      <Bars />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
background: #37678f;
height: 4rem;
display:flex;
justify-content: space-between;
padding: 1rem;
z-index: 5;
position:relative;
`
const Bars = styled(FaBars)`
  display:none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 75%);
    font-size: 1.5rem;
    cursor:pointer;
  }
`

const Title = styled.h1`
  color: #fff;
  padding: 0 2rem;
`