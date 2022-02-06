module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // Leave the target to ES2015.
      // { targets: { node: 'current' } },
    ],
    '@babel/preset-typescript',
  ],
};
