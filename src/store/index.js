import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        answers: [],
        submittedScores: [],
        currentScore: 0 // define what state should contain
    },
    mutations: {
        increment (state) {
            state.currentScore += 10 // increment state-attribute: currentScore by 10
        },
        giveAns (state, payload) {
            state.answers.push({
                answer: payload[0].answer,
                correct: payload[0].correct,
                question: payload[0].question
            }); // adds payload information to the state-object: answers
        },
        submitScore (state, payload) {
            state.submittedScores.push({
                name: payload[0].name,
                score: payload[0].score
            }); // adds payload information to the state-object: submittedScores
        },
        resetData (state) { 
            state.currentScore = 0
            state.answers = []
        }
    },
    actions: {
        addScore ({ commit }) { // this is called from Question-component, calls mutation increment
            commit('increment') 
        },
        addAnswer ({commit}, payload) { // this is called from Question-component, calls mutation giveAns
            commit('giveAns', payload) 
        },
        submitScore({commit}, payload) { // this is called from Result-component, calls submitScore
            commit('submitScore', payload)
        },
        resetData ({commit}) {
            commit('resetData')
        }
    },
    getters: {
        getCurrentScore(state) { // returns the state-attribute currentScore
            return state.currentScore
        },
        getAnswers(state) { // returns the state-object answers
            return state.answers
        },
        getScores(state) {
            return state.submittedScores
        }
    }
})