//point 1
//addition
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("The Total sum is " + sum + "<br>");

//point 2
//subtraction
document.write("The Total is " + (num1 - num2) + "<br>");
//multiplication
document.write("The Total  is " + (num1 * num2) + "<br>");
//division
document.write("The Total  is " + (num1 / num2) + "<br>");
//modulus
document.write("The Total  is " + (num1 % num2) + "<br>");

//point 3
var math_expression;
document.write(math_expression + "<br>");
math_expression = 5;
document.write("Initial Value is: " + math_expression + "<br>");
document.write("After the increment the value becomes " + (++math_expression) + "<br>");
math_expression += 7  // math_expression =  math_expression + 7;
document.write("Value after addition is: " + (math_expression) + "<br>");
document.write("After the decrement the value becomes: " + (--math_expression) + "<br>");
document.write("The reminder value becomes: " + (math_expression % 3) + "<br>");

//point 4
var cost = 600;
var buy = 5;
var total_cost = cost * buy;
document.write("The total cost to buy 5 tickets is: " + total_cost + "<br>");

//point 5
var table = 2;
document.write("<h2>Multiplication Table of " + table + "</h2>");
document.write(table + "* 1 =" + table * 1 + "<br>")

document.write(table + "* 2 =" + table * 2 + "<br>")

document.write(table + "* 3 =" + table * 3 + "<br>")

document.write(table + "* 4 =" + table * 4 + "<br>")

document.write(table + "* 5 =" + table * 5 + "<br>")

document.write(table + "* 6 =" + table * 6 + "<br>")

document.write(table + "* 7 =" + table * 7 + "<br>")

document.write(table + "* 8 =" + table * 8 + "<br>")

document.write(table + "* 9 =" + table * 9 + "<br>")

document.write(table + "* 10 =" + table * 10 + "<br>")


//point 6
var celcius = 373;
document.write("<h2>conversion celcius to ferhenheit</h2>");
var f = (celcius * 9 / 5) + 32;
document.write("conversion celcius to ferhenheit " + f + "°F" + "<br>")
//conversion ferhenheit to celcius
var storage = 703.4;
var c = (storage - 32) * 5 / 9
document.write("conversion ferhenheit to celcius " + c + "°C" + "<br>")

//point 7
var item1 = "laptop";
var item2 = "shirts";

var price1 = 15000;;
var price2 = 2000;

var quantity1 = 1;
var quantity2 = 4;
var charges = 850;
var total = (price1 * quantity1) + (price2 * quantity2) + charges;
document.write("<h2>Shopping Cart</h2>");
document.write("Price of " + item1 + " is: " + price1 + "<br>");
document.write("quantity of " + item1 + " is: " + quantity1 + "<br>");
document.write("Price of " + item2 + " is: " + price2 + "<br>");
document.write("quantity of " + item2 + " is: " + quantity2 + "<br>");
document.write("Shipping charges is: " + charges + "<br>")

document.write("Total Cost of Your Order is: " + total + "<br>");

//point 8
var totalmarks = 1100;
var obtained_student = 875;
var percentage = (obtained_student / totalmarks) * 100;
document.write("<h2>Result</h2>");
document.write("Total Marks " + totalmarks + "<br>")
document.write("Obtained Students " + obtained_student + "<br>")
document.write("Percentage " + percentage );


//point 9
document.write("<h2>Conversion</h2>")
var dollar = 10;
var riyal = 25;
var PKR = (dollar * 104.80) + (riyal * 28);
document.write("Total in Pakistani Rupees: " + PKR );

//point 10
document.write("<h2>single expression</h2>")
var number = 5;
var expression = ((number+5)*10)/2;
document.write(expression);

//point 11
document.write("<h2>The Age Calculator:</h2>")
var currentyear= 2024;
var birth_year= 2007;
var age1 = currentyear - birth_year;
document.write(" currentyear: " + currentyear+"<br>");
document.write("birth_year: "+birth_year+"<br>");
document.write("My age is : "+age1);


//point 12
document.write("<h2>The Geometrizer::</h2>")
var radius = 5;
var Circumference_of_a_circle = 2*3.142*radius //π = 3.142
document.write("Radius of a circle "+ radius+"<br>");
document.write("The Circumference of sircle is "+Circumference_of_a_circle+"<br>");
var Area_of_a_circle = 3.142**radius; //π = 3.142 //** use for square
document.write("Area of a circle "+Area_of_a_circle+"<br>");

//point 13
document.write("<h2>The Lifetime Supply Calculator::</h2>")
var fav_snack = "Springles";
var curr_age = 17;
var max_age = 70;
var quantity_snack = 1;
var yearsLeft = max_age - curr_age;
var totalSnacks = yearsLeft * (365 * quantity_snack);
document.write("You will need "+ totalSnacks +" to last you until the ripe old age of "+max_age )












