<template>
    <article v-for="todo in todos" :key="todo.id" class="todo-container">
        <Todo :todo="todo" />
        <VaDivider></VaDivider>
    </article>
</template>

<script>
import { VaDivider } from "vuestic-ui"
import Todo from "./Todo.vue"

export default {
    name: "TodoContainer",
    components: {
        Todo,
        VaDivider
    },
    props: {
        todos: {
            type: Array
        }
    }
}
</script>
