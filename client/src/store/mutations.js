const mutations = {
    SET_INITIAL_TODOS(state, payload) {
        state.todos = payload
    },
    CREATE_NEW_TODO(state, payload) {
        state.todos.unshift(payload)
    },
    EDIT_TODO(state, payload) {
        const index = state.todos.findIndex((x) => x.id === payload.id)
        state.todos.splice(index, 1)
    },
    DELETE_TODO(state, payload) {
        state.todos = state.todos.filter((t) => t.id !== payload)
    },
    MARK_AS_COMPLETE(state, payload) {
        const index = state.todos.findIndex((x) => x.id === payload.id)
        state.todos.splice(index, 1, payload)
    },
    SET_SELECTED_TODO(state, payload) {
        state.selectedTodo = payload
    }
}

export default mutations
