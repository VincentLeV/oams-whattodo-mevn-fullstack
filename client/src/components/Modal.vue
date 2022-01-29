<template>
    <article class="flex modal-container">
        <div class="modal-backdrop" @click="close"></div>
        <div class="modal">
            <slot></slot>
        </div>
    </article>
</template>

<script>
export default {
    name: "Modal",
    methods: {
        close() {
            this.$emit("close-modal")
        }
    }
}
</script>
