<template>
    <article class="project-container" @click="chooseProject">
        <va-collapse
            v-for="(project, i) in projects"
            :key="i"
            :header="project.name + ' - ' + project.todos.length + ' task(s)'"
            @click="this.$emit('choose-project', project)"
        >
            <Project 
                :project="project"
                @show-edit-todo-modal="this.$emit('show-edit-todo-modal')" 
            />
            <ProjectToolbar 
                :project="project"
                @show-add-todo-modal="this.$emit('show-add-todo-modal')"
                @show-edit-proj-modal="this.$emit('show-edit-proj-modal')" 
            />
        </va-collapse>
    </article>
</template>

<script>
import Project from "./Project.vue"
import ProjectToolbar from "./ProjectToolbar.vue"

export default {
    name: "ProjectContainer",
    components: {
        Project,
        ProjectToolbar
    },
    props: {
        projects: Array
    },
}
</script>
