import Axios from "../services/axios"

const actions = {
    async getTodos({ commit }) {
        const todos = await Axios.getTodos()
        commit("SET_INITIAL_TODOS", todos)
    },
    async createTodo({ commit }, payload) {
        const todo = await Axios.createTodo(payload)
        commit("CREATE_NEW_TODO", todo)
    },
    async editTodo({ commit }, payload) {
        await Axios.updateTodo(payload.id, payload)
        commit("EDIT_TODO", payload)
    },
    async deleteTodo({ commit }, payload) {
        await Axios.deleteTodo(payload)
        commit("DELETE_TODO", payload)
    },
    async markAsComplete({ commit }, payload) {
        await Axios.updateTodo(payload.id, payload)
        commit("MARK_AS_COMPLETE", payload)
    },
    setSelectedTodo({ commit }, payload) {
        commit("SET_SELECTED_TODO", payload)
    }
}

export default actions
