<template>
    <Modal v-show="showTodoForm">
        <VaCard :bordered="false">
            <VaCardTitle>Add Todo</VaCardTitle>
            <VaCardContent>
                <AddTodoForm :showTodoForm="showTodoForm" @close="close" />
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
        showTodoForm: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close() {
            this.$emit("close")
        }
    }
}
</script>
