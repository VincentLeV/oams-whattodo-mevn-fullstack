<template>
    <section>
        <VaAccordion
            class="project-accordion"
            v-model="accordion"
            multiply
        >
            <ProjectContainer
                v-if="projects.length > 0"
                :projects="projects"
                @choose-project="chooseProject"
                @from-project="this.$emit('from-project')"
                @show-add-todo-modal="this.$emit('show-add-todo-modal')"
                @show-edit-todo-modal="this.$emit('show-edit-todo-modal')"
                @show-edit-proj-modal="this.$emit('show-edit-proj-modal')"
            />
            <h2 v-else>No Project</h2>
        </VaAccordion>
    </section>
</template>

<script>
import { mapState } from "vuex"
import { VaAccordion } from "vuestic-ui"
import ProjectContainer from "../components/Project/ProjectContainer.vue"

export default {
    name: "Projects",
    components: {
        VaAccordion,
        ProjectContainer
    },
    data() {
        return {
            accordion: []
        }
    },
    created() {
        this.$store.dispatch("getProjects")
    }, 
    mounted() {
        this.accordion = new Array(this.projects.length).fill(false)
    },
    updated() {
        this.unsubscribe = this.$store.subscribe((mutation) => {
            if (mutation.type === "UPDATE_PROJECT") {
                this.$store.dispatch("getProjects")
            }
        })
    },
    computed: mapState(["projects"]),
    methods: {
        chooseProject(project) {
            this.$store.dispatch("setSelectedProject", project)
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 1.5rem
}
</style>
