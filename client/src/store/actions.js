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
        console.log(payload)
        await Axios.updateTodo(payload.id, payload)
        commit("EDIT_TODO", payload)
    },
    async deleteTodo({ commit }, payload) {
        await Axios.deleteTodo(payload)
        commit("DELETE_TODO", payload)
    },
    async markTodoComplete({ commit }, payload) {
        await Axios.updateTodo(payload.id, payload)
        commit("MARK_TODO_COMPLETE", payload)
    },
    setSelectedTodo({ commit }, payload) {
        commit("SET_SELECTED_TODO", payload)
    },
    async getProjects({ commit }) {
        const projects = await Axios.getProjects()
        commit("SET_INITIAL_PROJECTS", projects)
    },
    async createProject({ commit }, payload) {
        const project = await Axios.createProject(payload)
        commit("CREATE_NEW_PROJECT", project)
    },
    async deleteProject({ commit }, payload) {
        await Axios.deleteProject(payload.id)
        commit("DELETE_PROJECT", payload.id)
    },
    async updateProject({ commit }, payload) {
        const project = await Axios.updateProject(payload.project.id, payload)
        commit("UPDATE_PROJECT", project)
    },
    async deleteProjectTodo({ commit }, payload) {
        await Axios.deleteProjectTodo(payload.projectId, payload.todoId)
        commit("DELETE_PROJECT_TODO", payload)
    },
    setSelectedProject({ commit }, payload) {
        commit("SET_SELECTED_PROJECT", payload)
    },
    setOriginality({ commit }, payload) {
        commit("SET_ORIGINALITY", payload)
    }
}

export default actions
