import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: process.env.PORT || 3000,
    },
});
