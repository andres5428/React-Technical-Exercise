import React from 'react';
import styled from "styled-components";
import { BsListCheck } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { Link } from 'gatsby';

export const Footer = () => {
  return (
    <BottomMenu>
      <HomeLink to={`/`}>
        <ListIcon />
      </HomeLink>
      <MapsLink to={`/maps`}>
        <MapsIcon />
      </MapsLink>
    </BottomMenu>
  )
}

const BottomMenu = styled.footer`
    width: 100%;
    display:flex;
    border: 2px solid #37678f;
    justify-content: space-around;
    text-align:center;
    background-color: #37678f;
    background-image: linear-gradient(#fff, #fff);
    background-size: 2px 100%;
    background-repeat: no-repeat;
    background-position: center center;
    position: fixed;
    bottom: 0;
    vertical-align: bottom
    z-index: 5;
    padding:0.2rem;
`

const ListIcon = styled(BsListCheck)`
  font-size: 1.7rem;
  color:#fff;
  
`

const MapsIcon = styled(FiMap)`
  font-size: 1.7rem;
  color:#fff;
`

const HomeLink = styled(Link)`
  width:50%;
`
const MapsLink = styled(Link)`
  width:50%;
`