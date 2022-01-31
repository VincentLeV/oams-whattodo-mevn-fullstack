<template>
    <form @submit.prevent="handleAddTodo" autocomplete="off">
        <Input 
            v-model="input.value"
            :label="input.label"
            :type="input.type"
            :name="input.name"
            :endornment="true"
            @get-priority="getPriority"
        />

        <div class="d-flex">
            <VaDateInput v-model="deadlineDate" />
            <VaDivider vertical />
            <VaInput 
                class="dtime-input"
                v-model="deadlineTime"
                :rules="[
                    (v) => v.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g)
                    || `Time format is wrong`
                ]"
            >
                <template #appendInner>
                    <VaIcon class="far fa-clock" />
                </template>
            </VaInput>
        </div>

        <Button
            class="add-todo-btn"
            name="Add Todo" 
        />
    </form>
</template>

<script>
import { 
    VaDivider, 
    VaDateInput,
    VaInput,
    VaIcon
} from "vuestic-ui"
import { mapGetters } from "vuex"
import moment from "moment"  
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "AddTodoForm",
    components: {
        Input,
        Button,
        VaDivider,
        VaDateInput,
        VaInput,
        VaIcon
    },
    computed: {
        ...mapGetters(["originality", "selectedProject"])
    },
    data() {
        return {
            input: {
                value: "",
                label: "Description",
                name: "add-todo-desc",
                type: "text",
            },
            deadlineTime: "",
            deadlineDate: new Date(),
            priority: 0,
            validate: false
        }
    },
    methods: {
        async handleAddTodo() {
            try {
                const date = `${moment(this.deadlineDate).format("MM-DD-YYYY")} ${this.deadlineTime}`
                if (!this.deadlineTime.match(/^( [0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g)) {
                    this.$vaToast.init({ 
                        message: "Can't create new todo: wrong time format", 
                        position: "bottom-left" 
                    })
                    return
                }
                const newTodo = {
                    description: this.input.value,
                    deadline: new Date(date),
                    priority: this.priority,
                    isCompleted: false
                }

                if (this.originality === "projects") {
                    await this.$store.dispatch("updateProject", {
                        project: this.selectedProject,
                        todo: newTodo
                    })
                } else {
                    await this.$store.dispatch("createTodo", newTodo)
                }

                this.input.value = ""
                this.deadlineTime = ""
                this.$emit("close-add-todo-modal")
                this.$vaToast.init({ message: "Successfully added new todo", position: "bottom-left" })
            } catch (err) {
                this.$vaToast.init({ message: err, position: "bottom-left" })
            }
        },
        getPriority(color) {
            switch (color) {
            case "p-high":
                this.priority = 3
                break
            case "p-med":
                this.priority = 2
                break
            case "p-low": 
                this.priority = 1
                break
            default:
                this.priority = 0
                break
            }
        }
    }
}
</script>
