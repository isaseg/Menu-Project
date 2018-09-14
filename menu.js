var spicy = {
  name: "Spicy Burger",
  meat: "Angus Beef",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Mayo, Sriracha",
  price: 12.95
};

var mild = {
  name: "Mild Burger",
  meat: "Turkey",
  veg: "Lettuce, Tomato, Onion",
  sauce: "Mayo, Mustard",
  price: 10.95
};

var tax = 1.04712;

document.getElementById('oneTitle').innerHTML = spicy.name;
document.getElementById('oneMeat').innerHTML = "Meat type: " + spicy.meat;
document.getElementById('oneVeg').innerHTML = "The vegetables will be: " + spicy.veg;
document.getElementById('oneSauce').innerHTML = "The sauces will be: " +  spicy.sauce;
document.getElementById('twoTitle').innerHTML = mild.name;
document.getElementById('twoMeat').innerHTML = "Meat type: " + mild.meat;
document.getElementById('twoVeg').innerHTML = "The vegetables will be: " + mild.veg;
document.getElementById('twoSauce').innerHTML = "The sauces will be: " +  mild.sauce;

function onePrice() {
  var onetotal = spicy.price * tax;
  document.getElementById('oneTotal').innerHTML = "Your total is $" + onetotal.toFixed(2);
}
function twoPrice() {
  var twototal = mild.price * tax;
  document.getElementById('twoTotal').innerHTML = "Your total is $" + twototal.toFixed(2);
}