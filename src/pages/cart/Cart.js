import React, { useRef } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Cart.module.css';
import { cartActions } from '../../store/cart';
import { TrashFill } from 'react-bootstrap-icons';
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import CartTable from './CartTable';
import CartTotal from './CartTotal';


const Cart = (props) => {
    
const products = useSelector(state => state.cart.listCarts)

  return (
    <div >
        <NavBar/>
        <div className={classes.banner}>
            <h1 >CART</h1>
        </div>
        <table className={classes.table}>
            <tr>
                <td><CartTable/></td>
                <td><CartTotal/></td>
            </tr>
        </table>
        
        <div className={classes.actions}>
            <Link to ={'/shop'}>
                <Button className='btn-secondary shopping'> Continue Shopping</Button>
            </Link>
                
                <Link to={'/checkout'}>
                    <Button className='btn-secondary checkout'>Proceed to checkout </Button>
                </Link>
        </div>
    </div>
  );
};

export default Cart;
