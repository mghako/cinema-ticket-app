import {ref} from 'vue'
import axios from '../axios'

export default function showSeats() {
    const showSeats = ref([])

    const getShowSeats =  async (id) => {
        let response = await axios.get(`/api/v1/shows/${id}/show-seats`)
        console.log(response)
    }

    return {
        showSeats,
        getShowSeats
    }
}