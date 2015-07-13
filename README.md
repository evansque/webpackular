#Webpackular
A webpack-angular boilerplate that supports multiple environments and languages with bootstrap sass and compass integrated.

#Why this boilerplate ?
This boilerplate is prepared for you with the most common development tools like
- [jQuery][4]
- [Sass][5] and [Compass][6]
- [Bootstrap][3]
- [ngConstant][2]
- [Angular Translate][7]

#Getting Started
  - run `npm install -g webpack gulp karma-cli karma`
  - Fork the repository and run `npm install`.
  - run `gulp --env development` or `gulp --env production`. where the env variable is managed by [ngConstant][2]

#Generating New Components
To generate a new component run `gulp component --name *** --parent ***`.
<br>
Where `--name` is the components name, and `--parent` is the (optional) parent directory.<br>
Examples:
- `gulp component --name dashboard` -> This will create a new component at `client/app/components/dashboard`
- `gulp component --name sidebar --parent ../common` -> this will create a new component at `client/app/common/sidebar`

#@Todo
    - Create a Gulp tasks that generates angular services, factories and directives
    - Create  `Gulp build --env **` task





Heavily inspired by [NG6-starter][1]

[1]:https://github.com/angular-class/NG6-starter
[2]:http://npmjs.com/gulp-ng-constant
[3]:getbootstrap.com
[4]:https://jquery.com/
[5]:http://sass-lang.com/
[6]:http://compass-style.org/
[7]:https://github.com/angular-translate/angular-translate
