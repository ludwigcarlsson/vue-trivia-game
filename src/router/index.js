import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import('../components/HomePage.vue')
const Question = () => import('../components/Question.vue')
const Result = () => import('../components/Result.vue') // only imports when needed

Vue.use(Router);

export default new Router({ // create routes for components with own page
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
        {
            path: '/result',
            name: 'Result',
            component: Result,
        }
    ]
})