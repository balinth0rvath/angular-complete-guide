import { RecipeService } from './../../recipe.service';
import { Recepie } from './../../recepie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recepipe:Recepie;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {

    this.recipeService.recipeSelected.emit(this.recepipe);
  } 
}
