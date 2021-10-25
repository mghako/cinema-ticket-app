<template>
   <h3 class="text-3xl font-extrabold my-6">Movie: {{movie.title}}</h3>
    <div class="flex justify-between align-middle space-x-4">
        <div class="w-1/3">
            <img src="../../src/assets/images/dora.jpg" alt="" class="w-full rounded-xl">
        </div>
        <div class="w-2/3 rounded-xl mt-6">
            <h3 class="text-2xl font-extrabold my-6 border-2 inline-block border-black rounded-xl py-2 px-1">Show Times</h3>
            <table class="w-full table-auto ">
                <thead>
                    <tr>
                        <th class="border-b-2 border-indigo-600 text-2xl">Start Time</th>
                        <th class="border-b-2 border-indigo-600 text-2xl">End Time</th>
                        <th class="border-b-2 border-indigo-600 text-2xl">Cinema Hall</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(show, index) in movie.shows" :key="index">
                        <td class="border-b-2 border-indigo-600">{{ show.start_time }}</td>
                        <td class="border-b-2 border-indigo-600">{{ show.end_time }}</td>
                        <td class="border-b-2 border-indigo-600">{{ show.cinema_hall }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import useMovies from '../composables/movies'
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {
        const {movie, getMovie} = useMovies()
        onMounted(getMovie(props.id))

        return {
            movie,
        }
    }
}
</script>

<style>

</style>