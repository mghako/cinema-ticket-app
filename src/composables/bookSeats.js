import {ref} from 'vue'
import axios from '../axios'

export default function bookSeats() {
    const bookSeats = ref([])

    
    const setBookSeats = async (seat) => {

        // check seat is chose or not
        let filtered = bookSeats.filter( function(value, index ) {
            
        })
        // if chose remove from book seat

        // or add seat to bookseat list
        bookSeats.value = [...bookSeats.value, seat]
        console.log(bookSeats.value)
    }

    return {
        bookSeats,
        setBookSeats
    }
}