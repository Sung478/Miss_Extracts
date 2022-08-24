import axios from 'axios'

const server = "https://miss-extract-backend.vercel.app"


const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: server
    })

export default axiosInstance
