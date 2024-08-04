<script setup lang="ts">
import Button from 'primevue/button'
import { NavbarAddon } from 'supabase_authentication'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun } from '@fortawesome/free-regular-svg-icons'

library.add(faSun)

console.log(Button)

const toggleDarkMode = () => {
    const element = document.querySelector('html')
    if (!element) {
        return
    }
    element.classList.toggle('toggle-dark-mode')
}
</script>

<template>
    <div>
        <Button label="Submit" @click="toggleDarkMode" />
        <NavbarAddon />
        <FontAwesomeIcon :icon="['far', 'sun']" />
    </div>
</template>

<style scoped></style>
