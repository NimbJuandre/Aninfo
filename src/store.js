import { createStore } from 'vuex'

const state = {
    type: 1
}

const getters = {
    type(state) {
        return state.type;
    },
    typeName(state) {
        return state.type === 1 ? 'anime' : 'manga';
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
    mutations
})