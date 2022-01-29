<template>
    <Modal v-show="showEditTodoModal">
        <VaCard :bordered="false">
            <VaCardTitle>Edit Todo</VaCardTitle>
            <VaCardContent >
                <EditTodoForm @close-edit-todo-modal="this.$emit('close-edit-todo-modal')"/>
            </VaCardContent>
        </VaCard>
    </Modal>
</template>

<script>
import { VaCard, VaCardTitle, VaCardContent } from "vuestic-ui"
import Modal from "../Modal.vue"
import EditTodoForm from "./EditTodoForm.vue"

export default {
    name: "EditTodoModal",
    components: {
        VaCard,
        VaCardTitle,
        VaCardContent,
        Modal,
        EditTodoForm
    },
    props: {
        showEditTodoModal: {
            type: Boolean,
            default: false
        }
    }
}
</script>
