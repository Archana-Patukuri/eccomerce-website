import React from 'react';
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const addTobasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    };
    return (
        <div className="product">
            <img src={image} alt=""/>
            <div className="product__info">
                <p>{title}</p>
                <Rating name="read-only" value={rating} readOnly/>
                <p><small>₹</small><strong>{price}</strong></p>
            </div>
            <button onClick={addTobasket}>Add to Cart</button>
                
        </div>
    )
}

export default Product;
