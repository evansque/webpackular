import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

let navbarComponent = ()=>{
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default navbarComponent;