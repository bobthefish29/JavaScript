// JavaScript Document

//this is where i will be making the patterns
//this is looking for anything that is not a-z or the -
var namePattern =  /[^a-zA-Z]\-{0,1}/g;



function clicked(){

    let button = document.querySelector(`input[type="button"]`)

    let theDiv = document.querySelector(`div[id="form"]`)

    // let nameInput = document.querySelector(`#first-name`)
    // let lastInput = document.querySelector(`#last-name`)

    let nameSpan = document.querySelector(`#fn-error`)


    let textInputs = document.querySelectorAll(`input`)

    //the way this works is checking if the string the user enters is True, than it will say sorry no
    //we are looking for a false reply, that means that the string the user enters is A-Z
    if(namePattern.test(textInputs[0].value) == true){
        nameSpan.innerHTML = 'ERROR: Usable chartor'
    }
    else{
        //if the user does not put any value in it would say you need to put a value
        if(textInputs[0].value == ``){
            nameSpan.innerHTML = 'ERROR: You need data'
        }
        else{
            //This is for when the user enters in a string that fallows the correct ways we want it
            nameSpan.innerHTML = 'Right'
        } 
    }
    
    if(namePattern.test(textInputs[1].value) == true){
        console.log('true')
    }
    else{
        console.log('false')
    }

    //console.log(theDiv)



    //This is removing the div 
    // theDiv.remove()










    // console.log(button)
}



// var theDiv = document.querySelector(`input[type="button"]`)


//         theDiv.addEventListener('click',(e)=>{
//             console.log('funny')
//         })

// //var nameInput = q()

// var submitButton = document.querySelector(`input`)


// console.log(submitButton)


// // submitButton.addEventListener(`click`,(e)=>{
// //     console.log(nameInput)
// // })


// var playerKey = qAll(`input[type="text"]`)

// console.log(playerKey)


// function qAll(element){
//     let obj = document.querySelector(element);
//     return obj;
// }