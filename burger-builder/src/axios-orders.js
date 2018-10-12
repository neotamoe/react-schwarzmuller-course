import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-2ef88.firebaseio.com/'
});

export default instance;