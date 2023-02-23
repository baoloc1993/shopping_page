import React from "react";
import { Link } from "react-router-dom";
import './Collection.css';

const CollectionItem = ({ product }) => {
  return (
    <div className="product-container">
      <div className="card h-100">
        <Link to={`/shop`}>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.title}
          />
        </Link>
      </div>
    </div>
  );
};

export default CollectionItem;
