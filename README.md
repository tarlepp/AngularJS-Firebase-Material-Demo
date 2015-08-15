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
 
![QR code to demo application](https://raw.github.com/tarlepp/Angular-Firebase-Material-Demo/master/qr.png)

## Used libraries, guides, etc.

### Libraries

 * [AngularJS — Superheroic JavaScript MVW Framework](https://angularjs.org/)
 * [Angular Material](https://material.angularjs.org/)
 * [AngularFire](https://www.firebase.com/docs/web/libraries/angular/)
 * [Material Design icons By Google](https://github.com/google/material-design-icons)
 * [Moment.js](http://momentjs.com/)

### Guides

 * [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
 * [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)

### Other resources

 * [Firebase](https://www.firebase.com/)
 * [Material design](https://www.google.com/design/spec/material-design/)

## Installation

First of all you have to install <code>npm</code> and <code>node.js</code> to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

After that you need to install <code>bower</code> and <code>gulp</code> main packages to make all  things to happen. 
These can be installed with following commands on your *nix box.
<pre>
sudo npm install bower -g
sudo npm install gulp -g
</pre>

And when you have <code>npm</code> and <code>node.js</code> installed to your box, just navigate yourself to root folder
of the app and run following commands:

<pre>
npm install
bower install
</pre>

### Configuration

See ```/src/app/config/config.json_example``` file and copy it to ```/src/app/config/config.json``` file and make
necessary changes to it. Note that you need a Firebase account to get that url.

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3002` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches 
all files for changes and lints, builds and injects them into the index.html accordingly.

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

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries 
installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

### Running production ready build

To start production ready build in the project run:

```bash
gulp production
```

## Author

Tarmo Leppänen

## License

The MIT License (MIT)

Copyright (c) 2015 Tarmo Leppänen