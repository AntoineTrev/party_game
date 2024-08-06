<script setup lang="ts">
import { watch } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { palette, updatePreset } from '@primevue/themes'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { useColorMode, useCycleList } from '@vueuse/core'

import Select from 'primevue/select'

</script>

<template>
    <Select
        v-model="$i18n.locale"
        class="language_select"
        :options="$i18n.availableLocales"
        option-label="name">
        <template #value="slotProps">
            <country-flag :country='slotProps.value' size='small'/>
            <span class="language_name">{{ (slotProps.value as string).toUpperCase() }}</span>
        </template>
        <template #option="slotProps">
            <country-flag :country='slotProps.option' size='small'/>
            <span class="language_name">{{ (slotProps.option as string).toUpperCase() }}</span>
        </template>
    </Select>
</template>

<style lang="scss">
.language_select .p-select-label {
    padding-right: 0;
}
</style>

<style lang="scss" scoped>
.language_name {
    margin-left: 10px;
}
</style>
