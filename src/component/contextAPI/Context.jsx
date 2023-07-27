import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const productContext = createContext();

const Context = ({ children }) => {
  const [favProList, setFavProductList] = useState([]);
  const [cartProduct, setCartProducts] = useState([]);
  const [token,setToken] = useState('')

  const getTokenFromLocalStorage = () => {
    setToken(localStorage.getItem('token'))
    return localStorage.getItem('token');
  };

  const getFav = async () => {
    try {
      const token = getTokenFromLocalStorage();
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:5000/api/addfav', { headers });
        setFavProductList(response.data);
      }
    } catch (error) {
      console.log('No auth found');
    }
  };

  const getcart = async () => {
    try {
      const token = getTokenFromLocalStorage();
      if (token) {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get('http://localhost:5000/api/addcart', { headers });
        setCartProducts(response.data);
      }
    } catch (error) {
      console.log('No auth found');
    }
  };


    useEffect(() => {
      getTokenFromLocalStorage()
      if(token){
        getFav()
      getcart();
      }
    }, [token]);


  return (
    <productContext.Provider
      value={{
        favProList,
        setFavProductList,
        cartProduct,
        setCartProducts,
        token,
        setToken,
        getcart
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default Context;
