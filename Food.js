class milk{
    constructor(){
        this.lastfed;
        this.foodStock=0;
        this.image=loadImage('Milk.png');
        
    }
   
    updateFoodStock(foodStock){
        
            this.foodStock=foodStock;

    }
    getFeedTime(lastfed){
            this.lastfed=lastfed;
    }
    deductFood(){
    if (this.foodStock>0){
        this.foodStock=this.foodStock-1;
    }
}
getFoodStock(){
    return  this.foodStock
    
}
    display(){
       
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,620,240,70,70);
             if (this.foodStock!=0)
             {
            for (var i=0;i<this.foodStock;i++)
            {
                if (i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;;
            }
        }
     }
}