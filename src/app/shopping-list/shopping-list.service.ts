import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

ingredientsUpdated = new Subject<Ingredient[]>();

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
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]) {

   /* for (let i of ingredients)
    {
      this.addIngredient(i);
    }*/

    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredients.slice())
  }
}
