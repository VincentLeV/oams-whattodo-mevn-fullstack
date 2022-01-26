<template>
    <main>
        <AppBar />
        <div class="container">
            <TabMenu @tab-click="tabClick" />
            <QuickTodos 
                v-show="showQuickTodos" 
                :showTodoForm="showTodoForm" 
                @close="close"
            />
            <Projects v-show="showProjects" />
            <AddDial
                :rotateDial="rotateDial"
                :showContent="showContent"
                @show-form="showForm"
                @toggle-dial="toggleDial"
                v-click-outside="onClickOutside"
            />
            <!-- <AddTodoModal 
                :showTodoForm="showTodoForm"
                @close="close"
            /> -->
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
// import AddTodoModal from "../components/AddTodo/AddTodoModal.vue"

export default {
    name: "Main",
    components: {
        AppBar,
        TabMenu,
        QuickTodos,
        Projects,
        AddDial,
        // AddTodoModal
    },
    data() {
        return {
            showQuickTodos: true,
            showProjects: false,
            showTodoForm: false,
            showProjectForm: false,
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
                this.showTodoForm = true
            } else if (name === "projects") {
                this.showProjectForm = true
            }
        },
        close() {
            this.showTodoForm = false
            this.rotateDial = false
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

            // if (e.target.className.includes("fas fa-flag")) {
            //     this.rotateDial = true
            //     this.showContent = true
            // } 
            if (e.target.className.includes("modal-backdrop")) {
                this.showTodoForm = false
            } else {
                this.rotateDial = true
            }
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
}
</script>
