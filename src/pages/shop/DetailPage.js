import React, { useEffect, useRef, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../homepage/Product';
import './DetailPage.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/NavBar';

const DetailPage = (props) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState({});
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { productId } = useParams();
  const quantityRef = useRef();



  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = (event) => {
    // add logic to add product to cart here
    event.preventDefault();
    dispatch(cartActions.add({...product, qty: Number(quantityRef.current.value)}));
    quantityRef.current.value = '';
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      const data = await response.json();
      var selectedProduct = data.filter(value=> value._id.$oid === productId)[0]
      setProduct(selectedProduct);
      setRelatedProducts(product === {} ? [] : data.filter(value => value.category === selectedProduct.category && value._id.$oid !== selectedProduct._id.$oid));
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    setImages(product === {} ? [] : [product.img1,product.img2,product.img3,product.img4]);
    setSelectedImage(product.img1);
    
  }, [product]);

  return (
    <>
    <NavBar/>
    <div className="product-detail-container">
      <div className="product-images">
        <div className="thumbnail-images">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt={product.title}
              className={selectedImage === image ? 'selected' : ''}
              onClick={() => handleImageClick(image)}
            />
          ))}

        </div>
        <div className="main-image">
          <img src={selectedImage} alt={product.title} />
        </div>
        
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${Number(product.price).toLocaleString("vi-VN")}</p>
        <p className="product-description">{product.short_desc}</p>
        <form>
        <input
              placeholder="Quantity"            
              type="number"
              name="quantity"
              ref = {quantityRef}
            />
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </form>
        
      </div>
      
    </div>
    <div className="product-description-container">
        <h1 className="product-title">PRODUCT DESCRIPTION</h1>
        <p className="product-description">{product.long_desc}</p>
    </div>
    <div className="product-related-container">
      <h1 className="product-title">RELATED PRODUCT</h1>

      <Row xs={1} sm={2} md={4} className="g-4">
        {relatedProducts.map((product) => (
          <Product key={product.id} product={product}  className="no-border"/>
        ))}
      </Row>
    </div>
    
    </>
  );
};

export default DetailPage;
