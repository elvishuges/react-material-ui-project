
var axios = require('axios');
export const baseURL = 'https://52b7ce85.ngrok.io/'


export const api = axios.create({
  baseURL: baseURL, 
  /* other custom settings */
  headers: {
   'Access-Control-Allow-Origin': '*',
   'Content-Type': 'application/json', 
   //'x-access-token':getToken()

  }
})