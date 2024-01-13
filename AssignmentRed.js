/*We are given array of marks of students.Filter out of the marks of students that scored 90 + */

// let marks = [65,78,90,95,89,93];
// const Topers = marks.filter ((val) =>{

// return val > 90 ; 




// })
// console.log(Topers);

/*Take a number n as input from user .create and array of number from 1 to n
use the reduce method to calculate the sum of all numbers in the array
use the reduce method to calculate product of all numbers in array*/

// let n = prompt("enter a number");
// const arr = [];
// for (let i = 1 ; i<=n ; i++){
//  arr [i-1] = i ;

// }

// console.log (arr);

let n = prompt("enter a number");
const arr = [];
for (let i = 1 ; i<=n ; i++){
 arr [i-1] = i ;
 
 
}
console.log (arr);
 const sum = arr.reduce((pre,curr) =>{
    return pre + curr ;
 
})
console.log(sum);

