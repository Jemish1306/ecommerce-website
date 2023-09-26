import React, { useReducer, useState } from "react";
import styled from "styled-components";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Errorpage from "./Errorpage";
import FeatureProduct from "./components/featureproduct";
import axios from "axios";
import { Button } from "./styles/Button";
import { useEffect } from "react";

const Home = () => {
  const data = {
    name: "apple ",
  };

  

  return (
    <>
      <HeroSection myData={data} />
     

      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
