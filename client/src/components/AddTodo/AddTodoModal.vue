<template>
    <Modal v-show="showAddTodoModal">
        <VaCard :bordered="false">
            <VaCardTitle>Add Todo</VaCardTitle>
            <VaCardContent>
                <AddTodoForm 
                    @close-add-todo-modal="this.$emit('close-add-todo-modal')" 
                />
            </VaCardContent>
        </VaCard>
    </Modal>
</template>

<script>
import { VaCard, VaCardTitle, VaCardContent } from "vuestic-ui"
import Modal from "../Modal.vue"
import AddTodoForm from "./AddTodoForm.vue"

export default {
    name: "AddTodoModal",
    components: {
        VaCard,
        VaCardTitle,
        VaCardContent,
        Modal,
        AddTodoForm
    },
    props: {
        showAddTodoModal: {
            type: Boolean,
            default: false
        }
    }
}
</script>
