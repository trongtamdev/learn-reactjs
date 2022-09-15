import axios from 'axios';

const axiosClient =axios.create({
    baseURL:'',
    headers:{
        'Content-Type':'applycation/json'
    }
});