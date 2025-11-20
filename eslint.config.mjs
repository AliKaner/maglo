import { FlatCompat } from '@eslint/eslintrc';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'unused-imports': pluginUnusedImports,
      'simple-import-sort': pluginSimpleImportSort,
    },
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': 'off',
      'simple-import-sort/imports': 'off',
      'simple-import-sort/exports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'never',
        },
      ],
    },
  },
];

export default eslintConfig;
