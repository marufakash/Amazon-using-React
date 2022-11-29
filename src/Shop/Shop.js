import React, { useState } from "react";
import Cart from "../Cart/Cart";
import fakeData from '../fakeData/products.json';
import Product from "../Product/Product";
import style from './shop.module.css';

const Shop = () => {
    const first10 = fakeData.slice(27,72);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        console.log(newCart);
    }

    return (
        <div className={style.shopContainer}>
            <div className={style.productContainer}>
                {products.map((product) => <Product onAddProduct={handleAddProduct} key={product.id} product={product} />)}
            </div>
            <div className={style.cartContainer}>
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop;