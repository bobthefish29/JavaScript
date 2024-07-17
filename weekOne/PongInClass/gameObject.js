//this is thw whole code for making the class, 

//this is how you do a class in javascript
class GameObject{
    //this is making the instance of the class, it will set up all the vars
    constructor(){
        //the 'this' is referesing making the vars
        this.x = 100;
        this.y = 100;
        this.w = 100;
        this.h = 100;
        //this is just setting a base vososity
        this.vx = 2;
        this.vy = 0;
        //just for color
        this.color = '#fff';
    }
    //this is to make a mothed i
    move(){
        //this is changing the cord location so that the object will change the way it moves
        this.x += this.vx;
        this.y += this.vy;
    }
    render(){
        //the ctx.save is saving everything, than it draws the image at the location we want, than restors the item
        ctx.save()
            //this is making a square
            ctx.translate(this.x, this.y)
            ctx.fillStyle = this.color;
            //to make the rec we need the 4 different paramters, x, y , width, height
            ctx.fillRect(-this.w/2,-this.h/2,w,h);
        //the restore is just restoring the item 
        ctx.restore()
    }
}