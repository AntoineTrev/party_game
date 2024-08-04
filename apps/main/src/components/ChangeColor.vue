<script setup lang="ts">
import { watch } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { palette, updatePreset } from '@primevue/themes'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { useColorMode, useCycleList } from '@vueuse/core'

import Button from 'primevue/button'

library.add(faPalette)

type Color = 'blue' | 'emerald' | 'red' | 'amber' | 'teal' | 'fuchsia' | 'rose' | 'auto'
const colorList: Color[] = ['blue', 'emerald', 'red', 'amber', 'teal', 'fuchsia', 'rose']
const defaultColor: Color = 'blue'

const color = useColorMode({
    attribute: 'color',
    modes: colorList.reduce((dict, value) => Object.assign(dict, { [value]: value }), {}),
})

const { state, next } = useCycleList(colorList, { initialValue: color })

watch(state, (value: Color) => {
    color.value = value
    changeColorInPreset(value)
})

const changeColorInPreset = (color: Color) => {
    const colorSelected: Color = color == 'auto' ? defaultColor : color
    const paletteColor = palette(`{${colorSelected}}`)
    updatePreset({
        semantic: {
            primary: {
                50: paletteColor[50],
                100: paletteColor[100],
                200: paletteColor[200],
                300: paletteColor[300],
                400: paletteColor[400],
                500: paletteColor[500],
                600: paletteColor[600],
                700: paletteColor[700],
                800: paletteColor[800],
                900: paletteColor[900],
                950: paletteColor[950],
            },
            colorScheme: {
                light: {
                    primary: {
                        color: paletteColor[950],
                        inverseColor: '#ffffff',
                        hoverColor: paletteColor[900],
                        activeColor: paletteColor[800],
                    },
                    highlight: {
                        background: paletteColor[950],
                        focusBackground: paletteColor[700],
                        color: '#ffffff',
                        focusColor: '#ffffff',
                    },
                    surface: {
                        0: '#ffffff',
                        50: paletteColor[50],
                        100: paletteColor[100],
                        200: paletteColor[200],
                        300: paletteColor[300],
                        400: paletteColor[400],
                        500: paletteColor[500],
                        600: paletteColor[600],
                        700: paletteColor[700],
                        800: paletteColor[800],
                        900: paletteColor[900],
                        950: paletteColor[950],
                    },
                },
                dark: {
                    primary: {
                        color: paletteColor[50],
                        inverseColor: paletteColor[950],
                        hoverColor: paletteColor[100],
                        activeColor: paletteColor[200],
                    },
                    highlight: {
                        background: 'rgba(250, 250, 250, .16)',
                        focusBackground: 'rgba(250, 250, 250, .24)',
                        color: 'rgba(255,255,255,.87)',
                        focusColor: 'rgba(255,255,255,.87)',
                    },
                    surface: {
                        0: '#ffffff',
                        50: '{zinc.50}',
                        100: '{zinc.100}',
                        200: '{zinc.200}',
                        300: '{zinc.300}',
                        400: '{zinc.400}',
                        500: '{zinc.500}',
                        600: '{zinc.600}',
                        700: '{zinc.700}',
                        800: '{zinc.800}',
                        900: '{zinc.900}',
                        950: '{zinc.950}',
                    },
                },
            },
        },
    })
}
</script>

<template>
    <Button @click="next()"><FontAwesomeIcon :icon="faPalette" /></Button>
</template>

<style scoped></style>
