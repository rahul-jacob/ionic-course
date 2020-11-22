import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  private router: Router;
  private alertController: AlertController;
  constructor(activatedRoute: ActivatedRoute, recipieService: RecipiesService, router: Router,alertController: AlertController) {
    this.activatedRoute = activatedRoute;
    this.recipieService = recipieService;
    this.router = router;
    this.alertController = alertController;
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
        if(!paramMap.has('recipeId')){
          return;
        }
        const recipieKey = paramMap.get('recipeId');
        this.selectedRecipie = this.recipieService.getRecipiesById(recipieKey);
      });
  }

  deleteRecipie(recipieId: String){
    this.alertController.create({
      header : 'Delete Recipie"',
      message : 'Are you sure you want to delete the recipie ?',
      buttons : [
        {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () =>{
          console.log("Delete `Start "+recipieId);
          console.log(this.recipieService.onDelete(recipieId));
          console.log("Delete End");
          console.log("Navigating to recipie main page");
          this.router.navigate(['/recipies']);
        }
      }
    ]
    }).then(alertElement => {
      alertElement.present();
    });

  } 

}
