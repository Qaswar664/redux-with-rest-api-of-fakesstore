import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
            <div className="ui link cards mt-5">
                <div className="card " style={{ width: '21rem', height: "58vh" }}>
            <Link className='text-decoration-none' to={`/product/${id}`}>
                  <div className="image mx-auto m-3">
                    <img src={image} alt={title} style={{ width: '14rem', height: "21vh" }} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                   
                  </div>
                  <div className='mb-2'>
                    <div className="btn btn-success">$ {price}</div>
                    <div className="btn btn-primary ms-2">{category}</div>
                    </div>
                    <div className='mb-2'>
                    {/* <div className="btn btn-success">$ {price}</div> */}
                    </div>
                
            </Link>
            <div>
            <span className='mt-5 w-100'>
            <Button className="btn btn-danger mt-5 w-75">Add to Card</Button>
            </span>
            </div>

              </div>
                </div>
          </div>
        );
    });
    
    return <>{renderList}</>;
}

export default Product