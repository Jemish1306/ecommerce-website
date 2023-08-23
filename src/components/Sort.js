import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {

  const{filter_products,grid_view,setGridview, setlistview,sorting} = useFilterContext();
  return (
   <Wrapper>
    <div className='sort-section'>
         {/* 1st column  */}
      <div className='sorting-list--grid'>
        <button className={grid_view?"active sort-btn" :"sort-btn"}
        onClick={setGridview}>
          <BsFillGridFill className='icon'/>

        </button>
        <button className={!grid_view ? "active sort-btn" :"sort-btn"}
        onClick={setlistview}>
          <BsList className='icon'/>

        </button>

      </div>
      {/* 2nd column  */}
      <div className='product-data'>
        <p>{`${filter_products.length} Product Available`}</p>

      </div>
      {/* 3rd column  */}
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select 
          name="sort"
          id="sort"
          className='sort-selection--style'
          onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>

          </select>

        </form>

      </div>



    </div>

   </Wrapper>
  )
}

export default Sort;

const Wrapper=styled.section`
`;