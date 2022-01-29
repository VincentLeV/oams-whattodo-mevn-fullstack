<template>
    <VaCard 
        class="edit-todo-menu" 
        v-show="isEditMenuOpen" 
        v-click-outside="onClickOutside"
    >
        <VaCardTitle></VaCardTitle>
        <VaCardContent>
            <EditTodoItem 
                icon="fa-edit" 
                text="Edit" 
                @item-clicked="showEditTodoModal" 
            />
            <EditTodoItem 
                icon="fa-trash" 
                text="Delete" 
                @item-clicked="deleteTodo" 
            />
        </VaCardContent>
    </VaCard>
</template>

<script>
import vClickOutside from "click-outside-vue3"
import { VaCard, VaCardTitle, VaCardContent } from "vuestic-ui"
import EditTodoItem from "./EditTodoItem.vue"

export default {
    name: "EditTodoMenu",
    components: {
        VaCard,
        VaCardTitle,
        VaCardContent,
        EditTodoItem
    },
    props: {
        isEditMenuOpen: {
            type: Boolean
        },
        todo: Object
    },
    methods: {
        deleteTodo() {
            if (window.confirm("Are you sure?")) {
                this.$store.dispatch("deleteTodo", this.$store.getters.selectedTodo.id)
            }
            this.$emit("click-outside-menu")
        },
        showEditTodoModal() {
            this.$emit("show-edit-todo-modal")
        },
        onClickOutside(e) {
            if (!e.target.className.includes("fas fa-ellipsis-h")) {
                this.$emit("click-outside-menu")
            }
        },
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
}
</script>
