import { Injectable } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  public recipieList: Recipie[]  = [
   {
     id : "1",
     name : "French Fries",
     image : "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     ingredient : "french fries, oil, salt",
     time : "20 mins"
   },
   {
     id : "2",
     name : "Spaghetti",
     image : "https://i.ndtvimg.com/i/2017-10/meatballs-recipe_620x350_51508494396.jpg",
     ingredient : "Ground Beef, Tomato sauce, spaghetti, Onion, celery and fresh garlic",
     time : "45 mins",
   }
 ];
  constructor() { }

  getRecipies(): Recipie[]{
    return [...this.recipieList];
  }

  /*getRecipiesById(recipieId: String): Recipie{
    console.log("4 "+recipieId);
    this.recipieList.filter((obj)=>{
      if(obj.id === recipieId){
        console.log("5");
        console.log("6 "+obj.name)
        return obj;
      }
    });
    return null;
  }*/
  getRecipiesById(recipieId: String): Recipie{
    return {...this.recipieList.find((obj) => {
      if(obj.id===recipieId){
        return true;
      }
    })
    }
  }
  deleteRecipie(recipieId: String){
    console.log("delete service "+recipieId);
    let list = [...this.recipieList];
    list.splice((+recipieId-1),1);//Casting a String to number
    console.log(list.length);
    console.log(list);
    return list;

  }  
}
