import axios from 'axios'

const API_URL = (import.meta.env.VUE_APP_ENV == 'production') ?
    import.meta.env.VUE_APP_API_URL :
    'http://localhost:8000'

export default axios.create({
    baseURL: API_URL
})