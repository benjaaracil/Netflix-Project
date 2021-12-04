import axios from 'axios';

export default axios.create({
    proxyHeaders: false,
    credentials: false
});