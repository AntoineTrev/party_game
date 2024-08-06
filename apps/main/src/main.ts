import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'
import { i18n } from './i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import supabase_authentication from 'supabase_authentication'
import CountryFlag from 'vue-country-flag-next'

export const darkModeKey = 'toggle-dark-mode'
const app = createApp(App)

app.use(supabase_authentication, { register: false }) // put this in top of all app.use (override primevue unstyle for example)
app.use(i18n)
app.use(PrimeVue, {
    theme: {
        preset: definePreset(Aura),
        options: {
            darkModeSelector: `.${darkModeKey}`,
        },
    },
})

app.component('CountryFlag', CountryFlag)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
