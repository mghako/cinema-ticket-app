import {ref} from 'vue'
import axios from '../axios'

export default function showSeats() {
    
    const showSeats = ref([])

    const getShowSeats =  async (showId) => {
        let response = await axios.get(`/api/v1/shows/${showId}/show-seats`)
        showSeats.value = response.data.data
    }

    const toggleSeatStatus = async (showId, seatId) => {
        await axios.put(`/api/v1/shows/${showId}/show-seats/${seatId}`)
    }

    return {
        showSeats,
        getShowSeats,
        toggleSeatStatus
    }
}