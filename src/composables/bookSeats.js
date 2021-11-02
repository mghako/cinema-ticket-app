import {ref} from 'vue'
import axios from '../axios'


export default function bookSeats() {
    const bookSeats = ref([])

    
    const setBookSeats = async (seat) => {
        if(seat.status != 'free') {
            alert('cant choose this seat')
            return
        }
        bookSeats.value = [...bookSeats.value, seat]
    }

    const removeBookSeat = async (seat) => {
        let filterRemovedBookSeat = bookSeats.value.filter( bookSeat => bookSeat.id != seat.id)
        bookSeats.value = [...filterRemovedBookSeat]
    }

    const buyBookSeats = async () => {

        let formData = [];

        bookSeats.value.map( (bookSeat) => (formData.push(bookSeat.id)))

        let response = await axios.post('/api/v1/show-seats/buy', formData)
        
        if(response.status == 200) {
            alert("Booking Success")
            bookSeats.value.length = 0
        }

        return response.data

    }

    return {
        bookSeats,
        setBookSeats,
        removeBookSeat,
        buyBookSeats
    }
}