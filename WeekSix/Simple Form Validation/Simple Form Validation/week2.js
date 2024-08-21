// JavaScript Document

//this is where i will be making the patterns
//this is looking for anything that is not a-z or the -
var namePattern =  /[^a-zA-Z]\-{0,1}/;

var emailPattern = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;

var phonePattern = /^\d[0-9]{9}/;

let valed = 5;

function main(){
    
    clicked(valed)

}




var person = {

    fName:``,
    lName:``,
    email:``,
    phone:``

}




function clicked(valed){

    // let button = document.querySelector(`input[type="button"]`)
    let theDiv = document.querySelector(`div[id="form"]`)
    

    // let nameInput = document.querySelector(`#first-name`)
    // let lastInput = document.querySelector(`#last-name`)

    //this is just selectiong all the ptags so i dont have to do it over and over again
    let pTags = document.querySelectorAll('div[id="form"] p')

    //this is the start of the span tags
    let emailSpans = document.querySelector(`#email-error`)
    let confirmEmailSpan = document.querySelector(`#confirmEmail-error`)
    let phoneSpan = document.querySelector(`#phone-error`)

    let allSpans = document.querySelectorAll(`div[id="form"] span`)
    

    //this is just getting the text for all the inputs so i dont have to do it multply times
    let textInputs = document.querySelectorAll(`input`)

    let finaloutput = document.querySelector(`#confirmation`)
    let finaloutputP = document.querySelector(`#info`)
    
    

    //this is the whole name section for both the first name and last name
    for(let i = 0; i < 2; i++){
        if(namePattern.test(textInputs[i].value) == true){
            allSpans[i].innerHTML = '* Wrong Item'
            //nameSpan.classList.add(`errorColors`)
            pTags[i].classList.add(`errorColors`)
        }
        else{
            //if the user does not put any value in it would say you need to put a value
            if(textInputs[i].value == ``){
                allSpans[i].innerHTML = '* NoData'
                //nameSpan.classList.add(`errorColors`)
                pTags[i].classList.add(`errorColors`)
                // nameSpan.style.color = "Red"
            }
            else{
                //This is for when the user enters in a string that fallows the correct ways we want it
                allSpans[i].innerHTML = ' '
                //nameSpan.style.color = "black"
                //nameSpan.classList.remove(`errorColors`)
                pTags[i].classList.remove(`errorColors`)
                valed -= 1
                console.log(valed)
            } 
        } 
    }


    //#################This is the first email section######################
    if(emailPattern.test(textInputs[2].value) == true){
        //this is going to be for if the user does add the email
        emailSpans.innerHTML = ' '
        emailSpans.classList.remove(`errorColors`)
        pTags[2].classList.remove(`errorColors`)
        valed -= 1
        console.log(valed)
    }
    else{

        emailSpans.innerHTML = '* not an email'
        emailSpans.classList.add(`errorColors`)
        pTags[2].classList.add(`errorColors`)
    }


    //################This is for the confirming the email
    if(textInputs[2].value === textInputs[3].value){
        if(textInputs[3].value == ``){
            pTags[3].classList.add(`errorColors`)
            confirmEmailSpan.classList.add(`errorColors`)
            confirmEmailSpan.innerHTML = `* Need data`
        }else{
            confirmEmailSpan.classList.remove(`errorColors`)
            pTags[3].classList.remove(`errorColors`)
            confirmEmailSpan.innerHTML = ` `
            valed -= 1
            console.log(valed)
        }
    }
    else{
        pTags[3].classList.add(`errorColors`)
        confirmEmailSpan.classList.add(`errorColors`)
        confirmEmailSpan.innerHTML = `* does not match`
    }





    //##############this is the phone number section#########################
    if(phonePattern.test(textInputs[4].value) == true){
        pTags[4].classList.remove(`errorColors`)
        // confirmEmailSpan.classList.add(`errorColors`)
        phoneSpan.innerHTML = ` `
        valed -= 1
        console.log(valed)
    
    }else{
        pTags[4].classList.add(`errorColors`)
        // confirmEmailSpan.classList.add(`errorColors`)
        phoneSpan.innerHTML = `*`
    }
    
    console.log(finaloutput)
    //this is for when all the sections are filled in that the div would be hidden
    if (valed <= 0 ){
        
        finaloutput.style.display = `block`
        

        person.fName = textInputs[0].value
        person.lName = textInputs[2].value
        person.email = textInputs[3].value
        person.phone = textInputs[5].value

        theDiv.remove()
        
        //this is the senction i am on, its just adding the conformaiton
        finaloutput.innerHTML += "hello"

    }








    
}
