import { reactive, toRefs } from "vue"
import Axios from "../services/axios"

const state = reactive({
    todos: [],
    // loading: true,
    // selectedTodo: null
})

export default function useTodos() {
    const fetchTodos = async () => {
        // state.loading = true;
        state.todos = await Axios.getTodos()
        // state.loading = false;
    }

    const setTodos = (todo) => {
        state.todos.push(todo)
    }

    return {
        ...toRefs(state), // convert to refs when returning
        fetchTodos,
        setTodos
    }
}
