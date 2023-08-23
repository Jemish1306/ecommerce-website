import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Errorpage = () => {
  return (
    <>
    <Wrapper>

      <div className='container'>
        <div>
          <h2>04</h2>
          <h3>UH! OH YOU;TR LATE</h3>
          <p>Bruce turned an airplane into a really cool home with a pretty inside</p>

          <NavLink to="/">
            <button>go back to home</button>
          </NavLink>
          
        </div>

      </div>



    </Wrapper>
    
    
    </>
  )
}

export default Errorpage;


const Wrapper=styled.section`
.container{
  padding:9rem 0;
  text-align:center;
  h2{
    font-size:4.2rem;
  }
  p{
    margin:2rem 0;
  }
}




`;