import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://dev.kiidad.com/api/'
});

// axio token
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});


// (function() {
//     let token = localStorage.getItem('token')
//     if (token) {
//         instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {
//         instance.defaults.headers.common['Authorization'] = null;
//     }
// })();

export default instance;