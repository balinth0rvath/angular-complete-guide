import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {

ingredientsUpdated = new EventEmitter<Ingredient[]>();

ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',10)
  ];
  
  constructor() { }

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]) {

   /* for (let i of ingredients)
    {
      this.addIngredient(i);
    }*/

    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.emit(this.ingredients.slice())
  }
}
