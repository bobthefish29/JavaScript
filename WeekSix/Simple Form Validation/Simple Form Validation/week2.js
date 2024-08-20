// JavaScript Document


let nameValue = /\s+/g

console.log(nameValue)


// let text = " Thebestthingsinlifearefree";
// let pattern = / /g;

// let result = pattern.test(text);

// console.log(result)

var namePattern =  /\W{0,1}(_){0,1}/g;



function clicked(){

    let button = document.querySelector(`input[type="button"]`)

    let theDiv = document.querySelector(`div[id="form"]`)

    // let nameInput = document.querySelector(`#first-name`)
    // let lastInput = document.querySelector(`#last-name`)

    let nameSpan = document.querySelector(`#fn-error`)


    let textInputs = document.querySelectorAll(`input`)




    if(namePattern.test(textInputs[0].value) == true){
        nameSpan.innerHTML = 'ERROR: Usable chartor'
    }
    else{

        if(textInputs[0].value == ``){
            nameSpan.innerHTML = 'ERROR: You need data'
        }
        else{
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