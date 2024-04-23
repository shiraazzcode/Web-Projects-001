// Hello world program in js
//method 1
// console.log("hello world");

// //method 2
// document.write("hello world");

// //method 3
// alert("hello world");

// //method 4
// confirm("hello world");


//Math in Js
// let a = Number(prompt("Enter number"));
// let b = Number(prompt("Enter number again"));
// console.log(a+b);
// //or
// c = a + b;
// console.log(c);
// //or
// console.log(`the sum of ${a} and ${b} is ${c}`);



//find square root of number
// let n = prompt("Enter any number");
// let num = Number(n)
// let sqr = Math.floor(Math.sqrt(num));

// console.log(`the square root of ${num} is ${sqr}`);


//find square of a number
// let n2 = Number(prompt("ENTER NUMBER"));
// let sq = n2 * n2;
// console.log(`the square of ${n2} is ${sq}`);


//find area of triangle 



//swapping of two number
//2 methods 
//1) using temporary variables
// let a = prompt("Emter number 1");

// let b = prompt("Emter number 2");
// console.log(`Before swapping; a  = ${a}, b = ${b}.`);
// let tempvar;
// tempvar = a; // 2
// a = b; //4
// b = tempvar; //2
// console.log(`Ater swapping; a = ${a}, b = ${b}.`);



//2) without using temporary variables
// let a = 5;
// let b = 6;
// console.log(`Before swapping; a  = ${a}, b = ${b}.`);
// a = a + b; // a=11
// b = a - b; //b = 5

// a = a - b; //a = 6
// console.log(`Ater swapping; a = ${a}, b = ${b}.`);



//convert km to miles using function
// 1 km = 0.621371 miles
// miles = km * factor, //factor = 0.621371 miles
// function unitconvert(){
//     let km  = parseInt(prompt("Enter kilometer value"));
//     const factor = 0.621371;
//     let miles  = km * factor;
//     console.log(`${km} kilometer is equal to ${miles} miles`);
// }
// unitconvert();


//Temperature convertor
//Celsius to Fahrenheit
//f = c * 1.8 +32 or f = (c * 9/5) + 32

// function coverttemp(){
//     let c = prompt("Enter value in celsius");
//     let f = c * 1.8 +32;
//     console.log(`${c} deg is equal to ${f} fahrenheit.`);
// }

// coverttemp();


//Js program to check is a number is positive, 
//negative or zero
//using math.sign() method

// function checknum(n){
//     let check = Math.sign(n);
//     if(check == 0 || check == 1){
//         console.log(`${n} is a positive number`);
//     }else if(check == -1 || check == -0){
//         console.log(`${n} is a negative number`);
//     }else{
//         console.log('Not a number');
//     }
        
// }

// let num = parseInt(prompt("Enter number"));

// checknum(num);


//JS program to generate a random number using math.
//random() method

// let rn = Math.floor(Math.random() * 10);
// console.log(rn);


//Find largest number from 3 numbers using math.max 
//method() and user defined method
//using math.max method
// let n1 = 5;
// let n2 = 7;
// let n3 = 12;
// let mxn = Math.max(n1, n2, n3);
// console.log(mxn);

//using user defined method
// function checkmax(n1, n2, n3){
//     if(n1 >= n2 && n1 >= n3){
//         console.log('n1 is greater');
//     }else if(n2 >= n1 && n2 >= n3){
//         console.log('n2 is greater');
//     }else if(n3 >= n1 && n3 >= n2){
//         console.log('n3 is greater');
//     }else{
//         console.log("enter valid value");
//     }
// }
// checkmax(2, 4, 6);


//JS program to find a factorial of a number
//factorial: is the product of all the numbers from 
//1 to that number. eg factorial of  4 is 1*2*3*4 = 
//24

//what is recursion:
//the process in which a function calls itself directly or indirectly is called recursion and the function is called recursive function.
//eg
//function recur(){
 //   if(condition){
 //   return 
 //}
 //recur();
//}






