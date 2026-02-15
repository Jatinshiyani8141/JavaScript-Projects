// ---------- TERNARY OPERATOR ----------
function Ride_Function() {
    var Age, Can_ride;
    Age = document.getElementById("Age").value;

    Can_ride = (Age < 18) ? "You are too young to ride." : "You can ride!";

    document.getElementById("Ride").innerHTML = Can_ride;
}

// ---------- CONSTRUCTOR FUNCTION ----------
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jatin = new Vehicle("Dodge", "Viper", 2020, "Red");
var Riya = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Niv = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Jatin drives a " +
        Jatin.Vehicle_Color +
        "-colored " +
        Jatin.Vehicle_Model +
        " manufactured in " +
        Jatin.Vehicle_Year + ".";
}

// ---------- NESTED FUNCTION ----------
function add_strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }

    Adding("World");

    document.getElementById("Nested_Function").innerHTML = start_string;
}
