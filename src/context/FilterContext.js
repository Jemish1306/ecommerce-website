import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './productcontext';
import reducer from'../Reducer/filterReducer';





const FilterContext= createContext();

const initialState={
    filter_products:[],
    all_product:[],
    grid_view:false,
    sorting_value:"lowest",
}
 export   const FilterContextProvider=({children})=>{

    const {products}=useProductContext();

    const[state,dispatch]=useReducer(reducer,initialState);
     // to set grid viwe
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    };

    const setlistview=()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    };

    const sorting=(event)=>{
        let userValue=event.target.value;
        dispatch({type:"SET_SORT_VALUE",payload:userValue});

    };

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
    },[products]);

    return(

    <FilterContext.Provider 
    value={{...state,setGridView,setlistview,sorting}}>
        {children}

    </FilterContext.Provider>

);
    
};

 export const useFilterContext=()=>{
    return useContext(FilterContext);
 }