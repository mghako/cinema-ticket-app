import {ref} from 'vue'
import axios from '../axios'

export default function bookSeats() {
    const bookSeats = ref([])

    
    const setBookSeats = async (seat) => {
        bookSeats.value = [...bookSeats.value, seat]
    }

    return {
        bookSeats,
        setBookSeats
    }
}