
class Food{
    constructor(){
        this.foodstock 
        this.lastFed=0;
         this.milk_bottle
this.milk_bottle = loadImage("images/Milk.png")
        
//getfoodstock(){}
//updatefoodstock(){}
//deductfoodsock(){}
        
    }

    display(){

      if(this.lastFed%12>lastFed+4){
        gameState="Hungry";
      }else{
        gameState="NotHungry";
      }
      if(this.lastFed>=12){
    text("Last fed :"+ this.lastFed%12 + "PM", 350,30)
      }else if(this.lastFed==0){
        text("last fed : 12 AM",350,30);
      }else{
        text("last fed :"+ this.lastFed + "AM",350,30)
      }
    }
}