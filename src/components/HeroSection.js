import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import hero from "../images/hero.jpg";
import { GlobalStyle } from "../GlobalStyle";
import gloden from "../images/Golden_Marble_Text_Effect.jpg"

const HeroSection = ({myData}) => {                     // props .and distracahr

    const {name}=myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">welcome shop</p>
            <h1>{name}</h1>
            <p>
              WebFind & Download Free Graphic Resources for Header. 151,000+
              Vectors, Stock Photos & PSD files. Free for commercial use High
              Quality Images You can find & download the most popular Header
              Vectors on Freepik.
            </p>
            <NavLink to="/">
              <Button>home</Button>
            </NavLink>
          </div>
          {/**home page img */}

          <div className="hero-section-image">
            <figure>
                {/* <img src={hero} alt="djfjd" className="img-style" /> */}

                <img src={gloden} alt="hero-section-photos" className="img-style" />
              
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper= styled.section`
  padding: 12rem 0;

  img {
    min-width:10rem;
   
   height:10rem;
  }

  .hero-section-data{
    p{
        margin:2rem 0rem;
    }
    h1{
        text-transform:capitalize;
        font-weight:bold;
        color:brown;
    }
    .intro-data{
        margin-bottom:0;
                       
    }
  }
  .hero-section-image {
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-item:center;
    
  }
  figure{
    position:relative;

    &::after{
        content:"";
        width:60%;
        height:80%;
        // background-color:rgba(81,56,238,0.4);
        position:absolute;
        left:50%;
        top:-5rem;
        z-index:-1;
    }
  }
@media (max-width:${({theme})=>theme.media.mobile}){
    .grid{ 
        gap:10rem;                         
    }
}
figure:after{
    content:"";
    width:50%;
    height:100%;
    left:0;
    top:10%;
    // background-color: rgba(81, 56, 238, 0.4);
}






  .img-style {
    width: 100%;
    height: auto;
  }
 
`;

export default HeroSection;
