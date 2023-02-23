import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productImage1 from '../../img/product_1.png';
import productImage2 from '../../img/product_2.png';
import productImage3 from '../../img/product_3.png';
import productImage4 from '../../img/product_4.png';
import productImage5 from '../../img/product_5.png';
import CollectionItem from './CollectionItem';
import './CollectionList.css';


const products = [
  { id: 1, name: 'Product 1', image: productImage1 },
  { id: 1, name: 'Product 2', image: productImage2 },
  { id: 1, name: 'Product 3', image: productImage3 },
  { id: 1, name: 'Product 4', image: productImage4 },
  { id: 1, name: 'Product 5', image: productImage5 }
];

const CollectionList = () => {
  return (
    <Container className="my-5">
      <h4 className="text-center mb-3 sub-title">CAREFULLY CREATED COLLECTIONS</h4>
      <h2 className="text-center mb-3 title">BROWSE OUR CATEGORIES</h2>
      <Row className="g-4">
        {products.slice(0, 2).map(product => (
          <Col key={product.id}>
            <CollectionItem product={product} />
          </Col>
        ))}
      </Row>
      <Row className="g-4">
        {products.slice(2, 5).map(product => (
          <Col key={product.id}>
            <CollectionItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionList;
