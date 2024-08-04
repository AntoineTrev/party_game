<script setup lang="ts">
import Button from 'primevue/button'
import { NavbarAddon } from 'supabase_authentication'

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
    </div>
</template>

<style scoped></style>
