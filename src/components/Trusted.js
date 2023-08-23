import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <>
      <Wrapper className="brand-section">
        <div className="container">
          <h3>trusted by 1000+ Companies</h3>
          <div className="brand-section-slider">
            <div className="slide">
              <img
                src="https://cdn.icon-icons.com/icons2/3955/PNG/512/and_statistics_infographic_stats_analytics_hexagon_business_finance_icon_251237.png"
                alt="trusted brand"
              />
              </div>

              <div className="slide">
                <img
                  src="https://cdn.icon-icons.com/icons2/3987/PNG/512/office_headphones_working_work_business_icon_252528.png"
                  alt="trusted brand"
                />
              </div>

              <div className="slide">
                <img
                  src="https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-twitter-4555883_121368.png"
                  alt="trusted brand"
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.icon-icons.com/icons2/3987/PNG/512/office_working_work_pencils_business_icon_252524.png"
                  alt="trusted brand"
                />
              </div>
              <div className="slide">
                <img
                  src="https://cdn.icon-icons.com/icons2/3914/PNG/512/prime_logo_icon_248780.png"
                  alt="trusted brand"
                />
              </div>
          </div>

          
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  // background-color: ${({ theme }) => theme.colors.bg};
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);

  .brand-section {
    padding: 12rem 0 0 0;
    
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    margin-top:1.4rem;
    
    letter-spacing: 0.2rem;                                                     
    word-spacing: 0.3rem;
    text-shadow: 0 0.3rem 0.5rem rgba(0 , 0, 0, .5);  
    font-weight: 450;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

 

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    box-shadow:rgba(10,50,60,0.6) 0px 0px 10px .2rem;
    weight:100%;
    border-radius:2rem;
    //background:-webkit-linear-gradient(-45deg,  #a9e4f7 0%,#0fb4e7 100%);
    background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      background-color: red; 
      text-align: center;
    }
  }
`;

export default Trusted;
