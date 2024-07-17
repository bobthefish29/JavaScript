//c is the canvues
let c = document.querySelector('canvas');
let ctx = c.getContext('2d');
let fps = 1000/60;
let timer = setInterval(main, fps);

//this is how you do a class in javascript
/*class GameObject{
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


}*/

/*let x = 100;
let y = 100;
let w = 100;
let h = 100;
//this is just setting a base vososity
let vx = 2;
let vy = 0;*/



function main(){
    //c.width is the canvues height and the width
    ctx.clearRect(0,0,c.width, c.height)

    //----------this is also the first way to do it
    // //this is changing the cord location so that the object will change the way it moves
    // x+= vx;
    // y+=vy;

    if(x>c.width - w){

        x = c.width - w
        //this is making the two negitive
        vx = -vx;


    }

    if(x<0){

        x = 0;
        //this negative is to make the oppesit, it will make it 2
        vx = -vx;


    }


    //-----------------this is the first way he was telling us how to draw them
    //this is making a square
    //ctx.fillStyle = '#fff';
    //to make the rec we need the 4 different paramters, x, y , width, height
    //ctx.fillRect(x,y,w,h);




}

