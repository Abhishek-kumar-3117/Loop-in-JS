// for (let i=1; i<=10; i++) {
// console.log(i);
// } 

// for(let i=10; i>=1; i--) {
//     console.log(i);
// }

// pratices questions
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=10; i>=2; i=i-2) {
//     console.log(i);
// }

// // pratices questions
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }

// let n = prompt("Write your table");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// Neisted loop

// for(let i=1; i<=2; i++) {
//     for (let j=1; j<=3; j++) {
//         console.log(j);

//     }
// }

// // While loop

// let n = 1;
// while(n<=5){
//     console.log(n);
//     n++;
// }

// let n1 = 10;
// while(n1>=1){
//     console.log(n1);
//     n1--;
// }


// let favorate = "Mirzapur";
// let guess = prompt("Choose your favourate movie")
// while((guess!= favorate) && (guess!= "Quit")) {
//     console.log("wrong");
//     guess = prompt("try again")
// }

// if (guess == favorate){
//     console.log("Right Answer");
// } else{
//     console.log("Quit"); 
// }

// loop with Arrays

// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i])
// }

// let student = [["aman", 90],["abhishek", 95], ["ayush", 80]];
// for(let i=0; i<student.length; i++) {
//     for(let j=0; j<student[i].length; j++) {
//     console.log(student[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "orange", "litchi"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "Abhishekkk") {
//     console.log(char);
// }

// PQ 1
// let arr  = [1 , 2 , 3 , 4 , 5 , 6 , 2 , 3];
// let num = 2;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]== num) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

// // QS 2
// let number = 287152;
// let count = 0;

// let copy = number;
// while(copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }
//console.log(count);
// QS 3

let number1 = 287152;
let sum = 0;
while(number1>0) {
    let digit = number1 % 10;
    sum = sum + digit;
    number1 = Math.floor(number1 / 10)
}
console.log(sum);

// QS 4

let n = 5;
let fact = 1;
for (let i=1; i<=n; i++){
    fact = fact*i;
}
console.log(fact);

// QS 5

let arr = [40, 50, 80, 10, 60];
let largest = arr[0];

for (let i=1; i<arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);
