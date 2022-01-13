import axios from "axios"
import { api_url } from "../../shared/globals"

const API = {
    getItems: () => axios.get(`${api_url}/items`).then((res) => res.data)
}

export default API
