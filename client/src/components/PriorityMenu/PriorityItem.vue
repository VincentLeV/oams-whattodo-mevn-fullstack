<template>
    <div class="priority-item" @click="onClick(priority.color)">
        <i :class="[priority.color, 'fas fa-flag']"></i>
        <span class="priority-text">{{ priority.name }}</span>
    </div>
</template>

<script>
export default {
    name: "PriorityItem",
    props: {
        priority: {
            type: Object
        }
    },
    methods: {
        onClick(color) {
            this.$emit("choose-priority", color)
        }
    }
}
</script>
