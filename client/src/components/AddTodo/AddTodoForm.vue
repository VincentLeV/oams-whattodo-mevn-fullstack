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
            <VaTimeInput v-model="deadlineTime" ampm />
        </div>

        <Button
            name="Add Todo" 
        />
    </form>
</template>

<script>
import { 
    VaTimeInput, 
    VaDivider, 
    VaDateInput
} from "vuestic-ui"
import moment from "moment"  
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "AddTodoForm",
    components: {
        Input,
        Button,
        VaTimeInput,
        VaDivider,
        VaDateInput
    },
    data() {
        return {
            input: {
                value: "",
                label: "Description",
                name: "description",
                type: "text",
            },
            deadlineTime: new Date(),
            deadlineDate: new Date(),
            priority: 0
        }
    },
    methods: {
        async handleAddTodo() {
            const date = `${moment(this.deadlineDate).format("MM-DD-YYYY")} ${moment(this.deadlineTime).format("HH:mm")}`
            try {
                const newTodo = {
                    description: this.input.value,
                    deadline: new Date(date),
                    priority: this.priority,
                    isCompleted: false
                }

                await this.$store.dispatch("createTodo", newTodo)
                this.input.value = ""
                this.$emit("close-add-todo-modal")
                this.$vaToast.init({ message: "Successfully added new todo", position: "bottom-left" })
            } catch (err) {
                this.$vaToast.init({ message: err.message, position: "bottom-left" })
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
