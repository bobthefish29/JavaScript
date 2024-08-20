//this is the whole project list
//the slots are as [Title,Link,Immage]
const projectList = [
    [`title`,`link`,`Images/ProjectScreenShots/TestingImage.jpg`],
    [`title`,`link`,`Images/ProjectScreenShots/TestingImage.jpg`],
    [`title`,`link`,`Images/ProjectScreenShots/TestingImage.jpg`],
    [`title`,`link`,`Images/ProjectScreenShots/TestingImage.jpg`],
    [`title`,`link`,`Images/ProjectScreenShots/TestingImage.jpg`],
    [`title2`,`link2`,`Images/ProjectScreenShots/TestingImage.jpg`]
]

///////////////////////////////////////////////////////////////////////////////////////
//this is the start of the slide show section
/////////////////////////////////////////////////////////////////////////////////////
//the way its going to work is the pink sections are going to be cards, than the orange will be a photo of the project, when you have a different card slected you will get a different item
//so what it would be is that when you hover over the pink you would change the opacity to full and the ones around less,
//when its i would want it to sycle though a path

//this is how to get to a different page
// let test = window.location = `Test.html`


////////////This is where i am making the projects in the slide show/////////////////
//THis is the vars
let project;
let SlideShowDisplay;
let projectButton;
let projectLabel;
let projectImage;
//this is just selection the slide show
let SlideShowDisplaySection = document.querySelector(`#SlideShowSection`)

// this is running throuh the lenght of big list, list is 1d the biglist is 2d
//this loop if for making the items, thats why its only a one d loop
for(let i = 0; i < projectList.length; i++){

    // this is making a new pink section, and giving it the hover effect
    SlideShowDisplay = document.createElement(`div`)
    SlideShowDisplay.setAttribute(`class`, `slideShowDisplay`)
    //test =+ SlideShowDisplay

    //SlideShowDisplayTemp = document.querySelector(`slideShowDisplay`)
    //SlideShowDisplay.addEventListener('mouseover',e=>moveTemp.hover(document.querySelector(`#slideShowDisplay`)))

    // this is making a black section the making of the div
    project = document.createElement('div')
    project.setAttribute(`class`,`slideShowDiv`)

    //this is making the label, and giving it the values
    projectLabel = document.createElement(`h3`)
    projectLabel.innerHTML = projectList[i][0]
    projectLabel.setAttribute(`class`, `projectLabel`)

    //this is the making of the img
    projectImage = document.createElement(`img`)
    projectImage.setAttribute(`class`, `projectImage`)
    projectImage.setAttribute(`src`, projectList[i][2])

    // .style.opacity (to change the opasity)

    //this is making the button
    projectButton = document.createElement(`button`)
    projectButton.setAttribute(`class`, `projectButton`)
    projectButton.innerHTML = 'Click'


    //this is adding items to the project item
    project.appendChild(projectLabel);
    project.appendChild(projectImage);
    project.appendChild(projectButton);

    //This is adding the project item to the display list
    SlideShowDisplay.appendChild(project)
    //this is adding the desplay section to the display element
    SlideShowDisplaySection.appendChild(SlideShowDisplay)

}//this is the end of the for loop /////////////////////////////////////////////
//also this is where i aming going to be doing the event lisnears to the items
