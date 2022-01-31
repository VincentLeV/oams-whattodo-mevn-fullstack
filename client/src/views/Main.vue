<template>
    <main>
        <AppBar />
        <div class="container">
            <TabMenu @tab-click="tabClick" />

            <QuickTodos 
                v-show="showQuickTodos" 
                @show-edit-todo-modal="openEditTodoModal"
            />

            <Projects 
                v-show="showProjects" 
                @show-add-todo-modal="openAddTodoModal"
                @show-edit-todo-modal="openEditTodoModal"
                @show-add-proj-modal="showAddProjModal"
                @show-edit-proj-modal="openEditProjModal"
            />

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

            <AddProjectModal 
                :showAddProjModal="showAddProjModal"
                @close-add-project-modal="closeAddProjectModal" 
                @close-modal="closeModal"
            />

            <EditTodoModal 
                :showEditTodoModal="showEditTodoModal"
                @close-edit-todo-modal="closeEditTodoModal" 
                @close-modal="closeModal"
            />

            <EditProjectModal 
                :showEditProjModal="showEditProjModal"
                @close-edit-proj-modal="closeEditProjModal" 
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
import AddProjectModal from "../components/AddProject/AddProjectModal.vue"
import EditTodoModal from "../components/EditTodo/EditTodoModal.vue"
import EditProjectModal from "../components/EditProject/EditProjectModal.vue"

export default {
    name: "Main",
    components: {
        AppBar,
        TabMenu,
        QuickTodos,
        Projects,
        AddDial,
        AddTodoModal,
        AddProjectModal,
        EditTodoModal,
        EditProjectModal
    },
    data() {
        return {
            showQuickTodos: true,
            showProjects: false,
            showAddTodoModal: false,
            showAddProjModal: false,
            showEditTodoModal: false, 
            showEditProjModal: false,
            rotateDial: false,
            showContent: false
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
                this.showAddProjModal = true
            }
        },
        openEditTodoModal() {
            this.isEditMenuOpen = false
            this.showEditTodoModal = true
        },
        openAddTodoModal() {
            this.showAddTodoModal = true
        },
        openEditProjModal() {
            this.showEditProjModal = true
        },
        closeAddTodoModal() {
            this.showAddTodoModal = false
        },
        closeAddProjectModal() {
            this.showAddProjModal = false
        },
        closeEditTodoModal() {
            this.showEditTodoModal = false
        },
        closeEditProjModal() {
            this.showEditProjModal = false
        },
        closeModal() {
            this.showAddTodoModal = false
            this.showAddProjModal = false
            this.showEditTodoModal = false
            this.showEditProjModal = false
        },
        toggleDial() {
            this.rotateDial = !this.rotateDial
            this.showContent = !this.showContent
        },
        onClickOutside(e) {
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
