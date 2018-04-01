import axios from "axios"
import config from "../config.json"

export default axios.create({
    baseURL: config.coinmarketcap_api_url
})