import { RecipeEditComponent } from './recipie-book/recipe-edit/recipe-edit.component';
import { RepieceStartComponent } from './recipie-book/repiece-start/repiece-start.component';
import { RecipieDetailComponent } from './recipie-book/recipie-detail/recipie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipieBookComponent } from './recipie-book/recipie-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipieBookComponent, pathMatch: 'prefix' ,
        children: [
            {path: '', component: RepieceStartComponent},
            {path: 'new', component: RecipeEditComponent },
            {path: ':id', component: RecipieDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent }
        ] 
    },
    {path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}