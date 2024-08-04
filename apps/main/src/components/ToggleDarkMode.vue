<script setup lang="ts">
import { computed } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import { useDark, useToggle } from '@vueuse/core'
import { darkModeKey } from '@/main.ts'
import Button from 'primevue/button'

library.add(faSun, faMoon)

const isDark = useDark({ valueDark: darkModeKey })
const toggleDark = useToggle(isDark)

const iconButton = computed(() => (isDark.value ? faSun : faMoon))
</script>

<template>
    <Button @click="toggleDark()"><FontAwesomeIcon :icon="iconButton" /></Button>
</template>

<style scoped></style>
