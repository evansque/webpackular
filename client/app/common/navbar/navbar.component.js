import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = () => ({
  template: template,
  controller: controller,
  restrict: 'E',
  controllerAs: 'vm',
  scope: {},
  bindToController: true
});

export default navbarComponent;
