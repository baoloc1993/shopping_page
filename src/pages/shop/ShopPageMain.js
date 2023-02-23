import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopePageMain.css';

const ShopPageMain = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const categories = [
    {
      name: 'Iphone & Mac',
      subcategories: ['Iphone', 'Ipad', 'Macbook']
    },
    {
      name: 'Wireless',
      subcategories: ['Airpod', 'Watch']
    },
    {
      name: 'Other',
      subcategories: ['Mouse', 'Keyboard', 'Other']
    }
  ];

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  function handleCategoryClick(value){
    setCategory(value);
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 ">
          <h2>Categories</h2>
          <ul className="category-list" >
            <li key='all' className = "list-group-item">  
                <a className={category === 'all' ? 'active' : ''}   
                     onClick={() => handleCategoryClick('all')}>
                  ALL
                </a>
            </li>
            {categories.map((value, index) => (
              <li key={index} className = "list-group-item">  
                <a className={category === value.name ? 'active' : ''}>
                  {value.name}
                </a>
                <ul className='subcategory-list'>
                  {value.subcategories.map((subcategory, index) => (
                    <li key={index} className = "list-group-item">
                      <a 
                        className={category === subcategory ? 'active' : ''}
                        onClick={() => handleCategoryClick(subcategory)}
                      >
                        {subcategory}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          <h2>Products</h2>
            <div className="row ">
              {products.filter(value => value.category === category.toLowerCase() || category ==='all').map((product) => (
                <div key={product._id.$oid} className="col-md-4 product-item">
                  <div className="card mb-4 border-0">
                    <Link to={`/detail/${product._id.$oid}`}>
                        <img
                        className="card-img-top"
                        src={product.img1}
                        alt={product.name}
                        />
                    </Link>
                    <div className="card-body text-center">
                      <h5 className="card-title name">{product.name}</h5>
                      <p className="card-text price">{Number(product.price).toLocaleString("vi-VN")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPageMain;
