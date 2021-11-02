<template>
  <h3 v-if="seatLists.length == 0" class="text-center text-red-600 font-extrabold !!!">Please Choose Show Time</h3>
  <div v-if="seatLists.length != 0" class="mt-2 grid grid-cols-6 gap-1 border-2 border-indigo-600 rounded-xl py-2">
    
    <div v-for="(seat, index) in seatLists" :key="index" class="">
      <button 
        @click="pressSeat(seat)"
        class="w-1/2 cursor-pointer py-1 rounded-xl"
        :class="[seat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600 hover:text-white']"
        :disabled="seat.status != 'free'"
       >
        {{ seat.cinema_seat.seat_number }}
       </button>
    </div>
  </div>
  <div class="mt-10">
    <h3>Chose Seats:</h3>
    <div class="grid grid-cols-6 gap-1 border-2 border-indigo-800 rounded-xl p-6 bg-indigo-600">
      
      <div v-for="(bookSeat, index) in bookSeats" :key="index">
        <button
        @click="removeSeat(bookSeat)" 
        class="w-full cursor-pointer py-1 rounded-xl bg-yellow-400 text-wa-600 hover:bg-ind"
        
        >
          {{ bookSeat.cinema_seat.seat_number }}
        </button>
      </div>
    </div>
    <button 
      @click="pressBuyTicket"
      class="mt-10 border-2 rounded py-1 px-2 uppercase hover:bg-green-400"
      :disabled="checkBookSeatEmpty"
    >
    Buy Tickets</button>
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
    
    const { showSeats, toggleSeatStatus, getShowSeats } = useShowSeats()
    const { bookSeats, setBookSeats, removeBookSeat, buyBookSeats } = useBookSeats()

    watch(
      () => props.seats, 
      (currentValue, old) => { 
          seatLists.value = currentValue
          bookSeats.value.length  = 0
        }
    )

    const checkBookSeatEmpty = computed(() => {
      return bookSeats.value.length == 0
    })

    const checkBookSeatStatus = computed( (seat) => {
      return bookSeats.value.includes(seat)
    })
    
    function checkDuplicateBookSeats(seat) {
      let filteredBookSeats = bookSeats.value.filter(bookSeat => bookSeat.id == seat.id)
      return !filteredBookSeats.length
    }

    const removeSeat = async (seat) => {
      await removeBookSeat(seat)
    }

    const pressSeat = async (seat) => {
      if(bookSeats.value.length == 0 || checkDuplicateBookSeats(seat)) {
        await setBookSeats(seat)
      } 
    }

    const pressBuyTicket = async () => {
      await buyBookSeats()
      await getShowSeats(props.seats[0].show.id)
      seatLists.value = showSeats.value
    }

    return {
      seatLists,
      pressSeat,
      bookSeats,
      checkDuplicateBookSeats,
      checkBookSeatStatus,
      removeSeat,
      checkBookSeatEmpty,
      pressBuyTicket,
    }
  }
}
</script>

<style>

</style>