import React from 'react'
import "./CheckoutProduct.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,rating,price,image}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <Rating name="read-only" value={rating} readOnly/>
                <p><small>₹</small><strong>{price}</strong></p>
                <p className="checkoutProduct__delivery">FREE Delivery by Amazon</p>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
