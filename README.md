# VirtualScrollGrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

#data-generation-code-json
```
[
  '{{repeat(2000)}}',
  {
    "label": '{{lorem(1, "words")}}',
    "partNumber": '{{string("alphaNumeric", 6)}}',
    "lastServiceDate": '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-DD")}}',
    "serviceCost": '{{floating(45, 999, 2)}}',
    "partCost": '{{floating(0, (parseFloat(this.serviceCost) - 0.01), 2)}}',
    "model": '{{integer(2010, 2023)}}',
    "conceptModel": '{{lorem(1, "words")}}',
    "reviewedBy": '{{random("Human", "Bot", "NA")}}'
  }
]
```