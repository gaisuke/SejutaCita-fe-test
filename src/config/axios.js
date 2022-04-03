import axios from "axios";

const apiConnect = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default apiConnect;