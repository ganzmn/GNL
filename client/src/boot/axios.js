import Vue from 'vue'
import axios from 'axios'

axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$axios = axios
