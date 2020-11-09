import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  private routeService;
  public recipieList: Recipie[];

  constructor(routeService: RecipiesService) {
    this.routeService = routeService;
   }

  ngOnInit() {
    this.recipieList = this.routeService.getRecipies();
  }

}
