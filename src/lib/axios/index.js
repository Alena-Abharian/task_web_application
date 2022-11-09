import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export const token = {
    set(accessToken) {
        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export default instance;
