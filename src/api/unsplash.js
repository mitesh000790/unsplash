import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: { 
        Authorization:
        //add your api key
        'Client-ID your api key'
       }
});

