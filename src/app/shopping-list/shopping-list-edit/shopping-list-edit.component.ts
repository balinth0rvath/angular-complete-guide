import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, DoCheck, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addClicked = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name:ElementRef;
  @ViewChild('amountInput') amount:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("name:"+this.name.nativeElement.value);
  }
  
  onClickAdd() {
    this.addClicked.emit(
        new Ingredient(
            this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
