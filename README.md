# react-app-with-lib

### CREATE THE MONOREPO AND THE LIB

1 - npx lerna init
2 - edit `lerna.json` to use yarn workspaces
3 - add babel dependencies with yarn
- `yarn add --dev -W @babel/cli @babel/core @babel/preset-react @babel/preset-env babel-core@7.0.0-bridge.0 babel-loader babel-plugin-styled-components webpack`

4 - add `babel.config.js`
5 - add react
- `yarn add --dev -W react react-dom styled-components`

6 - create new package
- `npx lerna create <package_name>`

7 - add build script in root package.json
8 - create a example component
9 - build the lib
- `yarn build` - it will generate a `lib` folder inside the package

The lib is ready to use. You can publish it to npm (lerna helps that) or use it locally (that's what we're doing soon)

----

### INCLUDE STORYBOOK

10 - add and init storybook
- `yarn add --dev -W @storybook/react`
- `cd packages/components-lib`
- `npx sb init` (`-f` if needed)
    - obs: `stories` folder (remove if you want) - this is just some example stories

11 - create story for the component
- change `.storybook/main.js` file to change the place to look for .stories files