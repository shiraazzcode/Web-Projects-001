//Program name : Background color changer
//Author: Sheraz Mehdi
//Date : 1 March, 2024

//Select elements
let color = document.getElementById("color");
let btn = document.getElementById("btn");


//Add event listener to the button.
//To do this, first create an array of colors


//Array of colors
let colors = ['Red', 'Blue', 'Orange', 'Yellow', 'Brown', 'Magenta', 'Green', 'Black',];


btn.addEventListener("click", function(){
    let ColorNow = colors[randomColor()];
    document.body.style.backgroundColor = ColorNow;
    color.innerHTML = ColorNow;
    color.style.color = ColorNow;
    document.getElementById("heading").style.color = ColorNow;
});
 

//function that choose random color when called.
function randomColor(){
    //using math random method
    let num = Math.random() * colors.length;
    let rnum = Math.floor(num);
    return rnum;
}
