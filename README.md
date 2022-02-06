# Boilerplate for NPM projects

Boilerplate for new projects using NPM.

I avoid other boilerplates such as create-react-app when possible. When something inevitably breaks, it's hard to know why and I am left none-the-wiser.

### React

React support is pre-wired in the configuration for Babel, ESLint, and Jest but not included as a dependency. The aim is to be compatible with both React and non-React projects.

### Babel

- Used for transpiling from ES20xx into ES5/6.
- Used as transpiler for TypeScript with [babel-plugin-transform-typescript](https://babeljs.io/docs/en/babel-plugin-transform-typescript) and [@babel/eslint-parser](@babel/eslint-parser).
- Using [presets](https://babeljs.io/docs/en/presets/) for react and typescript.

### ESLint

- Using `eslint:recommended`, along with [AirBnB](https://www.npmjs.com/package/eslint-config-airbnb) [rules](https://github.com/airbnb/javascript).
- Using most plugins recommended in [community configs](https://typescript-eslint.io/docs/linting/#community-configs).
- ESLint assumes a browser environment with ES6, not a node or web extension environment. Modify `.eslintrc.js` for other environments.

### TypeScript

- Latest [ESLint plugins for TypeScript](https://typescript-eslint.io/):
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`

### Testing

- Using [Jest](https://jestjs.io/docs/getting-started)
- Support for TypeScript tests.
- ESLint validation using [`plugin:jest/recommended`](https://www.npmjs.com/package/eslint-plugin-jest)
