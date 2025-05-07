import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent]
		});
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
	
	it('should have a title', () => {
		component.navItem = 'Test Title';
		expect(component.navItem).toEqual('Test Title');
	});
	
	it('should render title in a h1 tag', () => {
		component.navItem = 'Test Title';
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Test Title');
	});
});