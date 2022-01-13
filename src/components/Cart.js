import React, { useState, useEffect } from "react"
import CART_API from "../api/controllers/carts_controller";
import ITEM_API from "../api/controllers/items_controller"
import {token} from "../shared/globals"

const Cart = (props) => {
    const [cart, setCart] = useState(null);
    
    const removeFromCart = (itemId) => {
        ITEM_API.removeItemFromCart(itemId, token)
    }
    
    useEffect(() => {
        CART_API.getCart(token).then(res => setCart(res))
    }, [cart])


    if (!cart) return false

    return (
            <div className="mx-5">
                <h1 className="text-2xl text-center mb-4">
                    Your cart
                </h1>
                {cart.cart_items.map((cart_item) =>
                (
                    <div key={cart_item.id} className="grid grid-cols-4 col-span-1 content-center">
                        <div className="ml-2">
                            {cart_item.item.name}
                        </div>
                        <div className="ml-2">
                            {cart_item.item.description}
                        </div>
                        <div className="ml-2">
                            Quantity: {cart_item.quantity}
                        </div>
                        <button onClick={() => removeFromCart(cart_item.item.id)}>
                            Remove From Cart
                        </button>
                    </div>
                )
                )}
                <div className="mt-4 text-center">
                    Price: {cart.total_price} $
                </div>
            </div>
    );
}

export default Cart;
