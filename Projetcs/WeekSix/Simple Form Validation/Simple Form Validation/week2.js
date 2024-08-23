// JavaScript Document

//this is where i will be making the patterns
//this is looking for anything that is not a-z or the -
var namePattern =  /[^a-zA-Z]\-{0,1}/;

var emailPattern = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i;

var phonePattern = /^\d[0-9]{9}/;

//im to afrade to deleat this just incase it brakes everything, its the way im checking if the fields are fill. When ever the user enters in the value it would take one away and if the number get to 0 it would show the display, 
//If the user does not enter the right value it would not subtract from the the number an the display would not show
let valed = 5;

//this is just the main function, just because
function main(){
    
    clicked(valed)
}
//this is the person object,
var person = {
    fName:``,
    lName:``,
    email:``,
    phone:``
}
//Just the main function
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
    
    

    //this is the whole name section for both the first name and last name
    for(let i = 0; i < 2; i++){
        if(namePattern.test(textInputs[i].value) == true){
            allSpans[i].innerHTML = '*'
            //nameSpan.classList.add(`errorColors`)
            pTags[i].classList.add(`errorColors`)
        }
        else{
            //if the user does not put any value in it would say you need to put a value
            if(textInputs[i].value == ``){
                allSpans[i].innerHTML = '*'
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
    }
    else{
        emailSpans.innerHTML = '*'
        emailSpans.classList.add(`errorColors`)
        pTags[2].classList.add(`errorColors`)
    }

    //################This is for the confirming the email
    if(textInputs[2].value === textInputs[3].value){
        if(textInputs[3].value == ``){
            pTags[3].classList.add(`errorColors`)
            confirmEmailSpan.classList.add(`errorColors`)
            confirmEmailSpan.innerHTML = `*`
        }else{
            confirmEmailSpan.classList.remove(`errorColors`)
            pTags[3].classList.remove(`errorColors`)
            confirmEmailSpan.innerHTML = ` `
            valed -= 1
        }
    }
    else{
        pTags[3].classList.add(`errorColors`)
        confirmEmailSpan.classList.add(`errorColors`)
        confirmEmailSpan.innerHTML = `*`
    }

    //##############this is the phone number section#########################
    if(phonePattern.test(textInputs[4].value) == true){
        pTags[4].classList.remove(`errorColors`)
        // confirmEmailSpan.classList.add(`errorColors`)
        phoneSpan.innerHTML = ` `
        valed -= 1
    
    }else{
        pTags[4].classList.add(`errorColors`)
        // confirmEmailSpan.classList.add(`errorColors`)
        phoneSpan.innerHTML = `*`
    }
    
    console.log(finaloutput)
    //so this is where i am getting rid of the div, adding the values to the player object, and displaying, it could be more flushed out but...
    if (valed <= 0 ){

        //this is just showing the display
        finaloutput.style.display = `block`;
        
        //this is where i am setting the values to the object
        person.fName = textInputs[0].value;
        person.lName = textInputs[1].value;
        person.email = textInputs[2].value;
        person.phone = textInputs[4].value;


        //this is removing the div
        theDiv.remove();
        
        //this is the senction i am on, its just adding the conformaiton
        finaloutput.innerHTML += `<p>Name: ${person.fName} ${person.lName}</p>`;
        finaloutput.innerHTML += `<p>Email: ${person.email}</p>`;
        finaloutput.innerHTML += `<p id="phoneDisplay">Phone: </p>`;
        //this is for the whole section of adding the `-` to the phone number
        let phoneOutput = document.querySelector(`#phoneDisplay`)
        for(let i = 0; person.phone.length > i; i++ ){
            //this is adding the numbers
            phoneOutput.innerHTML += `${person.phone[i]}`;
            //if the first 3 numbers are down than it will add a -
            if(i==2){
                phoneOutput.innerHTML += `-`
            }
            //if the next three numbers are down it will add a `-`
            if(i==5){
                phoneOutput.innerHTML += `-`
            }

        }
    }
}
