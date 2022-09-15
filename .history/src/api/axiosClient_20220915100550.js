import axios from 'axios';

const axiosClient =axios.create({
    baseURL:'',
    headers:{
        'Content-Type':'application/json',
    },
});

//Interce

export default axiosClient