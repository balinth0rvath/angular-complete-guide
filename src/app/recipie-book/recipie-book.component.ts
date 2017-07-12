import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css'],
  providers: [RecipeService]
})
export class RecipieBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
}
