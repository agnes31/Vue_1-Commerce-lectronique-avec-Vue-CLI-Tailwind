import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:8081/api', // doit etre le meme que dans srver.js
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})
