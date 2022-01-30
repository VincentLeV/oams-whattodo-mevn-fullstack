<template>
    <section>
        <VaListItem class="todo">
            <VaListItemSection @click="completeTodo">
                <form>
                    <div class="form-control">
                        <input 
                            type="checkbox"
                            name="isCompleted" 
                            v-model="checkboxValue" 
                            aria-label="checkbox"
                            class="checkbox"
                        >
                        <label 
                            for="isCompleted" 
                            :class="[checkboxValue ? 'isCompleted' : '', 'ml-5']"
                        >
                            <span class="todo-description">{{ todo.description }}</span>
                        </label>
                    </div>
                </form>

                <VaListItemSection class="todo-info ml-5 mt-1">
                    <div :class="[color, 'mr-2 endornment-flag']">
                        <i class="fas fa-flag"></i>
                    </div>
                    <p class="todo-extra">
                        {{ formattedDeadline }}
                    </p>
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
    </section>
</template>

<script>
import moment from "moment"
import { 
    VaListItem, 
    VaListItemSection, 
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
