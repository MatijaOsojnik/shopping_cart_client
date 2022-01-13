import React, { useState, useEffect } from "react"
import API from "../api/controllers/items_controller";
import { token } from '../shared/globals'

const Items = (props) => {
    const [items, setItems] = useState([]);

    const addToCart = (itemId) => {
        API.addItemToCart(itemId, token)
    }

    useEffect(() => {
        API.getItems().then(res => setItems(res))
    }, [items])


    return (
        <div className="">
            <div>
                <div className="text-2xl text-center">
                    Items
                </div>
                {items.map((item) =>
                (
                    <div key={item.id} className="grid grid-cols-2 mx-6">
                        <h1 className="text-center mr-4">
                            {item.name}
                        </h1>
                        <button onClick={() => addToCart(item.id)}>
                            Add To Cart
                        </button>
                    </div>

                )
                )}
            </div>


        </div>
    );
}

export default Items;
