import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RecipesService} from "../../services/recipes.service";
import {Recipe} from "../../models/recipe.model";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {ShoppingListService} from "../../services/shopping-list.service";

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{
  recipe: Recipe;
  index: number;


  constructor(private recipesService: RecipesService,
              private navParams: NavParams,
              private navCtrl: NavController,
              private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onAddIngredients() {
    this.slService.addItems(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

}
