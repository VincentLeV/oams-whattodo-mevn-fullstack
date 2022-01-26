<template>
    <div class="form-control">
        <label :for="name">{{ label }}</label>
        <input
            v-model="inputValue"
            :name="name"
            :type="type"
            :aria-label="type"
        >

        <div class="endornment-container" v-show="endornment">
            <div 
                :class="[priorityColor, 'endornment']" 
                @click="showMenu"
            >
                <i class="fas fa-flag"></i>
            </div>

            <PriorityMenu 
                :isShowMenu="isShowMenu" 
                @choose-priority="choosePriority" 
            />
        </div>
    </div>
</template>

<script>
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
        }
    },
    data() {
        return {
            isShowMenu: false,
            priorityColor: {
                type: String,
                default: ""
            }
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
    methods: {
        showMenu() {
            this.isShowMenu = !this.isShowMenu
        },
        choosePriority(color) {
            this.priorityColor = color
            this.isShowMenu = false
            this.$emit("get-priority", color)
        }
    }
}
</script>
