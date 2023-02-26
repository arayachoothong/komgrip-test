import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_API;

const apiClient = axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    validateStatus: () => true,
});

apiClient.interceptors.request.use(
    (config) => {

        return config
    },
    async (error) => {
        return Promise.reject(error)
    },
)

apiClient.interceptors.response.use(
    (response) => {

        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default apiClient;