<template>
    <div class="form-control">
        <label :for="name" class="label">{{ label }}</label>
        <input
            class="input"
            v-model="inputValue"
            :name="name"
            :type="type"
            :pPriority="pPriority"
            :aria-label="type"
        >

        <div 
            class="endornment-container" 
            v-show="endornment"
        >
            <div 
                :class="[priorityColor, priorityColor2]" 
                @click="showMenu"
            >
                <i class="fas fa-flag"></i>
            </div>

            <PriorityMenu 
                :isShowMenu="isShowMenu" 
                @choose-priority="choosePriority" 
                v-click-outside="onClickOutside"
            />
        </div>
    </div>
</template>

<script>
import vClickOutside from "click-outside-vue3"
import PriorityMenu from "./PriorityMenu/PriorityMenu.vue"

export default {
    name: "Input",
    components: {
        PriorityMenu
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },
        modelValue: {
            type: String,
            default: ""
        },
        endornment: {
            type: Boolean,
            default: false
        },
        pPriority: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isShowMenu: false,
            priorityColor: {
                type: String,
                default: ""
            },
            priorityColor2: String
        }
    },
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit("update:modelValue", value)
            }
        }
    },
    updated() {
        switch (this.pPriority) {
        case 3: 
            this.priorityColor2 = "p-high-2"
            break
        case 2: 
            this.priorityColor2 = "p-med-2"
            break
        case 1:
            this.priorityColor2 = "p-low-2"
            break
        default:
            this.priorityColor2 = ""
            break
        }
    },
    methods: {
        showMenu() {
            this.isShowMenu = !this.isShowMenu
        },
        choosePriority(color) {
            this.priorityColor = color
            this.isShowMenu = false
            this.$emit("get-priority", color)
        },
        onClickOutside(e) {
            if (!e.target.className.includes("fas fa-flag")) {
                this.isShowMenu = false
            }
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
}
</script>
