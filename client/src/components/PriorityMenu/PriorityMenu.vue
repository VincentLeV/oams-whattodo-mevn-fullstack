<template>
    <VaCard outlined v-show="isShowMenu" class="priority-menu">
        <VaCardContent>
            <PriorityItem 
                v-for="(priority, i) in priorities" 
                :key="i"
                :priority="priority"
                @choose-priority="choosePriority"
            />
        </VaCardContent>
    </VaCard>
</template>

<script>
import { VaCard, VaCardContent } from "vuestic-ui"
import PriorityItem from "./PriorityItem.vue"

export default {
    name: "PriorityMenu",
    components: {
        VaCard,
        VaCardContent,
        PriorityItem
    },
    props: {
        isShowMenu: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        priorities() {
            return this.$store.getters.allPriorities
        }
    },
    methods: {
        choosePriority(color) {
            this.$emit("choose-priority", color)
        }
    }
}
</script>
