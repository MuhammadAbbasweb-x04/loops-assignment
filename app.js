// Q1
// Answer

// let fruits = ["apple", "banana", "cherry"]

// for (let i = 0; i < fruits.length; i++){
// console.log(fruits[i]);

// }


// Q2
// Answer

// let colors = ["red","blue","green"];
// let para = document.querySelector("#output");

// for(let i = 0; i < colors.length; i++){
// para.innerHTML = "red  blue  green"

// }



// Q3
// Answer
// for(let i = 1; i < 11; i++){

// console.log(i);

// }

// Q4
// Answer
// let i = 1;
// while(i<6){
// console.log(i);
// i++
// }

// Q5
// Answer
// let user = ["Ali", "Sara", "Ahmed"];
//  let box =document.querySelector("#names");
// for(let i = 0; i < user.length; i++ ){
// console.log([i]);
// box.innerHTML = user.join(",") ;
// box.innerHTML = "abuzar abbas ahemd"


// }


// Q6
// Answer
// let para= document.querySelector("#status");
// para.innerHTML = "Loading...";



// Q7
// Answer
// let result = document.querySelector("#sum");
// let num = [5,10,15];
// let sum = 0; 
// for(let i = 0; i<num.length;i++){
//     sum +=num[i];
//     result.innerHTML = "<p>" + sum + "</p>"
// }



// Q8
// Answer
// let box = document.querySelector("#cities");
// let cite = ["Karachi", "Lahore", "Quetta"];

// for(let i = 0; i < cite.length; i++){
// box.innerHTML += cite[i] + ' ' ;
// }


// Q9
// Answer
// for(let i = 1; i < 21; i++){
// if(i%2===0){
// console.log(i);
// }
// }



// Q10
// Answer
// let max = document.querySelector("#max");
// let numbers = [45, 22, 89, 100];

// for(let i = 0; i < numbers.length; i++ ){
//     console.log(i)
// max.innerHTML = `${numbers[i]} Max`;
// }


// Q11
// Answer
// let result = document.querySelector("#result");
// result.innerHTML = "Task Complete";





// Q12
// Answer
// let  average = document.querySelector("#averageTemp");
// let temp = [30, 35, 32, 40];
// let sum = 0; 
// for(let i = 0; i < temp.length; i++){
//   sum +=temp[i];
// }
// let avg = sum / temp.length;
// average.innerHTML = "average temperature: " + avg;

// Q13
// Answer
// let total = document.querySelector("#totalSum");
// let sum = 0;
// for(let i = 1; i < 101; i++){
// total.innerHTML = sum = sum + i;

// }

// Q14
// Answer

// let animals = document.querySelector("#animals");
// let array = ["dog", "cat", "bird"]
// for(let i = 0; i < array.length; i++){
// animals.innerHTML += array[i] + "  ";

// }


// Q15
// Answer
// let head = document.querySelector("#title");
// head.innerHTML = "Welcome to Javascript";


// Q16
// Answer
// for(let i = 1; i < 51; i++ ){
// if(i%5===0){
// console.log(i);
// }

// }


// Q17
// Answer
// let disply = document.querySelector("#highScores");
// let scores = [80, 60, 90, 70];
// let count = 0;
// for(let i = 0; i < scores.length; i++){
// if(count > 75){ 
//      count++ 
// }
// }

// disply.innerHTML =scores[i];


//  Q18
// Answer
// let head = document.querySelector("#message");
// head.innerHTML = "Updated successfully";


//  Q19
// Answer
// let para = document.querySelector("#subjectsList");

// let sub = ["Math", "Science", "English"];
// for(let i =0 ; i < sub.length; i++){
// para.innerHTML = sub.join(" ") ;


// }


//  Q21
// Answer
// let numbers = [45, 67, 12, 89, 34];
// let largnumber =[0]; 
// for(let i = 0;  i < numbers.length; i++){
// if(numbers[i] >= 89){
// largnumber = numbers[i];
// }
// }
// console.log(largnumber);


//  Q22
// Answer
// let even =[3, 8, 6, 1, 9, 2];
// for(let i = 0; i < even.length; i++){
// if(i%2!==0){
// console.log(even[i])
// }
// }

