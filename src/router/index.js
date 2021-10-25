import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import UpComingMovies from '../pages/UpComingMovies.vue'
import Movie from '../pages/Movie.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/upcoming-movies",
        name: "upcoming-movies",
        component: UpComingMovies
    },
    {
        path: '/movie',
        name: "movie.index",
        component: Movie,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router