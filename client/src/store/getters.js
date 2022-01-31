const getters = {
    allTodos: (state) => state.todos,
    allProjects: (state) => state.projects,
    selectedTodo: (state) => state.selectedTodo,
    selectedProject: (state) => state.selectedProject,
    originality: (state) => state.originality,
    allPriorities: (state) => state.priorities
}

export default getters
