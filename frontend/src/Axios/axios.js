import axios from "axios"
const instance = axios.create({
    baseURL:"https://todolistbackend-ncr9.onrender.com/api"
})
export default instance