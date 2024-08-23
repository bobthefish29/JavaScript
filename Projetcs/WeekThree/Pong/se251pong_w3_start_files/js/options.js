//sellecting the stuff to hide the options
var options = q('h2')
var divs = q(`div[class="sides"]`)
//really hiding the options
options.addEventListener('click',e=>divs.classList.toggle("hidden"))

var fill = qAll(`.fill`)

var stroke = qAll('.stroke')

var inputs = qAll('input')

var inputColor = qAll('input[type="color"]')

var playerKey = qAll(`input[type="text"]`)

var output = qAll('div[class="output"]')

var airadio = q('.airadio')

let press = 0

//this could be tossed in a loop
fill[0].addEventListener(`input`, (e)=>{
    player[0].fill = e.target.value
    pad[0].fill = e.target.value
})

fill[1].addEventListener(`input`, (e)=>{
    player[1].fill = e.target.value
    pad[1].fill = e.target.value
})
//this is for all the strokes
stroke[0].addEventListener('input',(e)=>{
    player[0].stroke = e.target.value
    pad[0].stroke = e.target.value
})
stroke[1].addEventListener('input',(e)=>{
    player[1].stroke = e.target.value
    pad[1].stroke = e.target.value
})



//would want an if here for if the button is pressed
inputs.forEach((e)=>{ 
    e.addEventListener('focus',(e)=>{
        //currentState = "pause"
        if(press == 0){
            currentState = "pause"
        }
        else{
            currentState = `ai`
        }       
    })
    e.addEventListener('blur',(e)=>{
        
        if(press == 0){
            currentState = 'game'
        }
        else{
            currentState = `ai`
        }        

    })
})


airadio.addEventListener('click',(e)=>{
    if(press == 0){
        currentState = 'ai'
        press += 1
        output[11].innerHTML = currentState
    }
    else{
        currentState = `game`
        press -= 1
        output[11].innerHTML = currentState
    }
})


inputColor[0].value = pad[0].fill
inputColor[1].value = pad[0].stroke


inputColor[2].value = pad[1].fill
inputColor[3].value = pad[1].stroke


output[0].innerHTML = pad[0].fill
output[1].innerHTML = pad[0].stroke

output[2].innerHTML = player[0].keys.u
output[3].innerHTML = player[0].keys.d
output[4].innerHTML = player[0].keys.s
// output[5].innerHTML = pad[0].stroke

output[6].innerHTML = pad[1].fill
output[7].innerHTML = pad[1].stroke
output[8].innerHTML = player[1].keys.u
output[9].innerHTML = player[1].keys.d
output[10].innerHTML = player[1].keys.s

output[11].innerHTML = currentState





inputColor[0] = player[0].fill


fill[0].addEventListener('input',(e)=>{output[0].innerHTML = e.target.value})
fill[1].addEventListener('input',(e)=>{output[6].innerHTML = e.target.value})


stroke[0].addEventListener('input',(e)=>{output[1].innerHTML = e.target.value})
stroke[1].addEventListener('input',(e)=>{output[7].innerHTML = e.target.value})


//this is loop for running thought when there is an input
playerKey.forEach((i, num)=>{

    i.addEventListener('input',(e)=>{
        
        //this is the players input
        //the way this works is that its checking if the class , and the index number of the player key list is the vlaue it would change that key
        if(playerKey[num].classList.value == "u" && num < 2){//Ex this is checking if the class is u and if the value is less than 2
            player[0].keys.u = playerKey[num].value//this is setting the inputed value to that key
            output[num + 2].innerHTML = playerKey[num].value//this is changing the text to show the key the player is using
        }else if(playerKey[num].classList.value == "d" && num < 2){
            player[0].keys.d = playerKey[num].value
            output[num + 2].innerHTML = playerKey[num].value
        }else if(playerKey[num].classList.value == "s" && num <= 2){
            player[0].keys.s = playerKey[num].value
            output[num + 2].innerHTML = playerKey[num].value
        }else if(playerKey[num].classList.value == "u" && num > 2){
            player[1].keys.u = playerKey[num].value
            output[num + 5].innerHTML = playerKey[num].value
        }else if(playerKey[num].classList.value == "d" && num > 2){
            player[1].keys.d = playerKey[num].value
            output[num + 5].innerHTML = playerKey[num].value
        }else if(playerKey[num].classList.value == "s" && num > 2){
            player[1].keys.s = playerKey[num].value
            output[num + 5].innerHTML = playerKey[num].value
        }
        
        //this is the colors
        output[0].innerHTML = pad[0].fill
        output[1].innerHTML = pad[0].stroke

        output[6].innerHTML = pad[1].fill
        output[7].innerHTML = pad[1].stroke

    })//event listener
})//for each

//this is where i will put the functions
//this is really just the whole query selector
function q(element){
    return document.querySelector(element);
}
//this is selecting all the items i am sending
function qAll(element){
    let obj = document.querySelectorAll(element);
    return obj;
}

//i am leaving off with just needing to add my own cration to the game, it can be anything i want. i am going to do an AI but its going to be hard

