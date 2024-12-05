//Toggle CSS fucntion
function toggleCSS() {
    let style = document.getElementById("style");
    let attribute = style.getAttribute("href");
    //Check
    if (attribute == "./CSS/style_1.css") {
        style.setAttribute("href", "./CSS/style_2.css");
    }
    else style.setAttribute("href", "./CSS/style_1.css");
}
//Fuction for getting a random range
function getRandomInt(min, max) {
    // this function taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

//Add all screenshots in an array
//Screenshots from here are cloned to the courserImg div depening on which game user is hovering
let screenshotArray = document.getElementsByClassName("screenshot");

//Controll which screenshot to show
let randomScreenshot = 0;
let previosScreenshotEntry = -1;

//If reaches 0, user is no longer hovering image
let movementMouse = 0;

//Update mouse positions
document.addEventListener("mousemove", logKey);
function logKey(e) {
    //Get user x and y and set positions
    document.getElementById("courserImg").style.left = `${e.pageX-180}px`;
    document.getElementById("courserImg").style.top = `${e.pageY+16}px`;

    //Remove if not hovering anything
    movementMouse = Math.max(movementMouse -1 , 0);
    if (movementMouse == 0) {
        document.getElementById("courserImg").innerHTML = "";
    }
};

//Image follow courser
function imageCourser(_count) {
    //Check if using style_2
    let style = document.getElementById("style");
    let attribute = style.getAttribute("href");
    if (attribute == "./CSS/style_1.css") return 0;

    //
    let min = 0;
    let max = 0;

    //Access correct image
    //Screenshots are stored in order (from creation in HTML document)
    switch(_count) {
        //No Sweet Looks
        case 0: {
            min = 0;
            max = 4;
        } break;
        //Ginnung
        case 1: {
            min = 4;
            max = 8
        } break;
        //Fusion shift
        case 2: {
            min = 8;
            max = 12;
        } break;
    }

    //Clear previous image
    document.getElementById("courserImg").innerHTML = "";

    //Choose a random screenshot
    randomScreenshot = getRandomInt(min, max);

    //Save picked screenshot
    previosScreenshotEntry = randomScreenshot;

    //Append the final chosen screenshot from array to courser div
    var final = screenshotArray[randomScreenshot].cloneNode();
    document.getElementById("courserImg").appendChild(final); 
    
    //Set timer for image update, when 0 remove screenshot
    movementMouse = 10;
    //console.log(final);
    
    //
    //console.log(imageArray);
    console.log(movementMouse);
    //console.log(screenshotArray);
}