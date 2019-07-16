## Mini-Kanban

This is an example web application of using useReducer of React Hooks as an alternative to Redux.

I used [Create React App](https://github.com/facebook/create-react-app) to create this application.

## Usage

It's a web-application and keeps your data inside localStorage. You can use as a real application as long as GitHub serves open-source projects :)

## Install & Run

You can play with the project on your local environment after running these commands:

`yarn` or `npm install`

`yarn start` or `npm start`

## Explanation

I have only one dependency for drag & drop functionality `react-beautiful-dnd`.

I used css file of bootstrap in index.html for styling.

First place to look would be Store.js, it shows how I handled useReducer functionality and persisted data inside localStorage.

I created a sub-application called Tasks inside my source folder. It's easily pluggable to anyproject, it has only Store.js dependency.

> inside Tasks application:

I made a file called stages.js to make generic stages for the kanban board. If you'd like to make another stage, you just need to add a new stage inside stages.js file.

I connected to context data only from Container.js to show every data change functionality in one place. It would be nice to use factory function to get dispatch and put whole action creators inside actions.js but I left it like this after seeing it's not necessary step :)
