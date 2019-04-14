import axios from 'axios';

const api = axios.create({
    baseURL: 'https://varner-backend.herokuapp.com',
});



export default api;