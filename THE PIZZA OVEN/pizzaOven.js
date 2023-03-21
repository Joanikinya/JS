/* Create a function called pizzaOven that returns a JavaScript (Pizza) Object
Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
*/
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozarella", ["pepperoni", "sausage"]);
console.log(p1);

//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p1);

//Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

function randomPizza() {
    var arr = []
    var crustType = [
        ["hand tossed", "mozarella", "mushrooms"],
        ["deep dish","feta", "mushrooms", "onions"],
        ["traditional", "mozarella", "pepperoni", "sausage"]
    ]
    var num1 = Math.floor(Math.random()*crustType.length);
    arr.push = crustType[num1];

    return arr;
}

console.log(randomPizza());