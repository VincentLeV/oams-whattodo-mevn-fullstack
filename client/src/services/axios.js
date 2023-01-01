import axios from "axios"

const baseUrl = process.env.VUE_APP_API_BASE_URL || "https://oams-whattodo-mevn-backend.onrender.com"

const getTodos = async () => {
    const req = await axios.get(`${baseUrl}/api/todos`)
    return req.data
}

const getProjects = async () => {
    const req = await axios.get(`${baseUrl}/api/projects`)
    return req.data
}

const getTodo = async (id) => {
    const req = await axios.get(`${baseUrl}/api/todos/${id}`)
    return req.data
}

const getProject = async (id) => {
    const req = await axios.get(`${baseUrl}/api/projects/${id}`)
    return req.data
}

const createTodo = async (newTodo) => {
    const res = await axios.post(`${baseUrl}/api/todos`, newTodo)
    return res.data
}

const createProject = async (newProj) => {
    const res = await axios.post(`${baseUrl}/api/projects`, newProj)
    return res.data
}

const updateTodo = async (id, todo) => {
    const res = await axios.put(`${baseUrl}/api/todos/${id}`, todo)
    return res.data
}

const updateProject = async (id, obj) => {
    const res = await axios.put(`${baseUrl}/api/projects/${id}`, obj)
    return res.data
}

const deleteTodo = async (id) => {
    const res = await axios.delete(`${baseUrl}/api/todos/${id}`)
    return res.data
}

const deleteProject = async (id) => {
    const res = await axios.delete(`${baseUrl}/api/projects/${id}`)
    return res.data
}

const deleteProjectTodo = async (projId, todoId) => {
    const res = await axios.delete(`${baseUrl}/api/projects/${projId}/todo/${todoId}`)
    return res.data
}

const Axios = {
    getTodos,
    getProjects,
    getTodo,
    getProject,
    createTodo,
    createProject,
    updateTodo,
    updateProject,
    deleteTodo,
    deleteProject,
    deleteProjectTodo
}

export default Axios
