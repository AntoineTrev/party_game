<script setup lang="ts">
import ToggleDarkMode from '@/components/ToggleDarkMode.vue'
import ChangeColor from '@/components/ChangeColor.vue'
import ChangeLanguage from '@/components/ChangeLanguage.vue'
import { NavbarAddon } from 'supabase_authentication'
</script>

<template>
    <ToggleDarkMode />
    <ChangeColor />
    <ChangeLanguage />
    <NavbarAddon />
    {{ $t('test') }}
</template>

<style scoped></style>
