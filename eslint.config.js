import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { configs } from 'eslint-plugin-lit';
import eslintConfigPrettier from 'eslint-config-prettier';
import json from '@eslint/json';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      json,
    },
  },
  // lint JSON files
  {
    files: ['**/*.json'],
    language: 'json/json',
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ...configs['flat/recommended'],
    rules: {
      'no-unused-vars': 'error',
    },
  },

  {
    ignores: [
      '.vscode/*',
      'cdn/*',
      'dist/*',
      'eslint/*',
      'public/*',
      'react/*',
      'types/*',
      'custom-elements.json',
      'vscode.css-custom-data.json',
      'vscode.html-custom-data.json',
      'web-types.json',
      'package-lock.json',
      'package.json',
      'tsconfig.json',
      'README.md',

    ],
  },
];
