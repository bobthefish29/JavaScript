let myPromise = new Promise(function(resolve, reject){
    let seccess = true;

    if(seccess){
        resolve("THIS IS GOOd")
    } else{
        reject("THIS IS BAD")
    }


})

myPromise
    .than((data)=>{console.log(data); return `this is returned`})
