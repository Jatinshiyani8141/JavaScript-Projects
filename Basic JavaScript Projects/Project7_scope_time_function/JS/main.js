// ---------- GLOBAL VARIABLE ----------
var x = 10; // global variable

// ---------- LOCAL VARIABLE ----------
function Add_numbers_1() {
    var x = 99; // local variable
    document.write("Local x + 10 = " + (x + 10) + "<br>");
}

// ---------- FUNCTION WITH GLOBAL VARIABLE ----------
function Add_numbers_2() {
    document.write("Global x + 11 = " + (x + 11) + "<br>");
    console.log("Global x is:", x); // debug in console
}

// ---------- CALLING THE ABOVE FUNCTIONS ----------
Add_numbers_1();
Add_numbers_2();

// ---------- IF STATEMENT FUNCTION ----------
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML =
            "It is currently before 6 PM.";
    }
}

// ---------- INTENTIONAL ERROR FUNCTION FOR DEBUGGING ----------
function error_Function() {
    console.log(undeclaredVariable); // This will throw a ReferenceError
    // Open Chrome DevTools → Console to see the error
}

// ---------- USER INPUT FUNCTION WITH IF/ELSE ----------
function get_Reply() {
    var number = document.getElementById("userInput").value;

    if (number < 10) {
        document.getElementById("feedback").innerHTML =
            "Your number is less than 10.";
    } else {
        document.getElementById("feedback").innerHTML =
            "Your number is 10 or greater.";
    }
}

// ---------- TIME FUNCTION ----------
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12) {
        Reply = "It is morning.";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}
