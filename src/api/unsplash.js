import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID c39b941c6e214aea9953788ca630b6395d2ea0b3621dd9dbb9315aa853f4cf85'
    }
});