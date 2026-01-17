import React from 'react';
import { getUserCart } from '@/actions/server/addToCart';
import Cart from '@/Components/Cart/Cart';


export const revalidate = 0;

export const metadata = {
  title: "Cart | AuraMart",
};

const CartPage = async () => {
    const userEmail = "admin@gmail.com"; 
    const cartItems = await getUserCart(userEmail) || [];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        < Cart
            cartItems={cartItems} 
            userEmail={userEmail} 
            subtotal={subtotal} 
        />
    );
};

export default CartPage;