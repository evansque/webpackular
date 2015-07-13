import angular from 'angular';
import jQuery from 'jquery';
import Home from './home/home';
import About from './about/about';

window.jQuery = window.$ = jQuery;

let componentModule = angular.module('app.components', [
	Home.name,
	About.name
]);

export default componentModule;