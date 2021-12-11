let numberProperties = [
    "width", 
    "height", 
    "padding", 
    "margin"];
let otherProperties = [
    "background-color", 
    "border-width", 
    "border-style",
    "border-color", 
    "outline-width", 
    "outline-style", 
    "outline-color"];

function load() {
    let style = document.getElementById("box").style;
    for(let property of numberProperties.concat(otherProperties)){
        style.property = document.getElementById(property).value;
    }
}

function format() {
    let style = document.getElementById("box").style;
    for(let property of numberProperties){
        style[property] = parseInt(document.getElementById(property).value,10)+"px";
    }
    for(let property of otherProperties){
        style[property] = document.getElementById(property).value; 
    }
}
