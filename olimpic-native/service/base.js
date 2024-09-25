import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-apisports-key": process.env.API_SECRET
    }
});

export default AxiosInstance;