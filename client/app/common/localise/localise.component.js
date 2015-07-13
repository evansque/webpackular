import template from './localise.html';
import controller from './localise.controller';
import './localise.scss';

let localiseComponent = ()=>{
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default localiseComponent;