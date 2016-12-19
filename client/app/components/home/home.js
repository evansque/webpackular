import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import Common from '../../common/common';

const homeModule = angular.module('home', [
  uiRouter,
  Common.name
]).config(($stateProvider) => {
  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
}).directive('home', homeComponent);

export default homeModule;
