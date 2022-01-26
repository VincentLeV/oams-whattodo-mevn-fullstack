<template>
    <section>
        <VaList>
            <TodoContainer :todos="todos" />
        </VaList>

        <AddTodoModal 
            :showTodoForm="showTodoForm"
            :todos="todos"
            @close="close"
        />
    </section>
</template>

<script>
import { onMounted } from "vue"
import { VaList } from "vuestic-ui"
// import Axios from "../services/axios"
import TodoContainer from "../components/TodoContainer.vue"
import AddTodoModal from "../components/AddTodo/AddTodoModal.vue"
import useTodos from "../store/todos"

export default {
    name: "QuickTodos",
    components: {
        VaList,
        TodoContainer,
        AddTodoModal
    },
    props: {
        showTodoForm: {
            type: Boolean
        }
    },
    setup() {
        const { todos, fetchTodos } = useTodos()

        onMounted(() => {
            fetchTodos()
        })

        return {
            todos
        }
    },
    methods: {
        // async getAllTodos() {
        //     const res = await Axios.getTodos()
        //     return res
        // },
        close() {
            this.$emit("close")
        }
    },
    // data() {
    //     return {
    //         todos: [],
    //     }
    // },
    // async created() {
    //     this.todos = await this.getAllTodos()
    // },
}
</script>
