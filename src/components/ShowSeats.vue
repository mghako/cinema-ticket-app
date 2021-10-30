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
        class="w-full cursor-pointer py-1 rounded-xl"
        :class="[bookSeat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600 hover:text-white']"
        >
          {{ bookSeat.cinema_seat.seat_number }}
        </button>
      </div>
    </div>
  </div>
  <div>
    <!-- {{bookSeats}} -->
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
    const { bookSeats, setBookSeats } = useBookSeats()

    watch(
      () => props.seats, 
      (currentValue, old) => { 
        seatLists.value = currentValue
        bookSeats.value.length  = 0
        
        }
    )

    const checkSeatStatus = computed( () => {
      
    })
    

    const pressSeat = async (seat) => {
      await setBookSeats(seat)
    }

    const checkSelectedSeat = (seat) => {
      
    }

    return {
      seatLists,
      pressSeat,
      bookSeats
    }
  }
}
</script>

<style>

</style>