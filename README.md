![logo](https://angular.io/resources/images/logos/standard/shield-large.png)

# Angular Seed

This is a simple and minimalist Angular Seed which uses bower and npm for dependencies.

### Installation

You need [Bower](http://bower.io/) and [NPM](https://www.npmjs.com/) installed



```sh
$ bower install
$ npm install
```

```sh
$ npm start
```

The application is going to listen on the localhost:5000 by default. You can change it in the package.json file.

```json
"scripts": {
    "start": "http-server -a localhost -p 7000 -c-1"
}
```

### Structure

Folder | Contains
--- | ---
components | Folders that you create for every model functionality (e.g. cars, phone etc...)
components/main | Typical app folder exemple, contains the html for directives and controllers, and the controllers, factories and directives
index.html | Main template into which every sub template is going to be injected, link every new file/app/dependencies you add in this file. You can add pre processors to your project to do it for you.
app.js | Main configuration of you application, add every modules you create in the app declaration and you also define your routes here.

### Libraries

[Angular Ui Router](https://github.com/angular-ui/ui-router) - Replace ngRouter and provides a state machine to manage the transitions between those application states in a transaction-like manner

[Angular Ng Resource](https://docs.angularjs.org/api/ngResource) - provides interaction support with RESTful services via the $resource service.

[Bootstrap](http://getbootstrap.com/getting-started/#download-bower) - CSS framework installed using bower and compiled with Grunt

[Grunt](http://gruntjs.com/) - The JavaScript Task Runner
