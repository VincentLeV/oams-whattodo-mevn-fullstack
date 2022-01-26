<template>
    <section v-show="showContent" class="add-dial-content">
        <div class="add-dial-item" @click="showForm(addDialItem.name)">
            <i :class="addDialItem.icon"></i>
        </div>
    </section>
</template>

<script>
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
    methods: {
        showForm(name) {
            this.$emit("show-form", name)
        }
    }
}
</script>
