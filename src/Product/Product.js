import React from "react";
import style from './product.module.css';
import { FaShoppingCart, FaStar } from "react-icons/fa";


const Product = (props) => {
    const {name, price, img, seller, stock} = props.product;

    return (
        <div className={style.product}>
            <div className={style.img}>
                <img src={img} alt={name} />
            </div>
            <div className={style.des}>
                <h2>{name}</h2>
                <p>by : <span>{seller}</span></p>
                <div className={style.span}>
                    <h3>${price}</h3>
                    <span>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </span>
                </div>
                <p>Only {stock} left in stock - Order soon</p>
                <button onClick={() => {props.onAddProduct(props.product)}}>
                    <FaShoppingCart />
                    <span> add to cart</span>
                </button>
            </div>
        </div>
    )
}

export default Product;