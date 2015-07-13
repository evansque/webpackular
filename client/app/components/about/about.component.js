import template from './about.html';
import controller from './about.controller';
import './about.scss';

let aboutComponent = ()=>{
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default aboutComponent;