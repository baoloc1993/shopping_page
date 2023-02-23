import React, { useRef } from 'react';
import { Table, Button } from 'react-bootstrap';
import classes from './Checkout.module.css';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import CheckoutTotal from './CheckoutTotal';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';


const Checkout = (props) => {
    
const products = useSelector(state => state.cart.listCarts)

  return (
    <div >
        <NavBar/>
        <div className={classes.banner}>
            <h1 >CHECKOUT</h1>
        </div>
        <table className={classes.table}>
            <tr>
                <td><CheckoutForm/></td>
                <td><CheckoutTotal/></td>
            </tr>
        </table>
    </div>
  );
};

export default Checkout;
