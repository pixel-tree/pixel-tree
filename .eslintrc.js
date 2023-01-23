module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: [
      './tsconfig.json',
      './apps/*/tsconfig.json',
      './packages/*/tsconfig.json'
    ],
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.ts',
          '.tsx'
        ]
      }
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'off'
    ],
    '@typescript-eslint/triple-slash-reference': [
      'off'
    ],
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/await-thenable': [
      'off'
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'off'
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
