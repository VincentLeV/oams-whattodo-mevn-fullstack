<template>
    <form @submit.prevent="handleEditProject" autocomplete="off">
        <Input 
            v-model="project.name"
            :label="project.label"
            :type="project.type"
            :name="project.inputName"
            :endornment="false"
        />

        <Button class="edit-project-btn" name="Edit Project" />
    </form>
</template>

<script>
import { mapGetters } from "vuex"
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "EditProjectForm",
    components: {
        Input,
        Button
    },
    created() {
        return {
            project: {
                name: "name",
                label: "Name",
                inputName: "edit-proj-name",
                type: "text",
            },
        }
    },
    computed: {
        ...mapGetters(["selectedProject"]),
        project() {
            return {
                ...this.project,
                inputName: "edit-proj-name",
                label: "Name",
                name: this.selectedProject?.name
            }
        },
    },
    methods: {
        async handleEditProject() {
            try {
                this.$store.dispatch("updateProject", {
                    project: {
                        ...this.selectedProject,
                        name: this.project.name
                    },
                    todo: null
                })
                // this.$store.dispatch("getProjects")
                this.$emit("close-edit-proj-modal")
                this.$vaToast.init({ message: "Successfully edited project", position: "bottom-left" })
            } catch (err) {
                this.$vaToast.init({ message: err.message, position: "bottom-left" })
            }
        }
    }
}
</script>
