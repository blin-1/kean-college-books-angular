# kean-college-books-angular

This project demonstrates the use of MVVM model with Angular 6 and implementation of Google web login<br>
It may be viewed at https://college-books-angular.herokuapp.com <br>
Project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7. <br>


## NB
This is a work in progress


## Dependencies

npm i --save gapi<br>
npm i --save @types/gapi<br>
npm i --save @types/gapi.auth2<br>
npm i --save @angular/material<br>

<br>
<p>You will also need to obtain Google auth2 credentials at https://console.developers.google.com/apis/credentials and update environments/environment.ts with it:
</p>
<br>

export const environment = {
	OATH2_CLIENT_ID : 'xxxxxxxxxxxxxx.apps.googleusercontent.com'
}; 
<br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



