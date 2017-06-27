import { RecipeService } from './recipe.service';
import { Recepie } from './recepie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipie-book',
  templateUrl: './recipie-book.component.html',
  styleUrls: ['./recipie-book.component.css'],
  providers: [RecipeService]
})
export class RecipieBookComponent implements OnInit {

  selectedRecipe: Recepie;

  constructor(private  recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (r:Recepie) => { this.selectedRecipe = r; 
      }
    );
  }
}
