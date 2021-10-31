<template>
  <div class="grid grid-cols-6 gap-1 border-2 border-indigo-600 rounded-xl p-6">
    <div v-for="(seat, index) in seatLists" :key="index" class="">
      <button 
        @click="pressSeat(seat)"
        class="w-full cursor-pointer py-1 rounded-xl"
        :class="[seat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600 hover:text-white']"
        :disabled="seat.status != 'free'"
       >
        {{ seat.cinema_seat.seat_number }}
       </button>
    </div>
  </div>
  <div>
    <h3>Chose Seats:</h3>
    <div class="grid grid-cols-6 gap-1">
      
      <div v-for="(bookSeat, index) in bookSeats" :key="index">
        <button
        @click="removeSeat(bookSeat)" 
        class="w-full cursor-pointer py-1 rounded-xl"
        :class="[bookSeat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600 hover:text-white']"
        >
          {{ bookSeat.cinema_seat.seat_number }}
        </button>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>

import { computed, onMounted, ref, watch } from 'vue'
 import useShowSeats from '../composables/showSeats'
 import useBookSeats from '../composables/bookSeats'

export default {
  props: {
    seats: {
      type: [Array, Object],
      required: true,
      default: null
    }
  },

  setup(props) {

    let seatLists = ref([])
    
    const { toggleSeatStatus } = useShowSeats()
    const { bookSeats, setBookSeats, removeBookSeat } = useBookSeats()

    watch(
      () => props.seats, 
      (currentValue, old) => { 
        seatLists.value = currentValue
        bookSeats.value.length  = 0
        
        }
    )

    const checkBookSeatStatus = computed( (seat) => {
      return bookSeats.value.includes(seat)
    })
    
    function checkDuplicateBookSeats(seat) {
      let filteredBookSeats = bookSeats.value.filter(bookSeat => bookSeat.id == seat.id)
      return !filteredBookSeats.length
    }
    const removeSeat = async (seat) => {
      // console.log(seat)
      await removeBookSeat(seat)
    }
    const pressSeat = async (seat) => {
      // console.log(seat)
      if(bookSeats.value.length == 0 || checkDuplicateBookSeats(seat)) {
        await setBookSeats(seat)
      } 
    }


    return {
      seatLists,
      pressSeat,
      bookSeats,
      checkDuplicateBookSeats,
      checkBookSeatStatus,
      removeSeat
    }
  }
}
</script>

<style>

</style>