const setting = {
    state: {
        count: ''
    },
    mutations: {
        SET_COUNT(state, count) {
            state.count = count
        }
    },
    actions: {
        addCount({commit}) {
            const count = 100
            commit('SET_COUNT',count)
        }
    },
}

export default setting