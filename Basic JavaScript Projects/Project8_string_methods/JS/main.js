// .concat() method
function full_sentence() {
    var part_1 = "My JavaScript ";
    var part_2 = "skill... ";
    var part_3 = " is improving.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

// .slice() method
function slice_Method() {
    var sentence = "slice and Dice";
    var section = sentence.slice(10, 14); // gets "Dice"
    document.getElementById("slice").innerHTML = section;
}

// .toString() method
function string_Method() {
    var myNumber = 1234;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

// .toPrecision() method
function precision_method() {
    var myNumber = 531.12546487432;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);
}