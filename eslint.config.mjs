import js from '@eslint/js'
import ts from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['dist/', 'node_modules/', 'coverage/', '**/.astro/'] },
  { files: ['**/*.{ts,tsx}'], ...js.configs.recommended },
  ...ts.configs.recommended.map((c) => ({ files: ['**/*.{ts,tsx}'], ...c })),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
]
