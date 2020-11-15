import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss'],
})
export class RecipieDetailPage implements OnInit {

  private activatedRoute: ActivatedRoute;
  private recipieService: RecipiesService;
  public selectedRecipie: Recipie;
  constructor(activatedRoute: ActivatedRoute, recipieService: RecipiesService) {
    this.activatedRoute = activatedRoute;
    this.recipieService = recipieService;
   }

  ngOnInit() {
    console.log(1);
    this.activatedRoute.paramMap.subscribe((paramMap) => {
        if(!paramMap.has('recipeId')){
          return;
        }
        console.log(2);
        const recipieKey = paramMap.get('recipeId');
        console.log("3 "+recipieKey);
        this.selectedRecipie = this.recipieService.getRecipiesById(recipieKey);
        console.log("image "+this.selectedRecipie.image);
        console.log("id "+this.selectedRecipie.id);
        console.log("name "+this.selectedRecipie.name);
        console.log("ingredient "+this.selectedRecipie.ingredient);
        console.log("time "+this.selectedRecipie.time);
      });
  }

  deleteRecipie(recipieId: String){
    console.log("recipieId "+recipieId)
        console.log("Delete End");
    console.log("Delete End");
    console.log(this.recipieService.deleteRecipie(recipieId));
    console.log("Delete End");
  } 

}
