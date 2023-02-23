import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartTable.module.css';
import { cartActions } from '../../store/cart';
import { TrashFill } from 'react-bootstrap-icons';


const CartTable = (props) => {

    const dispatch = useDispatch();
    
    const products = useSelector(state => state.cart.listCarts)
    function removeProduct(product){
        dispatch(cartActions.delete(product));
    }
    function handleChangeQty(product,event){
        dispatch(cartActions.update({...product,qty : event.target.value}))
    }
  return (
 
    <Table striped bordered hover responsive className={classes.table}>
        <thead>
            <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
            <tr key={product.id}>
                <td><img src={product.img1} alt={product.name} width="50" height="50" /></td>
                <td className={classes['product-name']}>{product.name}</td>
                <td className={classes['product-price']}>{Number(product.price).toLocaleString("vi-VN")} VND</td>
                <td className={classes['product-quantity']}><input placeholder="Quantity" type="number" value={product.qty} name="quantity" onChange={(event)=>handleChangeQty(product,event)}/></td>
                <td className={classes['product-total']}>{Number(product.price*product.qty).toLocaleString("vi-VN")} VND</td>
                <td><TrashFill   onClick={() => removeProduct(product)}/></td>
            </tr>
            ))}
            
        </tbody>
    </Table>
  );
};

export default CartTable;
