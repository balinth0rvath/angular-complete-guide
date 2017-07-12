import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.subscription= this.shoppingListService.ingredientsUpdated.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
