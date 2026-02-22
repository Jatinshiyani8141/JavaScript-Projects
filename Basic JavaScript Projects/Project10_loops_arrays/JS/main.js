// While Loop function
function count_to_Ten() {
    let text = "";
    let number = 5;

    while (number > 0) {
        text += "Countdown: " + number + "<br>";
        number--;
    }

    text += "Blast off!";
    document.getElementById("Counting_to_Ten").innerHTML = text;
}


// For Loop function
function for_Loop() {
    let content = "";

    for (let i = 2; i <= 20; i += 2) {
        content += i + " is an even number<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = content;
}


// Array function
function color_array() {
    let fruits = [];
    fruits[0] = "Apple";
    fruits[1] = "Banana";
    fruits[2] = "Mango";
    fruits[3] = "Strawberry";

    document.getElementById("Array").innerHTML =
        "My favorite fruit today is " + fruits[2] + ".";
}


// Creating an object using let
function car() {
    let person = {
        name: "Alex",
        age: 25,
        hobby: "Coding",
        city: "Toronto"
    };

    document.getElementById("car").innerHTML =
        person.name + " is " + person.age + " years old and loves " +
        person.hobby + " in " + person.city + ".";
}