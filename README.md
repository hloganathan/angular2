[![Build Status](https://travis-ci.org/dfmartin/angular2.svg)](https://travis-ci.org/dfmartin/angular2) 
[![bitHound Overall Score](https://www.bithound.io/github/dfmartin/angular2/badges/score.svg)](https://www.bithound.io/github/dfmartin/angular2)
[![bitHound Dependencies](https://www.bithound.io/github/dfmartin/angular2/badges/dependencies.svg)](https://www.bithound.io/github/dfmartin/angular2/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/dfmartin/angular2/badges/devDependencies.svg)](https://www.bithound.io/github/dfmartin/angular2/dependencies/npm)

[![Join the chat at https://gitter.im/dfmartin/angular2](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dfmartin/angular2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iron/iron/master/LICENSE)

> Latest: Angular 2.0.0-rc.3  (6/21/2016)

>  Check out the docs folder for an in-depth look at the structure of the app and what each piece does.

# Angular 2 - Health Journal

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
$ git clone https://github.com/dfmartin/angular2.git
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


Please checkout the issues and look for the ones labeld "help wanted"

> special thanks for Jim Vaughan for keeping straight.   


## Roadmap to the Scripts and Other Files
Listed in no particular order...

* .gitignore
    + This file includes a list of files and folders which git should not track.
* package.json
    + This file describes various aspectes of the "solution" contained withing this folder.
    + The "scripts" section declares the various scripts that can be run within the context of this "solution".
        > Each script specification consists of a script command, followed by a script body.
        > 'npm run <script_command>' will run whatever script body has been specified
        > Some scripts can be run with simply 'npm <script_command>', such as 'npm start'
        > Scripts which are defined as 'gulp <task>' have their '<task>' defined in the file 'gulpfile.js'
* gulpfile.js
    + Initializes and sets up the gulp environment.
    + Contains definitions of the various tasks to be performed by gulp.
* To Be Continued some time in the future...

