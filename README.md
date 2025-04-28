project overview

Backend: Quart (python 3.12)

Frontend: Vite framework with React (typescript)
Style: FluentUI/react-components

We can not use inline styles, must use .css sheets.

Resources:
Vite: https://vite.dev/guide/
React: https://react.dev/learn
Typescript: https://www.typescriptlang.org/docs/
FluentUI: https://react.fluentui.dev/?path=/docs/concepts-developer-quick-start--docs
Note there are two versions, the older v8 is fluentui/react
the newer v9 components are imported via fluentui/react-components. 
We are trying to move everything to v9 so you may see some older imports from fluentui/react still, but anything new should be using fluentui/react-components
Icons: https://react.fluentui.dev/?path=/docs/icons-catalog--docs

General info:
we have both a frontend and backend in app. The frontend is used during development. when we run npm run build it builds it to the app/backend/static folder. when the app is deployed to azure only the backend folder is used.

To Start:
Open a terminal and go to a folder where you want to save this project.
Clone this repo locally: git clone .
Open in vscode: code .