import axios from 'axios'

const server = "http://localhost:3000"

const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: server
    })

export default axiosInstance