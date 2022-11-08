import { RecipeService } from './../recipe.services';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {


  recipe!: Recipe;
  id!: number;

  constructor(private reciepService: RecipeService,private route: ActivatedRoute, private router :Router) {}

  ngOnInit() {
this.route.params.subscribe(
  (params: Params)=>{
    this.id = +params['id'];
    this.recipe = this.reciepService.getRecipeId(this.id);
  }
);
  }
  onAddToShoppingList(){
     this.reciepService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onClickRecipe(){
  this.router.navigate(['edit'],{relativeTo: this.route})
  }
}
