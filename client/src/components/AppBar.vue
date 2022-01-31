<template>
    <header>
        <VaNavbar class="mb-4 appbar" color="primary" shape>
            <template #left>
                <VaNavbarItem>
                    <InlineSvg 
                        title="App Logo"
                        :src="require('../assets/app.svg')"
                        class="app-logo"
                    />
                </VaNavbarItem>
            </template>
            <template #center>
                <VaNavbarItem>
                    WhatToDo
                </VaNavbarItem>
            </template>
            <template #right>
                <VaNavbarItem>
                    <a href="https://www.vincentle.me/" target="_blank">
                        <InlineSvg 
                            title="App Logo"
                            :src="require('../assets/logo-white.svg')"
                            class="my-logo"
                        />
                        <p class="hidden">Hidden</p>
                    </a>
                </VaNavbarItem>
            </template>
        </VaNavbar>
    </header>
</template>

<script>
import { VaNavbar, VaNavbarItem } from "vuestic-ui"
import InlineSvg from "vue-inline-svg"

export default {
    name: "AppBar",
    components: {
        VaNavbar,
        VaNavbarItem,
        InlineSvg
    },
}
</script>
