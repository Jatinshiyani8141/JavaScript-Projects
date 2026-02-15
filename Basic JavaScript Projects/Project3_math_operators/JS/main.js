function addition() { //Defining and naming the addition function
    var add = 12+5;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; //Print the result in HTML
}
function subtraction() { //Defining and naming the subtraction function 
    var sub = 16-6;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; //Print the result in HTML
}
function multiplication() { //Defining and naming the multiplication function 
    var mult = 30*3;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult; //Print the result in HTML
}
function division() { //Defining and naming the division function 
    var divide = 50/5;
    document.getElementById("Div").innerHTML = "39 / 3 =" + divide; //Print the result in HTML
}
function random() { //Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in HTML
}
function modulus_operator() { //Defining and naming the modulus operator function
    var modulus = 60 % 3;
    document.getElementById("Mod").innerHTML =
    "When you divide 38 by 4 you have a remainder of: " + modulus; //Print the result in HTML
}
function Increment() { //Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Saves the text of the HTML element to a variable
    value++; //Add one to the value
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
}
function Decrement() { //Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable
    value--; //Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML
}