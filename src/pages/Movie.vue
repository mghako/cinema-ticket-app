<template>
   <h3 class="text-3xl font-extrabold my-6">Movie: {{movie.title}}</h3>
    <div class="flex justify-around align-middle space-x-4">
        <div class="w-1/5">
            <img src="../../src/assets/images/dora.jpg" alt="" class="w-full rounded-xl">
        </div>
        <div class="w-2/5 rounded-xl mt-6">
            <h3 class="text-2xl font-extrabold my-6 border-2 inline-block border-black rounded-xl py-2 px-1">Show Times</h3>
            <div class="grid grid-cols-2 gap-3">
                <div @click.prevent="fetchShowSeats(show.id)" v-for="(show, index) in movie.shows" :key="index" class="border-2 border-indigo-600 rounded-xl py-4 hover:bg-indigo-600 hover:text-white cursor-pointer">
                    <h4>Start Time: <strong>{{show.start_time}}</strong></h4>
                    <h4>End Time: <strong>{{show.end_time}}</strong></h4>
                    <h4>Ciname Hall: <strong>{{show.cinema_hall}}</strong></h4>
                </div>
            </div>
        </div>
        <div class="w-2/5 rounded-xl mt-6">
            <h3 class="text-2xl font-extrabold my-6 border-2 inline-block border-black rounded-xl py-2 px-1">Show Seats</h3>
            <div class="grid grid-cols-2 gap-3">
                <!-- <ShowSeats></ShowSeats> -->
                <!-- <div v-for="(show, index) in movie.shows" :key="index">
                    <h4>Start Time: {{show.start_time}}</h4>
                    <h4>End Time: {{show.end_time}}</h4>
                    <h4>Ciname Hall: {{show.cinemaHall}}</h4>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import useMovies from '../composables/movies'
import ShowSeats from '../components/ShowSeats.vue'
import useShowSeats from '../composables/showSeats'
export default {

    props: {
        id: {
            required: true,
            type: String
        }
    },
    components: {
        ShowSeats
    },
    setup(props, context) {
        const {movie, getMovie} = useMovies()
        const {showSeats, getShowSeats} = useShowSeats()
        onMounted(getMovie(props.id))
        

        const fetchShowSeats = async (id) => {
            await getShowSeats(id)
        }
        return {
            movie,
            getShowSeats,
            showSeats,
            fetchShowSeats
        }
    }
}
</script>

<style>

</style>