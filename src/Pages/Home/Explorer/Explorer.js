import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';

const Explorer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
    .then(data=> setProducts(data))
  },[])
  return (
    <Container className="mt-5">
      <div>
        <h1 className="text-center fw-bold mb-5">
          <span className="text-info">EXPLORE</span> MORE
        </h1>
      </div>

      <div className="row">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </Container>
  );
};

export default Explorer;