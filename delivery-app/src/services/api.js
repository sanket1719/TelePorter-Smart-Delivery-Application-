import axios from 'axios';

const API = axios.create({
    baseURL:'', //backend url
    headers:{ 'Content-Type':'application/json'}
});

//connect with backend apis
export const fetchDeliveries = async() =>{
    const response = await API.get("/deliveries");
    return response.data;
}

export default API;