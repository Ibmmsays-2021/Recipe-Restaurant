import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component'; 
import { ShoppingService } from '../shopping-list/shopping-list.service'

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
        declarations: [RecipesComponent],
        providers: [{ provide: ShoppingService, useValue: {} }] // or a mocked value
      }).compileComponents();

    await TestBed.configureTestingModule({
      declarations: [RecipesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Hello World"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello World');
  });
});
