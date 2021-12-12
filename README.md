# Postbook

Demo coding for the position of a Vue frontend developer. I was asked to give an example of my work for the task of a REST-API query and rendering within an Vue.js SPA. The task was expected to take 3 to 4 hours and the application should provide an interface to reactively filter and sort the data received from the API. Code should be written in plain Javascript.

To setup the application i chose to use a template created by the vue-cli, basically to get my coding quickly wired to the vue framework and to use some basic tooling, i.e. a development server, linting, .. Within vue-cli I chose a vue3 application along with babel and eslint since this seemed to be a very common environment from my point of view.

If I would have spent more time I would have incorporated also comments provided by an additional call to the REST-API. That raised some structural questions about the handling of data: Should the comments become filterable aswell? When should the comments become available? Is it desireable to fetch all comments in a single call or should they load only if the related post shows up in the list?

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
