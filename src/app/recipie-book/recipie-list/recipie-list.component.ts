import { RecipeService } from './../recipe.service';
import { Recepie } from './../recepie.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recepipies: Recepie[];

  constructor(private recepieService:RecipeService) { }

  ngOnInit() {
    this.recepipies = this.recepieService.getRecipes();
    console.log('>>>>'+this.recepipies.length);
  }

}
