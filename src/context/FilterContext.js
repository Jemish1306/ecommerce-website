import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './productcontext';
import reducer from'../Reducer/filterReducer';





const FilterContext= createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"",
        company:"",
        color:"",
    }
};

 export   const FilterContextProvider=({children})=>{

    const {products}=useProductContext();

    const[state,dispatch]=useReducer(reducer,initialState);
     // to set grid viwe
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"});
    };

    const setlistview=()=>{
        return dispatch({type:"SET_LIST_VIEW"});
    };
    
   // short the products
    const sorting=(event)=>{
        let userValue=event.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:userValue});

    };

    useEffect(() => {
        dispatch({type:"FILTER_PRODUTS" });
    dispatch({type:"SORTING_PRODUCTS" });
    }, [products,state.sorting_value , state.filters ]);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
    },[products]);

    // update the filter values
    const updateFiltervalue=(event)=>{
        let name =event.target.name;
        let value= event.target.value;

        return  dispatch ({type:"UPDATE_FILTERS_VALUE",payload :{name ,value}});
 
    };

    return(

    <FilterContext.Provider 
    value={{...state,setGridView,setlistview,sorting,updateFiltervalue}}>
        {children}

    </FilterContext.Provider>

);
    
};

 export const useFilterContext=()=>{
    return useContext(FilterContext);
 }