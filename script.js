// OBJECT INSTANTIATION

const date = new Date();             
const hour = date.getHours();

// VARIABLE
var greeting; 

// IF STATEMENT
if(hour > 0 && hour < 12){
    greeting = "Good Morning!"
} else if (hour >= 12 && hour < 18){
    greeting = "Good Afternoon!"
} else if (hour >= 18){
    greeting = "Good Evening!"
} else {
    greeting = "Hello!"
}
document.getElementById("js-greeting").innerHTML = "<h5>" + greeting + "</h5>";


// FUNCTION + jQuery ANIMATION + EVENT LISTENER
$(document).ready(function(){
    $("button").on("click", function(){
        $("button").fadeOut();
        $("button").fadeIn(1000);
    });
});

$("button").on("click", function(){
    document.getElementById("btn-clicked").innerHTML = "You clicked a button!";
});


// ARRAY + FOR STATEMENT
const theArray = ["This",  "is", "array"];

for(let i=0; i<theArray.length; i++){
    document.getElementById("array-text").innerHTML = theArray[0] + " " + theArray[1] + " " + theArray[2];
};


// SWITCH that outputs in the console

let x = 3;   //value can be changed

switch (x){
case 1:
    console.log("switch case keyword: " + theArray[0].toUpperCase() + " - (selected case 1)");
    break;
case 2:
    console.log("switch case keyword: " + theArray[1].toUpperCase() + " - (selected case 2)");
    break;
case 3:
    console.log("switch case keyword: " + theArray[2].toUpperCase() + " - (selected case 3)");
    break;
default:
    console.log("Not Found.");
}
