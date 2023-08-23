import React from "react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>ready to shop</h3>
              <h3>talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/">get started</NavLink>
              </Button>
            </div>
          </div>
        </section>

        <footer>
        <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>enter appnext store </h3>
              <p>The US firm described the Memorandum of Understanding with HAL as a “key element” in strengthening defence cooperation between India and the US.</p>
            </div>
            <div className="footer-subscribe">
                <h3>subscribe to impotant update</h3>
                <form action="#">
                    <input type="email" name="email" placeholder="your email" />

                    <input type="submit" value="subscribe"/>
                </form>

            </div>
            <div className="footer-social">
                <h3> Follow Us</h3>
                <div className="footer-social--icons">
                    <div>
                        <FaDiscord className="icon"/>
                    </div>
                    <div>
                        <FaInstagram className="icon" />
                    </div>
                    <div>
                        <a
                        href="https://www.youtube.com/" target="_black">
                        <FaYoutube className="icon"/>
                        </a>
                    </div>

                </div>

            </div>
              <div className="footer-contact">
                <h3>call us</h3>
                <h3>+91 9898803229</h3>
              </div>
        </div>

        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-colum">
                <p>
                    @{new Date().getFullYear()} all Rights Reserved
                </p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS OF USE</p>
                </div>

            </div>

        </div>


        </footer>
      </Wrapper>
    </>
  );
};





const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 0.5rem 10rem;
     background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child{
        justify-self:end;
        align-self:center;
    }
  }

  footer{
     padding:14rem 0 9rem 0;
    //  background-color:${({theme})=>theme.colors.footer_bg};
    background:-webkit-linear-gradient(-40deg, #00b4d8 0%,#03045e 100%);
    
     h3{
        color:${({theme})=>theme.colors.hr};
       
     }
     p{
        color:${({theme})=>theme.colors.white};

     }
     .footer-social--icons{
        display:flex;
        gap:2rem;

        div{
            padding:1rem;
            border-radius:50%;
            border:2px solid ${({theme})=>theme.colors.white};

            .icon{
                color:${({theme})=>theme.colors.white};
                font-size:2.5rem;
                position:relative;
                cursor:pointer;
            }
        }
     }
  }

  .footer-bottom--section{
    padding-top:9rem;

    hr{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:.1px;
    }
  }
  @media (max-width ${({theme})=>theme.media.mobile}){
    .contact-short{
        max-width:80vw;
        margin:4.8rem auto;
        transform:translateY(0%);
        text-align:center;
        

        .grid div:last-child{
            justify-self:center;
        }

    }

    footer{
        padding:9rem 0 9rem 0;
    }

    .footer-bottom--section{
        padding-top:4.8rem;
    }

  }
`;
export default Footer;