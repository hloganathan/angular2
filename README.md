[![Build Status](https://travis-ci.org/dfmartin/angular2.svg?branch=master)](https://travis-ci.org/dfmartin/angular2) 

[![bitHound Overall Score](https://www.bithound.io/github/dfmartin/angular2/badges/score.svg)](https://www.bithound.io/github/dfmartin/angular2)
[![bitHound Dependencies](https://www.bithound.io/github/dfmartin/angular2/badges/dependencies.svg)](https://www.bithound.io/github/dfmartin/angular2/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/dfmartin/angular2/badges/devDependencies.svg)](https://www.bithound.io/github/dfmartin/angular2/master/dependencies/npm)

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iron/iron/master/LICENSE)

# Angular 2 data entry

This application is an opportunity to learn more about Angular2.  This time the goal is to create an application that implements the following:
- Angular 2
- TypeScript
- Pug (formerly known as Jade) for html templating
- Sass for css
- Express for services
- Browser sync for a better dev experience
- Mongodb or RethinkDb as the database

For an overview of the business requirements for the application: [Requirements](https://github.com/dfmartin/angular2/blob/master/docs/requirements.md)


## Installation
```
$ git clone https://gitlab.com/nashvegastech/angular2-dataentry.git
$ cd angular2-dataentry
$ npm install -g typescript typings gulp node-sass
$ npm install
$ npm start 
```
## Folder Structure
Currently everything (almost) is in ```./src```.  From there the application is broken down into the following:
* app - Angular 2 client application components.
    * main.ts - angular bootstrap file.
* sass - sass files for use both within the Angular app or any views served by express.
* server-views - any views that we need for express to serve
* templates - pug files used for angular components.
* in the root directory the following files are used:
    * server.js - the base expressjs server
    * systemjs.config.js - called by the client to setup systemjs
    * gulp files - explained below
    * tsconfig.json - used by TypeScript
    * tsconfig.app.json - special TypeScript config for the angular 2. application. Note - it excludes the ```./src/server``` directory.
    * tsconfig.server.json - special TypeScript config for the express server.  Note - it excludes the ```./src/app``` directory.
