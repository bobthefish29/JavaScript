//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//this is the arrary of player
var player = [new Player(),new Player()];

var stage = new Box();
stage.w = c.width;
stage.h = c.height;

//this is the "arrary called pad"
var pad = []

//this is giving the player pad the box object
player[0].pad = new Box();
player[1].pad = new Box();


pad[0] = player[0].pad
pad[1] = player[1].pad


//p1 setup
// var p1 = new Box();
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2


//p2 setup
// var p2 = new Box();
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].dir = -1


//this is getting the values for the score
var scoreBoard = document.querySelectorAll(`#score div`)


//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

//this is all the information for the particals
var part = []

for(let i = 0; i < 50; i++){
    part[i] = new Box()
    part[i].x = -10
    part[i].color = `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`
    
    part[i].w = rand(-7,7)
    part[i].h = rand(-7,7)

    part[i].vx = rand(-10,10)
    part[i].vy = rand(-10,10)

}

function rand(low, high){

    return Math.random() * (high - low) + low;
}



//the main game
function main()
{

    state[`play`]
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //the movement for player one
    if(keys[`w`])
    {
        pad[0].vy += -pad[0].force
    }
    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    
    //this is for p2 moving
    if(keys[`ArrowUp`]){
        pad[1].vy += -pad[1].force
    }
    if(keys[`ArrowDown`]){
        pad[1].vy += pad[1].force
    }
    
    //ball movement
    ball.move()
    

    //this wont be added to the list
    //ball collision 
    if(ball.x < 0)//this is if the ball goes to the left side of the screen
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[1].score += 1
    }
    if(ball.x > c.width)//if the ball goes to the right of the screen
    {
        ball.x = c.width/2
        ball.y  = c.height/2
        player[0].score += 1
    }
    if(ball.y < 0)//this is if the ball goes to the top
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)//if the ball goes to the bottom of the screen
    {
        ball.y = c.height
        ball.vy = -ball.vy
    
    }

    ball.draw()

    //this is looping thought the length of the score board loop
    for(var i = 0; i < scoreBoard.length; i++){
        //this is the volisity for the player
        pad[i].vy *= fy
        

        //this is making the player move
        pad[i].move();
        

        

        //p1 collision
        if(pad[i].y < 0+pad[i].h/2)
            {
                pad[i].y = 0+pad[i].h/2
                pad[i].vy = 0
                
            }
        //player 2 collision
        if(pad[i].y > c.height-pad[i].h/2)
            {
                pad[i].y = c.height-pad[i].h/2
                pad[i].vy = 0

            }

        if(ball.collide(pad[i]))
            {
                ball.x = pad[i].x + (pad[i].w/2 + ball.w/2)*pad[i].dir
                ball.vx = -ball.vx;
                
                for(let x = 0; x < part.length; x++){
                    part[x].x = pad[i].x
                    part[x].y = pad[i].y
                    
                }
            
                

            }
        

        pad[i].draw()
        //this is changing the html of the score board
        scoreBoard[i].innerHTML = player[i].score
    }

    for(let i = 0; i < part.length; i++){
        if(part[i].collide(stage)){
            part[i].move();
            part[i].draw()
        }
        
        
    }
}

