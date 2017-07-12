import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recepie } from './recepie.model';
import { Injectable } from '@angular/core';


@Injectable()
export class RecipeService {

  

  private recipes: Recepie[] = [
    new Recepie(1, 'Roasted pork', 'Roasted pork with macaroni',
      'http://images.media-allrecipes.com/userphotos/250x250/2160152.jpg',
      [
        new Ingredient('pork', 1),
        new Ingredient('macaroni', 25)
      ]
    ),
    new Recepie(2, 'Roasted beef', 'Spicy roasted beef',
      'http://images.media-allrecipes.com/userphotos/250x250/00/89/06/890638.jpg',
      [
        new Ingredient('beef', 1),
        new Ingredient('wine', 2)
      ]
    ),
    new Recepie(3, 'Mojarra', 'Fried jsf implementation',
      'http://cdni.condenast.co.uk/330x330/o_r/oct-07_malaysian-style-fish_b_330x330.jpg',
      [
        new Ingredient('fish', 2),
        new Ingredient('lime', 1)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredienrs: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredienrs);
  }

  getRecipe(id: number): Recepie {
    let recipe: Recepie;

    for (let r of this.recipes) {
      if (r.id === id) { recipe = r; }
    }

    return recipe;
  }

}