//  Q23
// Answer

// let numbers = [20, 30, 40, 50];
// let total = 0;


// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];

// }

// let average = total / numbers.length;

// console.log("Average:", average);


//  Q24
// Answer
// let numbers = [2, 4, 6, 8, 10];
// let totel = 0;
// for(let i = 0; i < numbers.length; i++){
// totel = numbers[i] * 3;
// console.log(totel);

// }

//  Q25
// Answer
// let numbers = [1, 3, 5, 7, 9];
// for(let i = 0; i < numbers.length; i++){
// if(numbers[i] >= 4){
// console.log(numbers[i])
// }
// }



//  Q26
// Answer
// let numbers = [10, 15, 20, 25, 30];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
// if(numbers[i]%5===0){
// sum += numbers[i];
// console.log(sum)
// }
// }



//  Q27
// Answer
// let numbers = [10, 20, 30, 40, 25];
// for(let i = 0; i < numbers.length; i++){

// if(numbers[i] === 25){
// console.log(numbers.includes(25));

// }

// }

//  Q28
// Answer

// let arrone = [1,2,3];
// let arrtwo = [4,5,6];
// let  sumarr = 0;


// for(let i = 0; i < arrone.length; i++){
// sumarr = arrone.push(arrone + arrtwo);
// console.log(sumarr)
// }




//  Q29
// Answer
// let numbers = [10, 99, 23, 87, 56];
// for(let i =0; i < numbers.length; i++){
// if(numbers[i] >= 75){

//     console.log(numbers[i])
// }


// }





//  Q30
// Answer
// let num = [1, 2, 3, 4, 5];
// let reversed = [];
// for(let i = num.lengthl -1; i >= 0; i--){
// reversed.push(num[i])
// console.log(num.reversed());
// }



//  Q31
// Answer
// for (let n = 2; n <= 50; n++) {
//   let prime = true;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }

//   if (prime) {
//     console.log(n);
//   }
// }


//  Q32
// Answer
// let numbers = [11, 4, 99, 2, 47];
// let largenum = numbers[0];
// let smallnum = numbers[0];
// for(let i =0; i < numbers.length; i++){
// if(numbers[i] > largenum){
// largenum = numbers[i]

// }
// if(numbers[i] < smallnum){
// smallnum = numbers[i]
// }

// }

// let difrance = largenum - smallnum;
// console.log(difrance)


//  Q33
// Answer
// let negativenumbers = [0, -1, -5, 6, 8, -3];
// count = 0;
// for(let i = 0; i < negativenumbers.length; i++){
// if(negativenumbers[i] < 0){
// console.log(i);
// }

// }


//  Q34
// Answer
// let odd = [1, 3, 5, 7, 9, 11,];
// let newarr = [];
// for(let i = 0; i < odd.length; i++){
// if(odd[i]%2 !== 0){
// console.log(i)
// newarr.push(odd[i]);
// }
// }
// console.log(newarr);


//  Q35
// Answer
// let numbers = [0, 1, 0, 3, 0, 5];
// for(let i =0; i < numbers.length; i++ ){
// if(numbers[i] > 0){
// console.log(i);
// }

// }


//  Q36
// Answer
// let numbers = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < numbers.length; i++){
//numbers.splice(0, 1, 8);
//numbers.splice(numbers.length -1, 1,7);
//console.log(numbers[i])
// }


//  Q37
// Answer
// let numbers = [2, 4, 6, 8];
// let even = true;

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         even = false;
//         break; 
//     }
// }

// if(even){
//     console.log("all numbers are even");
// } else {
//     console.log("not all numbers are even");
// }




//  Q38
// Answer
// let numbers = [5, 10, 15, 20, 25];

// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// let average = sum / numbers.length;

// let count = 0;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] >= average){
//         count++;
//     }
// }
// console.log(average)



//  Q39
// Answer
// let num = [2, 2, 2, 2, 2];
// for(let i = 1; i < num.length; i++){
// if(num.some(num%2===0)){
// console.log(num);
// }
// }
