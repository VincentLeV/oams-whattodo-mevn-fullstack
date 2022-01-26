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
    data() {
        return {
            priorities: [
                {
                    name: "High",
                    color: "p-high"
                },
                {
                    name: "Medium",
                    color: "p-med"
                },
                {
                    name: "Low",
                    color: "p-low"
                }
            ]
        }
    },
    methods: {
        choosePriority(color) {
            this.$emit("choose-priority", color)
        }
    }
}
</script>
