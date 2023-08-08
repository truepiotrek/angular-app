import { Component } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Not calzone.", "https://c.pxhere.com/images/8c/29/cdc41db42f50d1ecf63db92d0aec-1589193.jpg!d"),
    new Recipe("Calzone", "Not pizza.", "https://c.pxhere.com/images/8c/29/cdc41db42f50d1ecf63db92d0aec-1589193.jpg!d")
  ];
}
