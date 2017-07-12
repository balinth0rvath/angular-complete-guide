import { ActivatedRoute, Params, Router } from '@angular/router';
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

    r: Recepie;

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.r = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
        this.route.params.subscribe(
            (params: Params) => {
                this.r = this.recipeService.getRecipe(+params['id']);
            }
        );
    }

    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.r.ingredients);
    }
    onEdit() {
        this.router.navigate(['/recipes',this.r.id,'edit']);
    }

}
