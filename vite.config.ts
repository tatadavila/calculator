import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
    build: {
        emptyOutDir: true,
        sourcemap: mode === 'development' ? 'inline' : false,
    },
    envPrefix: 'REACT_APP_',
    resolve: {
        alias: {
            '~': resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: [],
    },
    preview: {
        host: true,
        open: true,
        port: 8080,
    },
    plugins: [react()],
    server: {
        host: true,
    },
}))
