import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, DoCheck, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') name:ElementRef;
  @ViewChild('amountInput') amount:ElementRef;
  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  
  onClickAdd() {
    this.shoppingListService.addIngredient(new Ingredient(
            this.name.nativeElement.value, this.amount.nativeElement.value));

      }
}
