import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('../components/HomePage.vue')
const Question = () => import('../components/Question.vue')

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage', 
            component: HomePage,
        },
        {
            path: '/question',
            name: 'Question',
            component: Question,
        },
    ]
})