//sellecting the stuff to hide the options
var options = q('h2')
var divs = q(`div[class="sides"]`)
//really hiding the options
options.addEventListener('click',e=>divs.classList.toggle("hidden"))

var fill = qAll(`.fill`)

//this could be tossed in a loop
fill[0].addEventListener(`input`, (e)=>{
    player[0].fill = e.target.value
    pad[0].fill = e.target.value
    
})

fill[1].addEventListener(`input`, (e)=>{
    player[1].fill = e.target.value
    pad[1].fill = e.target.value
})












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





/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
