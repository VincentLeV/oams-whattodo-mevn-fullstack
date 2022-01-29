<template>
    <form @submit.prevent="handleEditTodo" autocomplete="off">
        <Input 
            v-model="todo.value"
            :label="todo.label"
            :type="todo.type"
            :name="todo.name"
            :endornment="true"
            :pPriority="todo.priority"
            @get-priority="getPriority"
        />

        <div class="d-flex">
            <VaDateInput v-model="todo.deadlineDate" />
            <VaDivider vertical />
            <VaTimeInput v-model="deadlineTime" ampm />
        </div>

        <Button name="Edit Todo" />
    </form>
</template>

<script>
import { VaDateInput, VaDivider, VaTimeInput } from "vuestic-ui"
import moment from "moment"
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "EditTodoForm",
    components: {
        VaDateInput,
        VaDivider,
        VaTimeInput,
        Input,
        Button
    },
    data() {
        return {
            value: "",
            label: "Description",
            name: "description",
            type: "text",
            deadlineTime: new Date(),
            deadlineDate: new Date(),
            priority: this.$store.getters?.selectedTodo?.priority
        }
    },
    computed: {
        todo() {
            return {
                id: this.$store.getters?.selectedTodo?.id,
                value: this.$store.getters?.selectedTodo?.description,
                label: "Description",
                name: "description",
                type: "text",
                deadlineTime: new Date(moment(this.$store.getters?.selectedTodo?.deadline).format("HH:mm")),
                deadlineDate: new Date(moment(this.$store.getters?.selectedTodo?.deadline).format("YYYY-MM-DD")),
                priority: this.$store.getters?.selectedTodo?.priority,
                isCompleted: this.$store.getters?.selectedTodo?.isCompleted
            }
        }
    },
    methods: {
        async handleEditTodo() {
            try {
                const date = `${moment(this.todo.deadlineDate).format("MM-DD-YYYY")} ${moment(this.deadlineTime).format("HH:mm")}`
                const newTodo = {
                    id: this.todo.id,
                    description: this.todo.value,
                    deadline: new Date(date),
                    priority: this.todo.priority,
                    isCompleted: this.todo.isCompleted
                }

                await this.$store.dispatch("editTodo", newTodo)
                this.$emit("close-edit-todo-modal")
                this.$vaToast.init({ message: "Successfully edited todo", position: "bottom-left" })
            } catch (err) {
                this.$vaToast.init({ message: err.message, position: "bottom-left" })
            }
        },
        getPriority(color) {
            switch (color) {
            case "p-high":
                this.todo.priority = 3
                break
            case "p-med":
                this.todo.priority = 2
                break
            case "p-low": 
                this.todo.priority = 1
                break
            default:
                this.todo.priority = 0
                break
            }
        }
    }
}
</script>
