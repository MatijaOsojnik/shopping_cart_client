import axios from "axios"
import { api_url } from "../../shared/globals"

const API = {
    getItems: () => axios.get(`${api_url}/items`).then((res) => res.data),
    addItemToCart: (itemId, token) => axios.post(`${api_url}/carts/add_to_cart`, { "item_id": `${itemId}`, "quantity": 1 }, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => res.data),
    removeItemFromCart: (itemId, token) => axios.delete(`${api_url}/carts/remove_from_cart`, { params: { "item_id": `${itemId}` }, headers: { "Authorization": `Bearer ${token}` } }).then((res) => res.data),
}

export default API
