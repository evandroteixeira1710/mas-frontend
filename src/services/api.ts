import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ?'https://mas-backend-senaii.herokuapp.com'
    :'http://localhost:3333',
});

export default api;

/*
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3334",
   });
   export default api;
*/   