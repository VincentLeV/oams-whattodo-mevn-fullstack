<template>
    <section v-show="showContent" class="add-dial-content">
        <VaPopover
            placement="right"
            :message="'Add ' + addDialItem.name"
        >
            <div class="add-dial-item" @click="showForm(addDialItem.name)">
                <i :class="addDialItem.icon"></i>
            </div>
        </VaPopover>
    </section>
</template>

<script>
import { VaPopover } from "vuestic-ui"

export default {
    name: "AddDialItem",
    props: {
        showContent: {
            type: Boolean,
            default: false
        },
        addDialItem: {
            type: Object
        }
    },
    components: {
        VaPopover
    },
    methods: {
        showForm(name) {
            this.$emit("show-form", name)
            if (name === "todos") {
                this.$store.dispatch("setOriginality", name)
            }
        }
    }
}
</script>
