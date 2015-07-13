import HomeModule from './home'
import HomeController from './home.controller';
import HomeComponent from './home.component';
import HomeTemplate from './home.html';

describe('Home', ()=>{
	let $rootScope,
	makeController;
	
	beforeEach(window.module(HomeModule.name));
	beforeEach(inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new HomeController();
		};
	}));
	
	describe('Module', ()=>{
	});
	
	describe('Controller', ()=>{
		it('should have a name property [REMOVE]', ()=>{
			let controller = makeController();
			expect(controller).to.have.property('name'); 
		});
	});
	
	describe('Template', ()=>{
		it('should have name in template [REMOVE]', ()=>{
			expect(HomeTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});
	
	
	describe('Component', ()=>{
			let component = HomeComponent();
			it('should use the right template',()=>{
				expect(component.template).to.equal(HomeTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(HomeController);
			});
	});
});

 




