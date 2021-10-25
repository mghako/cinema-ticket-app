import {ref} from 'vue'
import axios from '../axios'

export default function useShows() {

    const shows = ref([])
    const show = ref([])

    const getShows = async () => {
        let response = await axios.get('/api/v1/movies')
        shows.value = response.data.data
    }

    const getShow = async (id) => {
        let response = await axios.get('/api/v1/movies/'+ id)
        show.value = response.data.data
    }

    return {
        show,
        shows,
        getShow,
        getShows
    }
}