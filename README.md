# react-app-with-lib

This repo is supposed to be a demonstration of the creation of a React Lib using the monorepo strategy.

The steps below were followed to build the example and you can find the commits following those steps.

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

7 - add build script in root `package.json`

8 - create an example component

9 - build the lib
- `yarn build` - it will generate a `lib` folder inside the package

The lib is ready to use. You can publish it to npm (lerna helps that) or use it locally (that's what we're doing soon)

----

### INCLUDE STORYBOOK

10 - add and init storybook
- `yarn add --dev -W @storybook/react`
- `npx sb init` (`-f` if needed)
    - obs: `stories` folder (remove if you want) - this is just some example stories

11 - create story for the component
- change `.storybook/main.js` file to change the place to look for .stories files

12 - run `yarn storybook` and go to `http://localhost:6006`
 - tip: change the component code and see the storybook refreshing as you go

 ----

### INCLUDE REACT APP (CRA)

(needed to remove "webpack" and add "@storybook/addon-docs" to root to make create-react-app work)

13 - `create-react-app packages/<app-name>`
- `cd packages/<app-name>` - you can create a script to run that in the package.json folder
- `yarn start`
    - the command above might have some error because Yarn Workspaces, in that case, run `echo "SKIP_PREFLIGHT_CHECK=true" > .env` - it will ignore the error

14 - add the link between the lib and the app (change package.json for the app)
- run `lerna bootstrap`
- obs: we have to make sure the name of the lib is unique. A tip is to use something like `@my-project-name/lib-name` in the package.json file of the lib

15 - import the component you created into the app and use it

**THAT'S IT!**
WE HAVE OUR [MONOREPO](https://www.toptal.com/front-end/guide-to-monorepos) managed with [LERNA](https://github.com/lerna/lerna), using [YARN WORKSPACES](https://classic.yarnpkg.com/en/docs/workspaces/) to organize the npm packages, with [STORYBOOK](https://storybook.js.org/docs/react/get-started/introduction) for documentation.

---


### What's missing
- [ ] Include tests for the components
- [ ] ....