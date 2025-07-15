/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { init } from '@telegram-apps/sdk-vue';


// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

import { TonConnectUIPlugin } from '@townsquarelabs/ui-vue'

init();
const app = createApp(App)
app.use(VueAxios, axios)
app.use(TonConnectUIPlugin,{ manifestUrl: "https://raw.githubusercontent.com/nikiforidi/picovpn-app/refs/heads/release/tonconnect-manifest.json" })
registerPlugins(app)

app.mount('#app')
