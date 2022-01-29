<template>
    <article 
        v-for="todo in todos" :key="todo.id" 
        class="todo-container"
    >
        <Todo 
            :todo="todo" 
            @show-edit-todo-modal="this.$emit('show-edit-todo-modal')" 
        />
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
    },
    emits: ["show-edit-todo-modal"]
}
</script>
