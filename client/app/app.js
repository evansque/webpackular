import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import config from './config/app.config';
import Common from './common/common';
import ngTranslate from 'angular-translate';
import 'angular-translate-loader-static-files';
import AppComponent from './app.component';
import Components from './components/components';
import 'bootstrap-sass/assets/javascripts/bootstrap.min.js';


angular.module('app', [
  'app.config',
  uiRouter,
  Common.name,
  Components.name,
  ngTranslate
])
  .config(($urlRouterProvider, $locationProvider, $translateProvider, ENV) => {
    $translateProvider.useStaticFilesLoader({
      prefix: 'app/i18n/',
      suffix: '.json'
    });

    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.preferredLanguage('en');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .directive('app', AppComponent);