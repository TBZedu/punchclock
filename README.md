<br/>
<div>
  <h3 align="center">Punchclock</h3>
  <p align="center">Punchclock is a system that allows users to create and manage time period logs. The system also includes an administrator dashboard to manager users and configurations</p>
  <p align="center"><a href="https://github.com/GeneTv/punchclock">Click to open the repository</a></p>
</div>

[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
 

# Setup Development Environment

## Prerequisites
 - [Java SDK]() installed and configured correctly.
 - [Nodejs & npm](https://nodejs.org/en/) installed on your machine.
 - Npm package [@vue/cli](https://npmjs.org/package/vue) globally installed


## Installation

### REST API
Check following things before starting to work:
1. Check, if JDK 12 is installed and the env variable `path` is set.
1. Run the backend app with `./gradlew bootRun` or `./gradlew.bat bootRun`.
1. Run unit tests with `./gradlew test` or `./gradlew.bat test`.
1. Build the jar file with `./gradlew bootJar` or `./gradlew.bat bootJar`.

Following services are available when using the `dev` profile:
- REST-API: http://localhost:8081
- H2 database dashboard: http://localhost:8081/h2-console

#### Test data
If you wish to use test data, make request: `PUT /testing`


### Web Client
`npm install`

#### Start development server
`npm run serve`

The dev server is configured to proxy all requests from http://localhost:8080/api/$0 -> http://localhost:8081/$0. This will help to bypass cors restriction during development.

#### Build for production
`npm run build`

Note: To log in, use credentials `clientside:clientside` formatted as username:password. This will create a local user which will have access to the GUI. If I manage to implement Auth in the backend tho, the entries won't load. Otherwise you can use the panel like this. (Registration works tho ^-^)