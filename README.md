# FHIR-Specimens Front-end Exercise

## Overview

The objective of this web app is to develop a web application that queries a laboratory information system (LIS) for information abut accessioned specimens, retrieves the information in the form of HL7 FAST Healthcare Interoperability Resources and renders a representation of these resources as a dynamic web page for review by pathologists. 

Deliverables:

- [x] Code that implements a web app.
- [x] A `Dockerfile` for building a containerized web server.
- [x] Serves the web app on localhost (http://127.0.0.8080).
- [x] A `README.md` file in Markdown format describing overall approach and design considerations.
- [x] A section of the `README.md` file with instructions for installation, deployment, and testing of the app. 

Functional requirements:

- [x] Query `http//hapi.fhir.org/BaseR4` server and dynamically render render resources.
- [x] Render Specimens as a HTML List.
- [x] Display each item in a box.
- [x] Show the `Specimen.type` and `Specimen.collection.collectedDateTime` to the user.
- [x] Each box should change appearance on hover.
- [x] When a user clicks on a list item, the web app should display `Patient.birthDate` and `Patient.gender`.
- [x] Maintain state and highligh list items that the user already clicked.

Testing: 

- [x] The directory should contain an executable with an entrypoint for running tests.
- [x] Unit tests should be implemented to test React components.
- [x] Unit tests should test React component state changes.

# Approach and Design

## Variables and Interfaces

Since this application uses Typescript, it is imperative that variables be statically typed. This is done primarily with a Typescript `interface`. Below are some of the relevant interfaces in this application:

### Specimen

Consists of a `id`, `type`, `collectedDateTime`, and `patientID` value, as those are the relevant values pulled from the API.

### SpecimenType

Consists of a `system`, `code`, `display`, and `loading` value, as those are the relevant values pulled from the API. Note: since none of these values are guarenteed to exist in the API, they may also take a value of `undefined`.

### Patient

Consists of a `birthDate`, `gender`, and `loading` value, as those are the relevant values pulled from the API.

### SpecimenReducerState 

Consists of: 

`limit`: The limit applied to the API query for unique specimen values.

`page`: The page number the user is viewing, relevant for `offset` calculation

`specimenData`: An array of specimens pulled from the API.

`patientHash`: A hash map of patient id values for storing unique patient IDs 

`specimenFilterList`: An array of functions filter API search results displayed to the user. 

`isFetching`: a boolean value for whether the API is in the process of fetching. Prevents the user from sending multiple API calls at once. 

## Managing State

As with any front-end application that must interface with an API, one of the most important features for code quality, maintainability, and testability is the separation of synchronous processes from asynchronous processes. With that in mind, the controller for this app is based on a carefully architectured dance between `specimenReducer`, `specimenContext`, and the `useEffect` hook, where the logic flows as follows:

### specimenReducer

This is the nuts and bolts of the application. Methods are passed in through the `dispatch` with an enumerated `type` and the appropriate changes to the state are made accordingly. 

### SpecimenContext

The SpecimenContext is what passes the `specimenReducer` values and `dispatch` method to the various components of the App. Simply wrapping the components in a `Provider` and any component that wishes to "subscribe" to particular values or use the `dispatch` method can simple add a `useContext` hook. 

### useEffect

Changes to the `limit` and `page` are detected with a `useEffect` in the `App` component. This triggers a new `fetch` command to update the value of the specimenData.

## Fetching data

Data from the `http//hapi.fhir.org/BaseR4` is requested via `fetch`, a native Javascript HTTP Requests.

### fetchSpecimen

Fetching data is done with a `limit` and an `offset` variable that handles pagination.

Specimens are not guarenteed to have a `Specimen.type` nor a `Specimen.collection.collectionDateTime`. Therefore those values may be set to undefined if they were not returned from the `fetch` query. 

### fetchPatient

Many of the `Patient`s from the `hapi.fhir` database have been deleted as of 10/11/2020. Therefore a string query has been added to the `fetch` API URL in order to account for retreiving the last version of the `Patient` available in the API. This is accounted for with the query: 

`http://hapi.fhir.org/baseR4/Patient/${id}/_history?_pretty=true`

## Unit tests

There are two sets of unit tests:

`SpecimenBox.test.tsx` and `SpecimenDisplay.test.tsx` are made to test the react component renders information displays its state properly.

Tests within `SpecimenReducer` ensure that the `specimenReducer` hook is functioning properly in managing the app's state. With time permitting, I would look to add future tests that ensure other state variables within the `specimenReducer` are functioning properly. 

# Deployment and Testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

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
