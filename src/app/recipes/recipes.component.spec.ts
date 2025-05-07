import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';
import { RecipeService } from './recipe.services';
import { Recipe } from './recipe.model';
import { of } from 'rxjs';

describe('RecipesComponent', () => {
    let component: RecipesComponent;
    let fixture: ComponentFixture<RecipesComponent>;
    let mockRecipeService: jasmine.SpyObj<RecipeService>;

    beforeEach(async () => {
        mockRecipeService = jasmine.createSpyObj('RecipeService', ['recipeSelected']);
        mockRecipeService.recipeSelected = of({
            name: 'Test Recipe',
            description: 'Test Description',
            imagePath: 'test-image-path.jpg'
        } as Recipe);

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
        expect(component.selectedRecipe).toEqual({
            name: 'Test Recipe',
            description: 'Test Description',
            imagePath: 'test-image-path.jpg'
        } as Recipe);
    });
});