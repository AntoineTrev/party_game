import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dynamicImport(),
        VueI18nPlugin({
            runtimeOnly: false,
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
        }),
    ],
    resolve: {
        preserveSymlinks: true,
        dedupe: ['vue', 'primevue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            tsconfig: 'tsconfig.json',
        },
    },
})
