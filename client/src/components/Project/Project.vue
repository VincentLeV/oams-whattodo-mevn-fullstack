<template>
    <section class="project">
        <ProjectTodoContainer 
            v-if="project.todos.length > 0"
            :todos="project.todos" 
            @show-edit-todo-modal="this.$emit('show-edit-todo-modal')"
        />
        <h2 v-else>No Todo</h2>
    </section>
</template>

<script>
import ProjectTodoContainer from "../ProjectTodo/ProjectTodoContainer.vue"

export default {
    name: "Project",
    props: {
        project: Object
    },
    components: {
        ProjectTodoContainer
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 1.2rem
}
</style>
