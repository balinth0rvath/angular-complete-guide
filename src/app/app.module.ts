import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipieListComponent } from './recipie-book/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipie-book/recipie-list/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './recipie-book/recipie-detail/recipie-detail.component';
import { RecipieBookComponent } from './recipie-book/recipie-book.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RepieceStartComponent } from './recipie-book/repiece-start/repiece-start.component';
import { RecipeEditComponent } from './recipie-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    RecipieBookComponent,
    DropdownDirective,
    RepieceStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
