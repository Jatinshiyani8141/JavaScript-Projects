function my_Dictionary() {
    var Car = {
        Brand: "BMW",
        Model: "M4",
        Color: "Black",
        Year: 2023,
        Price: "$80,000"
    };
    delete Car.Model; //this removes Model KVP from the Dictionary before it is displayed 
    document.getElementById("Dictionary").innerHTML = Car.Model;
    
}