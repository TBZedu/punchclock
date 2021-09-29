<br/>
<div>
  <h3 align="center">Punchclock</h3>
  <p align="center">Punchclock is a system that allows users to create and manage time period logs. The system also includes an administrator dashboard to manager users and configurations</p>
</div>
 

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


### Web Client
`npm install`

#### Start development server
`npm run serve`

#### Build for production
`npm run build`