import angular from 'angular';
import Navbar from './navbar/navbar';
import Localise from './localise/localise';
import User from './user/user';

const commonModule = angular.module('app.common', [
  Navbar.name,
  Localise.name,
  User.name
]);

export default commonModule;
