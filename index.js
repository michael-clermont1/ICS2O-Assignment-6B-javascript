var theForm = document.forms["pizzaform"];
var pizza_prices = new Array();
pizza_prices["Round6"]=20;
pizza_prices["Round8"]=25;
pizza_prices["Round10"]=35;
pizza_prices["Round12"]=75;
function getPizzaSizePrice()
{
    var PizzaSizePrice=0;
    var theForm = document.forms["pizzaform"];
    var selectedPizza = theForm.elements["selectedpizza"];
    for(var i = 0; i < selectedPizza.length; i++)
    {
        if(selectedPizza[i].checked)
        {
            PizzaSizePrice = pizza_prices[selectedPizza[i].value];
            break;
        }
    }
    return PizzaSizePrice;
}
var toppings_prices= new Array();
toppings_prices["None"]=0;
toppings_prices["Pepperoni"]=1;
toppings_prices["Pineapple"]=1.50;
toppings_prices["Mushrooms"]=1.50;
toppings_prices["Sausage"]=1.50;
toppings_prices["Bacon"]=1.50;
toppings_prices["Green peppers"]=1.50;
toppings_prices["Black olives"]=1.50;
toppings_prices["Onions"]=1.50;
toppings_prices["Ham"]=1.50;
toppings_prices["Shrimp"]=1.75;
toppings_prices["Chicken"]=1.75;
toppings_prices["Extra cheese"]=1.25;

function getToppingsPrice()
{
    var pizzaToppingPrice=0;
    var theForm = document.forms["pizzaform"];
     var selectedpizza = theForm.elements["Toppings"];
    pizzaToppingPrice = toppings_prices[selectedpizza.value];
    return pizzaToppingPrice;
}
var toppings2_prices= new Array();
toppings2_prices["None"]=0;
toppings2_prices["Pepperoni"]=1;
toppings2_prices["Pineapple"]=1.50;
toppings2_prices["Mushrooms"]=1.50;
toppings2_prices["Sausage"]=1.50;
toppings2_prices["Bacon"]=1.50;
toppings2_prices["Green peppers"]=1.50;
toppings2_prices["Black olives"]=1.50;
toppings2_prices["Onions"]=1.50;
toppings2_prices["Ham"]=1.50;
toppings2_prices["Shrimp"]=1.75;
toppings2_prices["Chicken"]=1.75;
toppings2_prices["Extra cheese"]=1.25;

function getToppings2Price()
{
    var pizzaTopping2Price=0;
    var theForm = document.forms["pizzaform"];
     var selectedpizza = theForm.elements["Toppings2"];
    pizzaTopping2Price = toppings2_prices[selectedpizza.value];
    return pizzaTopping2Price;
}
var toppings3_prices= new Array();
toppings3_prices["None"]=0;
toppings3_prices["Pepperoni"]=1;
toppings3_prices["Pineapple"]=1.50;
toppings3_prices["Mushrooms"]=1.50;
toppings3_prices["Sausage"]=1.50;
toppings3_prices["Bacon"]=1.50;
toppings3_prices["Green peppers"]=1.50;
toppings3_prices["Black olives"]=1.50;
toppings3_prices["Onions"]=1.50;
toppings3_prices["Ham"]=1.50;
toppings3_prices["Shrimp"]=1.75;
toppings3_prices["Chicken"]=1.75;
toppings3_prices["Extra cheese"]=1.25;

function getToppings3Price()
{
    var pizzaTopping3Price=0;
    var theForm = document.forms["pizzaform"];
     var selectedpizza = theForm.elements["Toppings3"];
    pizzaTopping3Price = toppings3_prices[selectedpizza.value];
    return pizzaTopping3Price;
}
var toppings4_prices= new Array();
toppings4_prices["None"]=0;
toppings4_prices["Pepperoni"]=1;
toppings4_prices["Pineapple"]=1.50;
toppings4_prices["Mushrooms"]=1.50;
toppings4_prices["Sausage"]=1.50;
toppings4_prices["Bacon"]=1.50;
toppings4_prices["Green peppers"]=1.50;
toppings4_prices["Black olives"]=1.50;
toppings4_prices["Onions"]=1.50;
toppings4_prices["Ham"]=1.50;
toppings4_prices["Shrimp"]=1.75;
toppings4_prices["Chicken"]=1.75;
toppings4_prices["Extra cheese"]=1.25;

function getToppings4Price()
{
    var pizzaTopping4Price=0;
    var theForm = document.forms["pizzaform"];
     var selectedpizza = theForm.elements["Toppings4"];
    pizzaTopping4Price = toppings4_prices[selectedpizza.value];
    return pizzaTopping4Price;
}
function getTotal()
{
    
    var pizzaPrice = getPizzaSizePrice() + getToppingsPrice() + getToppings2Price() + getToppings3Price() + getToppings4Price();
                         
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Pizza $"+pizzaPrice;
 
}
