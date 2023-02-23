import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      setProducts(response.data.slice(0, 8));
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h4 className="text-left mb-3 sub-title">MADE THE HARD WAY</h4>
      <h2 className="text-left mb-3 title">TOP TRENDING PRODUCTS</h2>
      <Row xs={1} sm={2} md={4} className="g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
