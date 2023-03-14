module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Imports de librerías integradas en Node.js
          'external', // Imports de librerías externas
          'internal', // Imports del proyecto usando el prefijo "@/path"
          'parent', // Imports usando el prefijo "../"
          'sibling', // Imports usando el prefijo "./"
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
};
