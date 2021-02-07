# FHIR-Specimens Front-end Exercise

## Overview

The objective of this web app is to develop a web application that queries a laboratory information system (LIS) for information abut accessioned specimens, retrieves the information in the form of HL7 FAST Healthcare Interoperability Resources and renders a representation of these resources as a dynamic web page for review by pathologists. 

Deliverables:

- [x] Code that implements a web app.
- [x] A `Dockerfile` for building a containerized web server.
- [x] Serves the web app on localhost (http://127.0.0.8080).
- [ ] A `README.md` file in Markdown format describing overall approach and design considerations.
- [ ] A section of the `README.md` file with instructions for installation, deployment, and testing of the app. 

Functional requirements:

- [x] Query `http//hapi.fhir.org/BaseR4` server and dynamically render render resources.
- [x] Render Specimens as a HTML List.
- [x] Display each item in a box.
- [x] Show the `Specimen.type` and `Specimen.collection.collectedDateTime` to the user.
- [x] Each box should change appearance on hover.
- [x] When a user clicks on a list item, the web app should display `Patient.birthDate` and `Patient.gender`.
- [x] Maintain state and highligh list items that the user already clicked.

Testing: 

- [ ] The directory should contain an executable with an entrypoint for running tests.
- [ ] Unit tests should be implemented to test React components.
- [ ] Unit tests should test React component state changes.

# Approach and Design

As with any front-end application that must interface with an API, one of the most important features for code quality, maintainability, and testability is the separation of synchronous processes from asynchronous processes. With that in mind, the controller for this app is based on a carefully architectured dance between `specimenReducer`, `specimenContext`, and the `useEffect` hook, where the logic flows as follows:

### specimenReducer



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
