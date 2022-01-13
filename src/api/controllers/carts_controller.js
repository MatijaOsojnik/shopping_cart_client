import axios from "axios"
import { api_url } from "../../shared/globals"

const API = {
    getCart: (token) =>
        axios.get(`${api_url}/carts`, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => res.data),
}

export default API
