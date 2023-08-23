// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeroSection from './components/HeroSection'
// import { useContext } from 'react';
// import { AppContext } from './context/productcontext';
import { useProductContext } from './context/productcontext';

         

const About = () => {                    //refce

  const {myName} = useProductContext();
  
  const data={
    name:"apple gadgets",
  };
  
  
  
  
  return (
    <>
      {myName}


    <HeroSection myData={data}/>

    </>
  )
};

export default About;