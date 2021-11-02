<template>
   <h3 class="text-3xl font-extrabold my-6">Movie: {{movie.title}}</h3>
    <div class="flex justify-around align-middle space-x-4">
        <div class="w-1/5">
            <img src="../../src/assets/images/dora.jpg" alt="" class="w-full rounded-xl">
        </div>
        <div class="w-2/5 rounded-xl mt-6">
            <h3 class="text-2xl font-extrabold my-6 border-2 inline-block border-black rounded-xl py-2 px-1 cursor-pointer">Show Times</h3>
            <div class="grid grid-cols-1 gap-3">
                <div @click.prevent= "getSeatsFromShow(show.id)" 
                    v-for="(show, index) in movie.shows" :key="index" 
                    class="my-2 border-2 border-indigo-600 rounded-xl py-4 hover:bg-indigo-600 hover:text-white cursor-pointer"
                    :class="[show.id == currentShowId ? 'bg-indigo-600 text-white' : '']"
                >
                    <h4>Start Time: <strong>{{show.start_time}}</strong></h4>
                    <h4>End Time: <strong>{{show.end_time}}</strong></h4>
                    <h4>Ciname Hall: <strong>{{show.cinema_hall}}</strong></h4>
                </div>
            </div>
        </div>
        <div class="w-2/5 rounded-xl mt-6">
            <h3 class="text-2xl font-extrabold my-6 border-2 inline-block border-black rounded-xl py-2 px-1 cursor-pointer">Show Seats</h3>
            <ShowSeats :seats="showSeats" />
        </div>
    </div>
</template>

<script>

    import { computed, onMounted, ref, watch } from 'vue'
    import useMovies from '../composables/movies'
    import useShowSeats from '../composables/showSeats'
    import ShowSeats from '../components/ShowSeats.vue'

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
            const clickedShowTime = ref('')
            const currentShowId = ref('')

            const {movie, getMovie} = useMovies()
            const {showSeats, getShowSeats} = useShowSeats()

            onMounted(() => {
                getMovie(props.id)
            })
            
            // watch()

            const setShowTimeBg = computed( () => {
                // return clickedShowTime.value != currentShowId.value ? 'bg-indigo-600 text-white' : ''
            })

            const getSeatsFromShow = async (id) => {
                currentShowId.value = id
                clickedShowTime.value = id
                await getShowSeats(id)
            }
            return {
                movie,
                showSeats,
                getSeatsFromShow,
                clickedShowTime,
                currentShowId,
                setShowTimeBg
            }
        }
    }
</script>

<style>

</style>