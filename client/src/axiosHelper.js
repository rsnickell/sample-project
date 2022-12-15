const axios = require('axios');

require('dotenv').config()
const PORT = process.env.PORT || 7777;
const HOST = process.env.HOST || 'http://localhost';
const baseURL = `${HOST}:${PORT}`

function getAxiosInstance() {
  return axios.create({
    baseURL,
    headers: { 'Referrer' : 'loan-api-client' }
  });
}

module.exports = getAxiosInstance