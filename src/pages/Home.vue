<template>
  <h3 class="text-3xl font-extrabold">Today Movie (Date: {{currentDate}})</h3>
  <div class="py-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div v-for="(movie, index) in movies" :key="index" class="w-3/4 mx-auto border hover:bg-black hover:text-white rounded-xl shadow">
      <h4 class="text-2xl">{{movie.title}}</h4>
      <router-link :to="{name : 'movie.index', params: {id: movie.id}}" class="bg-yellow-200 w-auto">
        <img src="../../src/assets/images/dora.jpg" alt="" class="w-1/2 block mx-auto ">
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import useMovies from "../composables/movies"

export default {
  setup() {
    const {movies, getMovies} = useMovies()
    onMounted(getMovies)
    let current = new Date()
    let currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    return {
      movies,
      currentDate
    }
  }
}
</script>

<style>

</style>