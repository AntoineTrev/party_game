import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dynamicImport()],
    resolve: {
        preserveSymlinks: true,
        dedupe: ["vue", 'primevue'],
    },
    optimizeDeps: {
        esbuildOptions: {
            tsconfig: 'tsconfig.json',
        },
    },
})
