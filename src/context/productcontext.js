import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext,useContext} from "react";
import axios from "axios";
import  reducer  from '../Reducer/productreducer';




const AppContext = createContext();

const API ="https://api.pujakaitem.com/api/products";

const initialState ={
    isLoding:false,
    isError:false,
    products :[],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct:{}
};

const AppProvider = ({ children }) => {

    const [state,dispatch]=useReducer(reducer,initialState);
     const getProducts = async (url)=>{

        dispatch({type:"SET_LODDING"});
        try {                                          // try and catch
            const anyn= await axios.get(url);                      // get
            const products =await anyn.data;
        dispatch({type:"SET_API_DATA",payload:products});
      
        } catch (error) { 
            dispatch({type:"API_EROOR"});
            
        }
        
      
     };
     
     // 2nd api call for single product

     const  getSingleProduct =async (url)=>{
      dispatch({type: "SET_SINGLE_LOADING"});
      try {
        const anyn= await axios.get(url);
        console.log("SingleProduct",anyn);
        const  SingleProduct =await anyn.data;
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
      } catch (error) {
        dispatch({type: "SET_SINGLE_PRODUCT"});
        
      }
     };

     

    useEffect(()=>{
         getProducts(API);                             //fech
 
    },[]);






  return (
    <AppContext.Provider value={{ ...state , getSingleProduct}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };