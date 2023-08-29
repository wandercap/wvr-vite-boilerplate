/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const COVERAGE = 80;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    watch: false,
    environment: 'jsdom',
    setupFiles: ['./spec/config/vitest.setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov'],
      branches: COVERAGE,
      functions: COVERAGE,
      lines: COVERAGE,
      statements: COVERAGE,
    },
  },
});
