<template>
    <Modal v-show="showEditProjModal">
        <VaCard :bordered="false">
            <VaCardTitle>Edit Project</VaCardTitle>
            <VaCardContent>
                <EditProjectForm @close-edit-proj-modal="this.$emit('close-edit-proj-modal')" />
            </VaCardContent>
        </VaCard>
    </Modal>
</template>

<script>
import { VaCard, VaCardTitle, VaCardContent } from "vuestic-ui"
import Modal from "../Modal.vue"
import EditProjectForm from "./EditProjectForm.vue"

export default {
    name: "EditProjectModal",
    components: {
        VaCard,
        VaCardTitle,
        VaCardContent,
        Modal,
        EditProjectForm
    },
    props: {
        showEditProjModal: {
            type: Boolean,
            default: false
        }
    }
}
</script>
