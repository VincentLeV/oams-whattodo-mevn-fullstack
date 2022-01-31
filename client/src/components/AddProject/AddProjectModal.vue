<template>
    <Modal v-show="showAddProjModal">
        <VaCard :bordered="false">
            <VaCardTitle>Add Project</VaCardTitle>
            <VaCardContent>
                <AddProjectForm @close-add-project-modal="this.$emit('close-add-project-modal')" />
            </VaCardContent>
        </VaCard>
    </Modal>
</template>

<script>
import { VaCard, VaCardTitle, VaCardContent } from "vuestic-ui"
import Modal from "../Modal.vue"
import AddProjectForm from "./AddProjectForm.vue"

export default {
    name: "AddProjectModal",
    components: {
        VaCard,
        VaCardTitle,
        VaCardContent,
        Modal,
        AddProjectForm
    },
    props: {
        showAddProjModal: {
            type: Boolean,
            default: false
        }
    }
}
</script>
