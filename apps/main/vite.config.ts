import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dynamicImport()],
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
