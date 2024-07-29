import axios from 'axios'
import md5 from 'md5'

const baseURL = 'http://gateway.marvel.com/v1/public';

const publicKey = '58474f4fd23c4cdc9be0542140608cc7';
const privateKey = '1fe890ec6862d8fcd9bf0a570859f3e01013bcb1';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL,
    params: {
        ts,
        apikey: publicKey,
        hash,
        limit: 40
    },
});

export default api;