module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        name: 'react-dom',
        importNames: ['render'],
        message: 'Currently render type definition may be unsafe. safeRender that from @aereal/react-type-safe-render is recommended.',
      },
    ],
  }
};
