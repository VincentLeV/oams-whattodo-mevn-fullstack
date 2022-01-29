import { createApp } from "vue"
import { VuesticPlugin } from "vuestic-ui" // <-
import vClickOutside from "click-outside-vue3"
import store from "./store"
import App from "./App.vue"
import "vuestic-ui/dist/vuestic-ui.css"
import "./styles/styles.css"

createApp(App)
    .use(store)
    .use(VuesticPlugin)
    .use(vClickOutside)
    .mount("#app")
