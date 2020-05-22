import axios from 'axios';

const instance  = axios.create({
    baseURL : "https://react-8bb21.firebaseio.com"
})

export default instance;