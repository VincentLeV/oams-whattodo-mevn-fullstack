<template>
    <form @submit.prevent="handleAddProject" autocomplete="off">
        <Input 
            v-model="value"
            :label="label"
            :type="type"
            :name="name"
            :endornment="false"
        />

        <Button class="add-project-btn" name="Add Project" />
    </form>
</template>

<script>
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "AddProjectForm",
    components: {
        Input,
        Button
    },
    data() {
        return {
            value: "",
            label: "Name",
            name: "project-name",
            type: "text",
        }
    },
    methods: {
        async handleAddProject() {
            try {
                await this.$store.dispatch("createProject", { name: this.value })
                this.value = ""
                this.$emit("close-add-project-modal")
                this.$vaToast.init({ message: "Successfully added new project", position: "bottom-left" })
            } catch (err) {
                this.$vaToast.init({ message: err.message, position: "bottom-left" })
            }
        }
    }
}
</script>
