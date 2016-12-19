import template from './about.html';
import controller from './about.controller';
import './about.scss';

const aboutComponent = () => ({
  template: template,
  controller: controller,
  restrict: 'E',
  controllerAs: 'vm',
  scope: {},
  bindToController: true
});

export default aboutComponent;
