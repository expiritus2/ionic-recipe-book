import {Component, OnInit} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Ingredient} from "../../models/ingredient.model";


@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage implements OnInit{
  listItems: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  ngOnInit(): void {}

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

}
