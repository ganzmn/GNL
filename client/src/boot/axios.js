import Vue from 'vue'
import axios from 'axios'

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$axios = axios
