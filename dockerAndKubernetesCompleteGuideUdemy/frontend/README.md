npm run start - starts development server
npm run test - runs tests associated with the project
npm run build - builds a production version of the application

Dockerfile.dev - development version
Dockerfile - production version


```
// DOCKER volumes
// run the container, inside the containers listen to port 3000, and pass to port 3000 on local machine
// 
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>
```




///////////////////////////////////
Dockerfile.dev
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <insertContainerIdHere>

when a colon is used, we try to map one outside:inside the container.
```
-v
```
// get present working directory and map to /app folder (i.e. the pwd is OUTSIDE the container, and we want to map it to the folder called /app in the container - like a pointer, the code is not being declared in the container it is being referenced in the container to an outside source) the pwd is a bash command that you can use to print out the present working directory.
```
$(pwd):/app
``
// basically setting this folder as fixed inside the container, /app/node_modules in the container should probably exist and externally it may not - so we dont want to map out what is in the container to an folder that may not exist.
```
app/node_modules
```
///////////////////////////////////



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
