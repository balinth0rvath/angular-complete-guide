import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from "@angular/core"
import { Recepie } from './../recepie.model';

@Component({
    selector: 'app-recipie-detail',
    templateUrl: './recipie-detail-component.html',
    styleUrls: ['./recipie-detail-component.css']
})
export class RecipieDetailComponent implements OnInit {

    @Input() r: Recepie;

    constructor(private recipeService: RecipeService) {
    };

    ngOnInit() {
    
    };

    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.r.ingredients);
    }

}
