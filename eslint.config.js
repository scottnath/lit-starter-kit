import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { configs as lit } from 'eslint-plugin-lit';
import eslintConfigPrettier from 'eslint-config-prettier';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  eslintConfigPrettier,

  // lint JSON files
  {
    files: ['**/*.json'],
    language: 'json/json',
    ...json.configs.recommended,
    rules: {
      'json/no-duplicate-keys': 'error',
      'no-irregular-whitespace': 'off',
    },
  },

  // lint MD files
  ...markdown.configs.recommended,
  {
    files: ['**/*.md'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },

  // lint JS/TS files
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ...lit['flat/recommended'],
    ...js.configs.recommended,
    rules: {},
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
      'tsconfig.json',
    ],
  },
];
