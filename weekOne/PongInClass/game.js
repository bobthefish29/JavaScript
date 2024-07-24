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

//this is maing a list, or an arrary. the first index is 0
// let box = [];

//this is making the a list of boxes, this is making 50 boxes
// for(let i = 0; i< 50; i++){
//     //this is making an instance of the game
//     box[i] = new GameObject();
//     //this is making making the location of the boxes differently
//     box[i].x = Math.round(Math.random() * c.width);
//     box[i].y = Math.round(Math.random() * c.height);

//     //this is so the boxes are being the size of 10
//     box[i].w = 10
//     box[i].h = 10

//     box[i].vx = 0;
//     box[i].vy = rand(5,15);


// }

//-----------------this is to make the movement, also to check if we prsses a key
//this is a key code for every key you press (google it)

let box = new GameObject();

//this is way we are doing it

let keys = [];

//it could be done like this, 
// var w = false;


//this also is one way to do it to hget the key press
// document.addEventListener(`keypress`, press);
// function press(e){
//     //could be done
//     // if(e.key === `w`){w=true};
//     keys[e.key] = true;
// }

//this is the same thing but one line
document.addEventListener(`keypress`, function(e){keys[e.key] = true});

document.addEventListener(`keyup`, release)
function release(e){
    //could be done
    //the reasion there is not '{}' is because in java you it if there is no code
    // if(e.key === `w`)w=false;

    keys[e.key] = false;

}


function main(){
    //c.width is the canvues height and the width
    ctx.clearRect(0,0,c.width, c.height)

    //this is moving the box we made
    //the w would be just true, if you do !w it would be false
    //this is also one way to do it
    //could do keys.w but, space, !, etx would be off
    if(keys[`w`])box.vy += -1;
    //box[`y`] is same as box.y
    

    //this is making the movment for the s key one line
    if(keys[`s`])box.vy += 1;

    //this is decressing the volosity, than 
    box.vx *= .9;
    box.vy *= .9;

    box.move();
    box.render();





    //----------------------------this is to make the object move and have the object 
    // for(let i = 0; i < box.length; i++){
    //     box[i].move();

    //     //this loop is making sure when the box gets to the end of the screen, it will move the box back to the start of the page
    //     if(box[i].y > c.height + box[i].h/2){
    //         //this is making the box 0, than dividing the height
    //         box[i].y = 0 - box[i].h/2
    //     }

    //     box[i].render();
    // }




    


    //----------this is also the first way to do it
    //---------------------this is more for checking collision
    // //this is changing the cord location so that the object will change the way it moves
    // x+= vx;
    // y+=vy;

    //------------------this is the old code
    /*if(x>c.width - w){

        x = c.width - w
        //this is making the two negitive
        vx = -vx;


    }

    if(x<0){

        x = 0;
        //this negative is to make the oppesit, it will make it 2
        vx = -vx;


    }*/


    //-----------------this is the first way he was telling us how to draw them
    //this is making a square
    //ctx.fillStyle = '#fff';
    //to make the rec we need the 4 different paramters, x, y , width, height
    //ctx.fillRect(x,y,w,h);




}

//this is just to make the movement random
function rand(low, high){

    return Math.random() * (high - low) + low;
}
