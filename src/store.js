import { createStore } from 'vuex'
import vuexPersistedstate from "vuex-plugin-persistedstate";

const state = {
    type: 1,
}

const getters = {
    type(state) {
        return state.type;
    },
    typeName(state) {
        return state.type === 1 ? 'ANIME' : 'MANGA';
    }
}
const mutations = {
    setType(state, type) {
        state.type = type
    }
}

export default createStore({
    state,
    getters,
    mutations,
    plugins: [vuexPersistedstate()]
})