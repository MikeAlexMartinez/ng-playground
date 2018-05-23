# DragulaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Amendments

### Angular Material
I've added @angular/material, @angular/flex-layout, @angular/cdk, hammerjs and an @angular/material theme
so that I can use @angular/material components easily integrated within flexbox-styled layouts.
As I use @angular/material components I will import these into my material module which is integrated
into my core Angular Module.

### normalize.css
I've added normalize.css into the top of the style.scss file. There is a warning that importing regular
css files might not be valid in future, so may need to change integration method down the line.

### lodash
I've added lodash for the helper functions that it provides.

### dragula
I've added ng2-dragula to test out drag and dropping functionality, this will be stored in the dragula module.


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
