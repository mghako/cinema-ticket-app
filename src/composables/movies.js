import {ref} from 'vue'
import axios from '../axios'

export default function useMovies() {
    const movie = ref([])
    const movies = ref([])

    const getMovies = async () => {
        let response = await axios.get('/api/v1/movies')
        movies.value = response.data.data
    }

    const getMovie = async (id) => {
        let response = await axios.get('/api/v1/movies/'+ id)
        movie.value = response.data.data
    }

    return {
        movie,
        movies,
        getMovie,
        getMovies
    }

}