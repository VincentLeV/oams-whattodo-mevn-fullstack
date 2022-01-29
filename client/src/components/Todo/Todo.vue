<template>
    <VaListItem class="todo">
        <VaListItemSection @click="completeTodo">
            <form>
                <div class="form-control">
                    <input 
                        type="checkbox"
                        name="description" 
                        v-model="checkboxValue" 
                        aria-label="todo-description"
                        class="checkbox"
                    >
                    <label 
                        for="description" 
                        :class="[checkboxValue ? 'isCompleted' : '', 'ml-5']"
                    >
                        <p class="todo-description">{{ todo.description }}</p>
                    </label>
                </div>
            </form>

            <VaListItemSection class="todo-info ml-5 mt-1">
                <VaListItemLabel :class="[color, 'mr-2']">
                    <i class="fas fa-flag"></i>
                </VaListItemLabel>
                <VaListItemLabel class="todo-extra">
                    {{ formattedDeadline }}
                </VaListItemLabel>
            </VaListItemSection>
        </VaListItemSection>
        
        <VaListItemSection 
            icon 
            class="todo-more-icon" 
            @click="showEditMenu"
        >
            <i class="fas fa-ellipsis-h"></i>
        </VaListItemSection>
    </VaListItem>

    <EditTodoMenu
        :todo="todo" 
        :isEditMenuOpen="isEditMenuOpen"
        @click-outside-menu="clickOutsideMenu"
        @show-edit-todo-modal="this.$emit('show-edit-todo-modal')"
    />
</template>

<script>
import moment from "moment"
import { 
    VaListItem, 
    VaListItemSection, 
    VaListItemLabel,
} from "vuestic-ui"
import EditTodoMenu from "../EditTodo/EditTodoMenu.vue"

export default {
    name: "Todo",
    props: {
        todo: Object
    },
    components: {
        VaListItem,
        VaListItemSection,
        VaListItemLabel,
        EditTodoMenu
    },
    data() {
        return {    
            checkboxValue: false,
            color: { type: String },
            formattedDeadline: this.todo.deadline,
            isEditMenuOpen: false
        }
    },
    created() {
        this.checkboxValue = this.todo.isCompleted
        this.formattedDeadline = moment(this.todo.deadline).format("DD-MM-YYYY hh:mm A")
        switch (this.todo.priority) {
        case 1:
            this.color = "p-low"
            break
        case 2:
            this.color = "p-med"
            break
        case 3: 
            this.color = "p-high"
            break
        default:
            this.color = ""
        }
    },
    methods: {
        completeTodo() {
            this.checkboxValue = !this.checkboxValue
            this.$store.dispatch("markAsComplete", {
                ...this.todo,
                isCompleted: this.checkboxValue
            })
        },
        showEditMenu() {
            this.isEditMenuOpen = !this.isEditMenuOpen
            this.$store.dispatch("setSelectedTodo", this.todo)
        },
        clickOutsideMenu() {
            this.isEditMenuOpen = false
        }
    },
    emits: ["show-edit-todo-modal"]
}
</script>
