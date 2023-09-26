import React from 'react'
import GridViwe from './GridViwe';
import ListView from './ListView';
import { useFilterContext } from '../context/FilterContext';



const ProductList = () => {

    const {filter_products, grid_view}=useFilterContext();

    if (grid_view===true) {
        return<GridViwe products={filter_products}/>;        
    }
    console.log('filter_products', filter_products);
    
    
    if (grid_view===false) {
        return<ListView products={filter_products} />
        
    }
  
  
}

export default ProductList;