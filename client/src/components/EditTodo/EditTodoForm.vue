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
            <VaInput 
                v-model="todo.deadlineTime"
            >
                <template #appendInner>
                    <VaIcon
                        class="far fa-clock"
                    />
                </template>
            </VaInput>
        </div>

        <Button class="edit-todo-btn" name="Edit Todo" />
    </form>
</template>

<script>
import { 
    VaDateInput, 
    VaDivider, 
    VaInput,
    VaIcon
} from "vuestic-ui"
import { mapGetters } from "vuex"
import moment from "moment-mini"
import Input from "../Input.vue"
import Button from "../Button.vue"

export default {
    name: "EditTodoForm",
    components: {
        VaDateInput,
        VaDivider,
        VaInput,
        VaIcon,
        Input,
        Button
    },
    created() {
        return {
            todo: {
                value: "",
                label: "Description",
                name: "edit-todo-desc",
                type: "text",
                deadlineTime: "",
                deadlineDate: new Date(),
                priority: this.selectedTodo?.priority
            }
        }
    },
    computed: {
        ...mapGetters(["selectedProject", "selectedTodo", "originality"]),
        todo() {
            return {
                ...this.todo,
                label: "Description",
                name: "edit-todo-desc",
                value: this.selectedTodo?.description,
                deadlineTime: moment(this.selectedTodo?.deadline).format("HH:mm"),
                deadlineDate: new Date(moment(this.selectedTodo?.deadline).format("YYYY-MM-DD")),
                isCompleted: this.selectedTodo?.isCompleted,
                priority: this.selectedTodo?.priority
            }
        }
    },
    methods: {
        async handleEditTodo() {
            try {
                const date = `${moment(this.todo.deadlineDate).format("MM-DD-YYYY")} ${this.todo.deadlineTime}`
                if (!this.todo.deadlineTime.match(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g) && this.deadlineTime !== "") {
                    this.$vaToast.init({ 
                        message: "Can't create new todo: wrong time format", 
                        position: "bottom-left" 
                    })
                    return
                }
                const newTodo = {
                    ...this.selectedTodo,
                    description: this.todo.value,
                    deadline: new Date(date),
                    priority: this.todo.priority,
                    isCompleted: this.todo.isCompleted,
                }

                if (this.originality === "projects") {
                    const pTodos = [...this.selectedProject.todos]
                    const index = pTodos.findIndex((x) => x._id === this.selectedTodo._id)
                    pTodos.splice(index, 1, newTodo)
                    const newProject = {
                        ...this.selectedProject,
                        todos: pTodos
                    }
                    this.$store.dispatch("updateProject", {
                        project: newProject,
                        todo: null
                    })
                } else {
                    await this.$store.dispatch("editTodo", newTodo)
                }
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
