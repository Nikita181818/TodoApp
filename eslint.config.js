import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignores the 'dist' directory
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Include .ts and .tsx files as well
    languageOptions: {
      ecmaVersion: 2020, // Use latest ECMAScript version
      globals: globals.browser, // Use global browser environment
      parserOptions: {
        ecmaVersion: 'latest', // Latest ECMAScript version
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
        sourceType: 'module', // Use ES modules
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version (works well for React 18+)
      },
    },
    plugins: {
      react, // React plugin
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin (for fast refresh support)
    },
    rules: {
      // Use the recommended ESLint, React, React hooks, and JSX-runtime rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Additional custom rules
      'react/jsx-no-target-blank': 'off', // Turn off rule for opening links with target="_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Allow JSX without React import (React 17+)
      'react/react-in-jsx-scope': 'off', // React 17+ JSX Transform doesn't require React import

      // Avoid unused variables error for React import (React 18+ doesn't require it)
      'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
    },
  },
];
