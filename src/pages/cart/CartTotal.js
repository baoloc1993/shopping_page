import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartTotal.module.css';
import { cartActions } from '../../store/cart';


const CartTotal = (props) => {

    
  const products = useSelector(state => state.cart.listCarts);
  const sum = products.reduce((accumulator, product) => {
    return accumulator + product.qty*product.price;
  }, 0);
  return (
 
    <div className={classes.totalContainer}>
        <h3>CART TOTAL</h3>
        <div className={classes.subtotal}>
            <div className={classes.text}>SUBTOTAL</div>
            <div className={classes.number}>{Number(sum).toLocaleString("vi-VN")} VND</div>
        </div>
        <div className={classes.total}>
            <div className={classes.text}>TOTAL</div>
            <div className={classes.number}>{Number(sum).toLocaleString("vi-VN")} VND</div>
        </div>
    </div>
  );
};

export default CartTotal;
