<template>
    <VaTabs stateful grow>
        <template #tabs>
            <VaTab
                v-for="title in titles"
                :name="title.name"
                :key="title.name"
                @click="onClick(title)"
            >
                <i :class="[title.icon, 'fas icon']"></i>
                {{ title.name }}
            </VaTab>
        </template>
    </VaTabs>
</template>

<script>
import { VaTabs, VaTab } from "vuestic-ui"

export default {
    name: "TabMenu",
    components: {
        VaTabs,
        VaTab
    },
    data() {
        return {
            titles: [
                {
                    name: "Todos",
                    icon: "fa-list-alt"
                },
                {
                    name: "Projects",
                    icon: "fa-project-diagram"
                }
            ]
        }
    },
    methods: {
        onClick(title) {
            this.$emit("tab-click", title.name)
        }
    }
}
</script>

<style scoped>
.icon {
    margin: 0 10px 0 0
}
</style>
