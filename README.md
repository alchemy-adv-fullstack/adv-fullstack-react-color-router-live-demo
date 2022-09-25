# color-router

## Demo

[Color Router](https://color-router.netlify.app/)

## Getting Started

Use [the React base template](https://github.com/alchemycodelab/react-base-template) to get started.

### Learning Objectives

- Use the `useParams` hook to get values from routes
- Use the `Switch` Component to render particular components
- Create a dynamic `Route` component that accepts multiple parameters

### Description

For this deliverable, you should create a dynamic color generator using React Router routes and parameters.

### Acceptance Criteria

- Users can see three links at the top of the page to three different colors of your choosing
- Links should use NavLink and `active` class to style the active page link differently
- Clicking on the color takes you to a nested route with the red, green and blue values of your color
- The background color of the page should match the r, g, b value in the route parameters
- Must use the Switch and Route components to render the custom RGB component
- The RGB component used by the React Router route should use the `useParams` hook to get the r,g,b values from the URL

### Rubric

| Task                                                                            | Points |
| ------------------------------------------------------------------------------- | ------ |
| Each page shows nav links to three different colors                             | 3      |
| Links show different styling on the `active` page                               | 3      |
| Use the `Switch` and `Route` Components to render an `RGB` Component            | 4      |
| Default "Not Found" Route which renders a generic `NotFound` component          | 2      |
| `RGB` component uses `useParams` hooks to grab the r,g,b values from URL        | 4      |
| Background color of RGB component changes depending on the values of the params | 4      |
