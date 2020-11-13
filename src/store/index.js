import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        answers: [],
        currentScore: 0
    },
    mutations: {
        increment (state) {
            state.currentScore += 10
        },
        giveAns (state, payload) {
            state.answers.push({
                answer: payload[0].answer,
                correct: payload[0].correct,
                question: payload[0].question
            });
        }

    },
    actions: {
        addScore ({ commit }) {
            commit('increment')
        },
        addAnswer ({commit}, payload) {
            commit('giveAns', payload)
        }
    },
    getters: {
        getCurrentScore(state) {
            return state.currentScore
        },
        getAnswers(state) {
            return state.answers
        }
    }
})