Angular/Firebase/Material - demo
============

## What is this?

Just a small demo to show how to use [Angular](https://angularjs.org/) + [Firebase](https://www.firebase.com/) + 
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) together. Currently
this demo application contains following features:

 * Social media login (Facebook, Twitter, Google+ and GitHub)
 * Personal 'Todo' item list
 * Chat with other users

## Demo

Demo of this application can be found from [https://boiling-fire-2804.firebaseapp.com/](https://boiling-fire-2804.firebaseapp.com/) 

## Used libraries, guides, etc.

Todo

## Installation

Todo 

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.


## Author

Tarmo Leppänen

## License

The MIT License (MIT)

Copyright (c) 2014 Tarmo Leppänen