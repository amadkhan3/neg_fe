import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowNavBar: true,
        currentUser: null
    },
    mutations: {
        setShowNavBar (state, value) {
            state.isShowNavBar = value
        },
        setCurrentUser (state, currentUser) {
            state.currentUser = currentUser
        }
    },
    actions: {}
})
