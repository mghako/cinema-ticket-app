import {ref} from 'vue'
import axios from '../axios'

export default function showSeats() {
    const showSeats = ref([])

    const getShowSeats =  async (id) => {
        let response = await axios.get(`/api/v1/shows/${id}/show-seats`)
        showSeats.value = response.data.data
    }

    // const getShowSeats = async (id) => {
        
    // }
    return {
        showSeats,
        getShowSeats
    }
}