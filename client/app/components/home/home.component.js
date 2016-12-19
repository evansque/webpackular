import template from './home.html';
import controller from './home.controller';
import './home.scss';

const homeComponent = () => ({
  template: template,
  controller: controller,
  restrict: 'E',
  controllerAs: 'vm',
  scope: {},
  bindToController: true
});

export default homeComponent;
