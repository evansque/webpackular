import template from './localise.html';
import controller from './localise.controller';
import './localise.scss';

const localiseComponent = () => ({
  template: template,
  controller: controller,
  restrict: 'E',
  controllerAs: 'vm',
  scope: {},
  bindToController: true
});

export default localiseComponent;
