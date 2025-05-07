import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';
import { RecipeService } from './recipe.services';
import { Recipe } from './recipe.model';
import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;
  let mockRecipeService: Partial<RecipeService>;
  let recipeSelectedEmitter: EventEmitter<Recipe>;
  const mockRecipe: Recipe = {
    name: 'Test Recipe',
    description: 'Test Description',
    imagePath: 'test-image-path.jpg',
    ingredients: [
      { name: 'Ingredient 1', amount: 1 },
      { name: 'Ingredient 2', amount: 2 }
    ]
  };

  beforeEach(async () => {
    recipeSelectedEmitter = new EventEmitter<Recipe>();
    // Create a stub (not a Spy) since recipeSelected is likely an Observable property
    mockRecipeService = {
      recipeSelected: recipeSelectedEmitter
    };

    await TestBed.configureTestingModule({
      declarations: [RecipesComponent],
      providers: [{ provide: RecipeService, useValue: mockRecipeService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedRecipe when recipeSelected emits a value', () => {
    expect(component.selectedRecipe).toEqual(mockRecipe);
  });
});
