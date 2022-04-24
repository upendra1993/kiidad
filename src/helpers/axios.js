import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://dev.kiidad.com/api/'
});

(function() {
    let token = localStorage.getItem('token')
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        instance.defaults.headers.common['Authorization'] = null;
    }
})();

export default instance;