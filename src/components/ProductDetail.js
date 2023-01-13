import React, { useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductDetail = () => {
  const {productId}=useParams();
  console.log('productId',productId);

  const product = useSelector((state)=>state.product)
  const { image, title, price, category, description } = product;

  console.log('selected product',product);

  const dispatch=useDispatch();

  const fetchProductDetail=async()=>{
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
  dispatch(selectedProduct(response.data));
  }

useEffect(()=>{
  if(productId && productId!=='')

  fetchProductDetail();
  return()=>{
    dispatch(removeSelectedProduct())
  }
},[productId])

  return (
    
      
    <div className='container'>
    <div className='row'>
      <div className='col-md-6 mx-auto m-3'>


        <Card>
          <Card.Img className='mx-auto' variant="top" src={image} style={{ width: '14rem' }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Title className='btn btn-primary me-1'>
              <span className='font-weight-bold text-dark me-1'>Price :: </span>
              ${price}</Card.Title>

            <Card.Title className='btn btn-primary ms-1'>
            <span className='font-weight-bold text-dark me-1'>Category :: </span>

              {category}
              </Card.Title>
          </Card.Body>
        </Card>
      </div>
      

    </div>

  </div>
);
  
}

export default ProductDetail