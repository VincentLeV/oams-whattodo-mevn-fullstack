<template>
    <button :type="type" class="button">
        {{ name.toUpperCase() }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        name: {
            type: String,
            default: "Button"
        },
        type: {
            type: String,
            default: "submit"
        }
    }
}
</script>
