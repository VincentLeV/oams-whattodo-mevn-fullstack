<template>
    <div class="add-dial-container">
        <AddDialItem 
            v-for="(item, i) in items"
            :key="i"
            :addDialItem="item"
            :showContent="showContent"
            @show-form="$emit('show-form', item.name)"
        />

        <button 
            class="add-dial" 
            @click.prevent="toggleDial" 
        >
            <i :class="rotateDial ? 'fas fa-plus rotate' : 'fas fa-plus'"></i>
        </button>
    </div>
</template>

<script>
import AddDialItem from "./AddDialItem.vue"

export default {
    name: "AddDial",
    components: {
        AddDialItem
    },
    props: {
        rotateDial: {
            type: Boolean,
            default: false
        },
        showContent: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            items: [
                {
                    name: "projects",
                    icon: "fas fa-project-diagram"
                },
                {
                    name: "todos",
                    icon: "fas fa-clipboard-list"
                }
            ]
        }
    },
    methods: {
        toggleDial() {
            this.$emit("toggle-dial")
        }
    }
}
</script>
