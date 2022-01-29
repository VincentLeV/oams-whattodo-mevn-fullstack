<template>
    <main>
        <AppBar />
        <div class="container">
            <TabMenu @tab-click="tabClick" />

            <QuickTodos 
                v-show="showQuickTodos" 
                @show-edit-todo-modal="openEditTodoModal"
            />
            <Projects v-show="showProjects" />

            <AddDial
                :rotateDial="rotateDial"
                :showContent="showContent"
                @show-form="showForm"
                @toggle-dial="toggleDial"
                v-click-outside="onClickOutside"
            />

            <AddTodoModal 
                :showAddTodoModal="showAddTodoModal" 
                @close-add-todo-modal="closeAddTodoModal" 
                @close-modal="closeModal"
            />

            <EditTodoModal 
                :showEditTodoModal="showEditTodoModal"
                @close-edit-todo-modal="closeEditTodoModal" 
                @close-modal="closeModal"
            />
        </div>
    </main>
</template>

<script>
import vClickOutside from "click-outside-vue3"
import AppBar from "../components/AppBar.vue"
import TabMenu from "../components/TabMenu.vue"
import QuickTodos from "./QuickTodos.vue"
import Projects from "./Projects.vue"
import AddDial from "../components/AddDial/AddDial.vue"
import AddTodoModal from "../components/AddTodo/AddTodoModal.vue"
import EditTodoModal from "../components/EditTodo/EditTodoModal.vue"

export default {
    name: "Main",
    components: {
        AppBar,
        TabMenu,
        QuickTodos,
        Projects,
        AddDial,
        AddTodoModal,
        EditTodoModal
    },
    data() {
        return {
            showQuickTodos: true,
            showProjects: false,
            showAddTodoModal: false,
            showProjectForm: false,
            showEditTodoModal: false, 
            rotateDial: false,
            showContent: false,
        }
    },
    methods: {
        tabClick(title) {
            if (title === "Todos") {
                this.showQuickTodos = true
                this.showProjects = false
            } else if (title === "Projects") {
                this.showQuickTodos = false
                this.showProjects = true
            }
        },
        showForm(name) {
            if (name === "todos") {
                this.showAddTodoModal = true
            } else if (name === "projects") {
                this.showProjectForm = true
            }
        },
        openEditTodoModal() {
            this.isEditMenuOpen = false
            this.showEditTodoModal = true
        },
        closeAddTodoModal() {
            this.showAddTodoModal = false
        },
        closeEditTodoModal() {
            this.showEditTodoModal = false
        },
        closeModal() {
            this.showAddTodoModal = false
            this.showEditTodoModal = false
        },
        toggleDial() {
            this.rotateDial = !this.rotateDial
            this.showContent = !this.showContent
        },
        onClickOutside(e) {
            // console.log(e.target.className)
            if (this.rotateDial === false) {
                this.rotateDial = false
            } else {
                this.rotateDial = !this.rotateDial
            }

            if (this.showContent === false) {
                this.showContent = false
            } else {
                this.showContent = !this.showContent
            } 

            if (e.target.className.includes("fas fa-flag") || e.target.className.includes("priority-text")) {
                this.rotateDial = true
                this.showContent = false
            } 
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
}
</script>
