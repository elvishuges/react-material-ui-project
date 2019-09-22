
var axios = require('axios');
//var baseURL = 'http://e6b7abb5.ngrok.io/'
import { getToken, setToken, removeToken } from '../store/auth'
export const baseURL = "https://randomuser.me/api/"


export const api = axios.create({
  baseURL: baseURL, 
  /* other custom settings */
  headers: {
   'Access-Control-Allow-Origin': '*',
   'Content-Type': 'application/json', 
   'x-access-token':getToken()

  }
})