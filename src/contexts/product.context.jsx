import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

// import PRODUCTS from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // adding the products data to the firebase data to be fire once only 
  //useEffect(()=>{
  //   addCollectionAndDocuments('categories', PRODUCTS );
  // }, [])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};