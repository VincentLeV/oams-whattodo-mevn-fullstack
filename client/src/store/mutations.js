const mutations = {
    SET_INITIAL_TODOS(state, payload) {
        const completed = payload.filter((x) => x.isCompleted)
        const notCompleted = payload.filter((x) => !completed.includes(x))
        const arranged = notCompleted.sort((a, b) => b.priority - a.priority)
        state.todos = [...arranged, ...completed]
    },
    CREATE_NEW_TODO(state, payload) {
        const temp = [...state.todos]
        temp.push(payload)
        state.todos = temp.sort((a, b) => b.priority - a.priority)
    },
    EDIT_TODO(state, payload) {
        const index = state.todos.findIndex((x) => x.id === payload.id)
        state.todos.splice(index, 1, payload)
    },
    DELETE_TODO(state, payload) {
        state.todos = state.todos.filter((t) => t.id !== payload)
    },
    MARK_TODO_COMPLETE(state, payload) {
        const index = state.todos.findIndex((x) => x.id === payload.id)
        state.todos.splice(index, 1, payload)
        if (payload.isCompleted) {
            state.todos.sort((a, b) => a.isCompleted - b.isCompleted)
        } else {
            state.todos.sort((a, b) => b.priority - a.priority)
        }
    },
    SET_SELECTED_TODO(state, payload) {
        state.selectedTodo = payload
    },
    SET_INITIAL_PROJECTS(state, payload) {
        payload.forEach((p) => {
            const completed = p.todos.filter((x) => x.isCompleted)
            const notCompleted = p.todos.filter((x) => x.isCompleted === false)
            const arranged = notCompleted.sort((a, b) => b.priority - a.priority)
            p.todos = [...arranged, ...completed]
        })
        state.projects = payload
    },
    CREATE_NEW_PROJECT(state, payload) {
        state.projects.unshift(payload)
    },
    UPDATE_PROJECT(state, payload) {
        const found = state.projects.find((x) => x._id === payload._id) 
        const index = state.projects.findIndex((x) => x._id === payload._id)
        let todos = [...payload.todos]
        const completed = todos.filter((x) => x.isCompleted)
        const notCompleted = todos.filter((x) => x.isCompleted === false)
        const arranged = notCompleted.sort((a, b) => b.priority - a.priority)
        todos = [...arranged, ...completed]
        found.todos = todos
        state.projects.splice(index, 1, found)
    },
    DELETE_PROJECT(state, payload) {
        state.projects = state.projects.filter((p) => p.id !== payload)
    },
    DELETE_PROJECT_TODO(state, payload) {
        const found = state.projects.find((x) => x.id === payload.projectId)
        found.todos = found.todos.filter((x) => x._id !== payload.todoId)
    },
    SET_SELECTED_PROJECT(state, payload) {
        state.selectedProject = payload
    },
    SET_ORIGINALITY(state, payload) {
        state.originality = payload
    }
}

export default mutations
