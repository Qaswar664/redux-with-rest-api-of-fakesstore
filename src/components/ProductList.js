import React, { useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

function ProductList() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    console.log("Products :", products);
    return (
      <div className="ui grid container">
        <Product/>
      </div>
    );}

export default ProductList