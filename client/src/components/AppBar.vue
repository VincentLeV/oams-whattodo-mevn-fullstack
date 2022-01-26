<template>
    <header>
        <VaNavbar class="mb-2" color="primary">
            <template #left>
                <VaNavbarItem>
                    WhatToDo
                </VaNavbarItem>
            </template>
        </VaNavbar>
    </header>
</template>

<script>
import { VaNavbar, VaNavbarItem } from "vuestic-ui"

export default {
    name: "AppBar",
    components: {
        VaNavbar,
        VaNavbarItem,
    },
}
</script>
