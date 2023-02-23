import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CheckoutTotal.module.css';
import { cartActions } from '../../store/cart';


const CheckoutTotal = (props) => {

    
  const products = useSelector(state => state.cart.listCarts);
  const sum = products.reduce((accumulator, product) => {
    return accumulator + product.qty*product.price;
  }, 0);
  return (
 
    <div className={classes.totalContainer}>
        <h3>YOUR ORDER</h3>
        {products.map(value =>{
          return (<div className={classes.subtotal}>
            <div className={classes.text}>{value.name}</div>
            <div className={classes.number}>{Number(value.price).toLocaleString("vi-VN")} VND x {value.qty}</div>
        </div>)
        })}
        
        <div className={classes.total}>
            <div className={classes.text}>TOTAL</div>
            <div className={classes.number}>{Number(sum).toLocaleString("vi-VN")} VND</div>
        </div>
    </div>
  );
};

export default CheckoutTotal;
