import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TbTruckDelivery  } from 'react-icons/tb';
import styled from 'styled-components';


const Services =()=>{
    return(
        <>
        <Wrapper>
            <div className='container' >
                <div className='grid grid-three-column'>
                    <div className='services-1'>
                        <div>
                            <TbTruckDelivery className='icon'/>
                            <h3>free delevery</h3>
                        </div>

                    </div>

                    <div className='services-2'>
                        <div className='services-colum-2'>
                            <div>
                                <MdSecurity className='icon'/>
                                <h3>money-back</h3>
                            </div>
                        </div>

                        <div className='services-colum-2'>
                            <div>
                                <GiReceiveMoney className='icon'/>
                                <h3>non-contact shipping</h3>
                            </div>

                        </div>

                    </div>

                    <div className='services-3'>
                        <div>
                            <RiSecurePaymentLine className='icon'/>
                            < h3>super secure Payment System</h3>

                        </div>

                    </div>

                </div>

            </div>








        </Wrapper>
        </>
    );
};

const Wrapper=styled.section`
@import url(link: https://www.fontspace.com/creamy-sugar-font-f80725);
padding: 9rem 0;


.grid{
    gap:4.8rem;
}
.services-1,
.services-2 ,
.services-3 {
    width:auto;
    height:30rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content: center;
    // background: ${({theme})=>theme.colors.bg};
    background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
    text-align:center;
    border-radius:2rem;
    box-shadow:rgba(0,0,0,0.6) 0px 5px 15px 0px;
}

.services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
    //   background: ${({ theme }) => theme.colors.bg};
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow:rgba(10,50,60,0.6) 0px 5px 15px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        // background:-webkit-linear-gradient(-45deg,  #a9e4f7 0%,#0fb4e7 100%);
      }
    }
  }

  h3{
    margin-top:1.4rem;
    font-size:2.2rem;
    letter-spacing: 0.2rem;                                                     
    word-spacing: 0.3rem;
    text-shadow: 0 0.3rem 0.5rem rgba(0 , 0, 0, .5);  
    font-weight: 450;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   
    
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;
    
    
  




`;

export default Services;