<template>
  <div class="grid grid-cols-6 gap-1 border-2 border-indigo-600 rounded-xl p-6">
    <div v-for="(seat, index) in seats" :key="index" class="">
      <!-- <router-link to="/" 
        class="inline-block w-full" 
        :class="[seat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600']"
        :disable="! seat.booking"
        >
        {{ seat.cinema_seat.seat_number }}
      </router-link> -->
      <button @click.prevent="addSeatsToBooking(seat.id)" 
        class="w-full cursor-pointer py-1 rounded-xl"
        :class="[seat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600 hover:text-white']"
        :disabled="seat.status != 'free'"
       >{{ seat.cinema_seat.seat_number }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seats: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      bookingSeats: []
    }
  },
  methods: {
    addSeatsToBooking(id) {
      this.bookingSeats.push(id)
      console.log(this.bookingSeats)
    }
  },
  setup() {

  }
}
</script>

<style>

</style>