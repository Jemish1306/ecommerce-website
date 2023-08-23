import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/free-logoa.jpg";
import Nav from "./Nav";
import trolley from "../images/trolley.png";


const Header = () => {
  return <>
      
    <MainHeader>
      
      <NavLink to="/">
      <img src={logo} alt="my logo img" />
      

      </NavLink>
      <Nav>
        
      </Nav>

      
    </MainHeader>

    ;
  </>;
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  backgroung-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  


`;

export default Header;
