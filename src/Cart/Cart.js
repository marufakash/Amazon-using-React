import React from "react";

const Cart = (props) => {
    const {cart} = props;
    let price = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        price = price + product.price;
    }

    // Shippinng charge
    let shipping = 0;
    if(price === 0){
        shipping = 0;
    }else if(price > 100){
        shipping = 12.99;
    }else{
        shipping = 0;
    }

    // Tax count
    let tax = 2.31 * props.cart.length

    // Total price
    let totalPrice = (price  + shipping + tax).toFixed(2);

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Items Ordered: {props.cart.length}</h2>
            <p>Product Price : ${price}</p>
            <p>Shipping Cost : ${shipping}</p>
            <p>Tax + Vat : ${tax}</p>
            <p>Total Price : ${totalPrice}</p>
            <button>Review your order</button>
        </div>
    )
}

export default Cart;