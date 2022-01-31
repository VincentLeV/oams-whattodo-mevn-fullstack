<template>
    <div class="project-toolbar">
        <div @click="handleAddTodo">
            <i class="far fa-plus-square"></i>
            <span>Add Task</span>
        </div>
        <div>
            <div class="toolbar-edit" @click="this.$emit('show-edit-proj-modal')">
                <i class="fas fa-edit"></i>
                <span>Edit</span>
            </div>
            <div class="toolbar-delete" @click="handleDeleteProject">
                <i class="fas fa-trash"></i>
                <span>Delete</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectToolbar",
    props: {
        project: Object
    },
    methods: {
        handleDeleteProject() {
            if (window.confirm("Are you sure?")) {
                this.$store.dispatch("deleteProject", this.project)
            }
        },
        handleAddTodo() {
            this.$emit("show-add-todo-modal")
            this.$store.dispatch("setOriginality", "projects")
        }
    }
}
</script>
