<template>
    <section>
        <VaList>
            <TodoContainer 
                v-if="todos.length > 0"
                :todos="todos" 
                @show-edit-todo-modal="this.$emit('show-edit-todo-modal')"
            />
            <h2 v-else>No Todo</h2>
        </VaList>
    </section>
</template>

<script>
import { mapState } from "vuex"
import { VaList } from "vuestic-ui"
import TodoContainer from "../components/Todo/TodoContainer.vue"

export default {
    name: "QuickTodos",
    components: {
        VaList,
        TodoContainer,
    },
    created() {
        this.$store.dispatch("getTodos")
    }, 
    computed: mapState(["todos"]),
    updated() {
        this.unsubscribe = this.$store.subscribe((mutation) => {
            if (mutation.type === "EDIT_TODO" || mutation.type === "MARK_AS_COMPLETE") {
                this.$store.dispatch("getTodos")
            }
        })
    },
    methods: {
        close() {
            this.$emit("close")
        },
    },
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 1.5rem
}
</style>
