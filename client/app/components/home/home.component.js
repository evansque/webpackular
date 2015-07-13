import template from './home.html';
import controller from './home.controller';
import './home.scss';

let homeComponent = ()=>{
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;