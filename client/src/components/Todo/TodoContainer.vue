<template>
    <article class="todo-container">
        <Todo 
            v-for="todo in todos" :key="todo.id" 
            :todo="todo" 
            @show-edit-todo-modal="this.$emit('show-edit-todo-modal')" 
        />
    </article>
</template>

<script>
import Todo from "./Todo.vue"

export default {
    name: "TodoContainer",
    components: {
        Todo
    },
    props: {
        todos: {
            type: Array
        },
        from: {
            type: String,
            default: ""
        }
    },
    emits: ["show-edit-todo-modal"]
}
</script>
