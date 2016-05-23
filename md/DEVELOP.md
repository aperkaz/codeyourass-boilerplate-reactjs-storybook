# How to develop?

Project is mainly oriented to provide good environment for developing of separated components.

We are using for purpose of developing independent components [`storybook`](https://storybooks.js.org/).

Each `component` contains
- `stories.jsx` where stories are saved,
- `specs.jsx` where tests using enzyme are saved,
- `Component.jsx` where Component means name of your component and contains implementation,
- `snapshots.jsx` snapshot of component to make sure that its generate some structure
- `index.js` which is exposing component outside of directory
- `Component.sass` file contains stylesheets

