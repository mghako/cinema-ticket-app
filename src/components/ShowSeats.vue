<template>
  <div class="grid grid-cols-4 gap-2 bg-yellow-400">
    <div v-for="(seat, index) in seats" :key="index" class="bg-gray-500">
      <router-link to="/" 
        class="inline-block w-full" 
        :class="[seat.status != 'free' ? 'bg-red-600' : 'bg-green-400 hover:bg-indigo-600']"
        :disable="! seat.booking"
        >
        {{ seat.cinema_seat.seat_number }}
      </router-link>
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
  }
}
</script>

<style>

</style>