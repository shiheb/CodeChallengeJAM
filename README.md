# JAMCodeChallenge
Cold assessment in JAM Code Challenge
#################################################################<br>
## What we know:

### Frontend Developer
Please use react or vue to build a page which is connected to some of JAM public APIs that are showing:
•	List of songs (paginated) with thumb nail and play/pause button
•	Each row should have 2 options which are to like a song and to comment a song
•	Each request should return success or failure status

The end points are:

get list of songs: https://api-stg.jam-community.com/song/trending

like a song:  https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8

(method is post and you should send us `id` of a song which the sample id is 00042cf4-2ce4-11e6-bd70-0661aaff07f9)

comment a song:  https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8

(method is post and you should send us `id` of a song which the sample id is 00042cf4-2ce4-11e6-bd70-0661aaff07f9 also `type` which is song and message which will be your comment)


Please build the site in whatever UI / UX you feel is appropriate and that showcases your skills in building modern websites. Animations, transitions etc. are not mandatory but definitely a plus.

further description would be found after description of the available scripts as the code use React as frontend framework 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

################################################################################################

I used several ready Components from NPM to simplify my work, axios to use GET and POST request to recuperate Data from the securised JSON file.
- react-audio-player to make nice buttons play/pause and download Music from the platform.
- Hooks and ES2017 to gain time and produce a clean code.
- For pretty result, I render the results of the POST request in the console with console.log
- I put a counter for the like button , it can detect if it is already clicked , you can undo click (the color change when clicked)
- The comment button , also take number of comments and increment the number after validation the message.
- a modal windows render when you click on comment button to let you write you comment.
- The code is written from create-react-app base.
- As the JSON file is protected, I download it and work on it directly, but I modified after the source of the JSON file to the link you gave to me . So it will work normally by your side.
- for the pagination component, I fixed the number of tracks to 3 in every page, but you can change it easly to the wanted value.
- The number of pages and the tracks in every page are calculted automatically depending to number of tracks in database.

#################################################################################################

I would like to thank you for this opportunity to assest my skills and perform myself in coding.
I hope that I covered all tasks in the code challenge and I look forward to be selected to the next steps.


![Screenshot Music Player](https://i.ibb.co/sv6N9jj/Annotation-2019-08-22-081803.png)
Format: ![Screenshot Music Player](url)


