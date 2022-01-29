<template>
    <div class="edit-todo-item" @click="this.$emit('item-clicked', text)">
        <i :class="[icon, 'fas']"></i>
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: "EditTodoMenu",
    props: {
        text: {
            type: String,
            default: ""
        }, 
        icon: {
            type: String,
            default: ""
        }
    }
}
</script>
