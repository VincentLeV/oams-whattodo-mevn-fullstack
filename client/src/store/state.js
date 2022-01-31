const state = {
    todos: [],
    projects: [],
    sProject: null,
    selectedTodo: null,
    selectedProject: null,
    originality: "todos",
    priorities: [
        {
            name: "High",
            color: "p-high"
        },
        {
            name: "Medium",
            color: "p-med"
        },
        {
            name: "Low",
            color: "p-low"
        }
    ]
}

export default state
