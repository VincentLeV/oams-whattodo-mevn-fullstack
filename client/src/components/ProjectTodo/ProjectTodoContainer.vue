<template>
    <article class="todo-container">
        <ProjectTodo 
            v-for="todo in todos" :key="todo.id" 
            :todo="todo" 
            @show-edit-todo-modal="this.$emit('show-edit-todo-modal')" 
        />
    </article>
</template>

<script>
import ProjectTodo from "./ProjectTodo.vue"

export default {
    name: "ProjectTodoContainer",
    components: {
        ProjectTodo
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
