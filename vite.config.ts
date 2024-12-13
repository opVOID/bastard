import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ENV_PREFIX = ['VITE_'];

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  server: { port: 4001, host: false },
  assetsInclude: ["**/*.glb"],
  define: {
    'process.env.ANCHOR_BROWSER': true,
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      fs: require.resolve('browserify-fs'), // Add this line for fs alias
    },
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}));