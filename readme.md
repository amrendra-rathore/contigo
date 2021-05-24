Prerequisite:
1. Overview of React Component and Props

Task:
1. Install react using following commands:
* npx create-react-app training
* mv training/.* .
* rm -rf training
2. Remove all unwanted files i.e. App.css, logo.svg, index.css
3. Remove irrelevant code from index.js and App.js, and from render method of “App.js”
4. Rename the file App.js to App.jsx, index.js to index.jsx and App.test.js to App.test.jsx
4. Setup following tools:
* editorconfig - Will be used by IDE for indentation purpose.
* linting - Must run with command *npm run lint*, please do install *eslint-config-airbnb* as dev-dependencies.
* husky - “Add lint and test as pre commit and push hooks”, please do install *husky* as dev-dependencies.
* commitzen - must run via command *npm run commit*, and from today onwards use this command to commit your code.
Please find the attachment for editorconfig, linting, and huskyrc configurations.
Make sure “EditorConfig for VS Code” and “ESLint“ Plugins must be installed in VScode.
5. Make sure below commands are working:
* *npm run test*, - Will run existing test cases
* *npm run test:c*, - Will run existing test cases with coverage
* *npm run lint*, - Linting of “src” folder.
* *npm run lint:fix*, - Fix of all lint related problems inside “src” folder.
* *npm run commit* - Must prompt user during during commit.
6. Disable the linting of the serviceWorker.js file using */* eslint-disable */* at the top of the page.
7. Make sure all the lint errors have been fixed.
8. Now create following mentioned filed as shown in the tree structure: https://gyazo.com/f9c7e38c399ddd441fbd050c70cc159a
9. TextField is a component that will render a text input field, and will accept any of the following three props:
* value - string (value will be rendered inside text field)
* error - string (Show the red border with an error message)
* disabled - boolean (disable the text field)
10. TextFieldDemo will be used to print the different flavors of the TextField Component as shown here: https://gyazo.com/299394da8400675e4b036e047cf4e322
11. TextFieldDemo will be rendered inside the App.jsx field.
13. style.js will contain the styling of TextField
14. Index.js file place at the root of components and pages, will be used to export the various components.


Updates : 
1. Created React App named Training.
2. Removed all unwanted files i.e. App.css, logo.svg, index.css
3. Removed irrelevant code from index.js and App.js, and from render method of “App.js”
4. Renamed the file App.js to App.jsx, index.js to index.jsx and App.test.js to App.test.jsx.
5. Was able to setup editorconfig + husky + eslint  - Had issues installing commitzen - Had Issues CREATING HOOKS.
6. Serviceworker.js does not exists anymore after October 2020 update.
7. All linting errors are fixed : Warning exists.
8. Tree structure replicated.
9. 
