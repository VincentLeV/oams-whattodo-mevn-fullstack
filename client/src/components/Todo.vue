<template>
    <VaListItem class="todo">
        <VaListItemSection @click="completeTodo">
            <form>
                <div class="form-control">
                    <input 
                        type="checkbox"
                        name="description" 
                        v-model="checkboxValue" 
                        aria-label="todo-description"
                        class="checkbox"
                    >
                    <label 
                        for="description" 
                        :class="[checkboxValue ? 'isCompleted' : '', 'ml-5']"
                    >
                        {{ todo.description }}
                    </label>
                </div>
            </form>

            <VaListItemSection class="todo-info ml-5 mt-1">
                <VaListItemLabel :class="[color, 'mr-2']">
                    <i class="fas fa-flag"></i>
                </VaListItemLabel>
                <VaListItemLabel class="todo-description">
                    {{ formattedDeadline }}
                </VaListItemLabel>
            </VaListItemSection>
        </VaListItemSection>
        
        <VaListItemSection icon class="todo-more-icon">
            <i class="fas fa-ellipsis-h"></i>
        </VaListItemSection>
    </VaListItem>
</template>

<script>
import moment from "moment"
import { 
    VaListItem, 
    VaListItemSection, 
    VaListItemLabel,
} from "vuestic-ui"

export default {
    name: "Todo",
    props: {
        todo: Object
    },
    components: {
        VaListItem,
        VaListItemSection,
        VaListItemLabel
    },
    data() {
        return {    
            checkboxValue: this.todo.isComplete,
            color: { type: String },
            formattedDeadline: this.todo.deadline
        }
    },
    created() {
        this.formattedDeadline = moment(this.todo.deadline).format("DD-MM-YYYY hh:mm A")
        switch (this.todo.priority) {
        case 1:
            this.color = "p-low"
            break
        case 2:
            this.color = "p-med"
            break
        case 3: 
            this.color = "p-high"
            break
        default:
            this.color = ""
        }
    },
    methods: {
        completeTodo() {
            this.checkboxValue = !this.checkboxValue
        }
    }
}
</script>
