import {ref} from 'vue'
import axios from '../axios'

export default function bookSeats() {
    const bookSeats = ref([])

    
    const setBookSeats = async (seat) => {
        bookSeats.value = [...bookSeats.value, seat]
    }

    const removeBookSeat = async (seat) => {
        let filterRemovedBookSeat = bookSeats.value.filter( bookSeat => bookSeat.id != seat.id)
        bookSeats.value = [...filterRemovedBookSeat]
    }

    const buyBookSeats = async () => {
        await axios.post('/api/v1/show-seats/buy', bookSeats.value)
    }

    return {
        bookSeats,
        setBookSeats,
        removeBookSeat,
        buyBookSeats
    }
}