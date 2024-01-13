/*For a given array with marks of students ->[85,97,44,37,76,60]
find the average marks of the entire class*/



// let Marks = [85,97,44,37,76,60];
// let Total = 0;

// for (let i=0 ; i< Marks.length; i++)
// {
//    Total = Total + Marks[i];
   
 
//    if(i == Marks.length-1){
//     let average = Total/Marks.length
//     console.log("Total marks is =" ,Total);
//     console.log("Average is =" ,average);

//    }
  
   
// }

//or 
let Marks = [85,97,44,37,76,60];
let sum = 0;
let average ;
for(let val of Marks){
    sum = sum + val;
    average = sum/Marks.length;
}
console.log(sum);
console.log("Average is = ",average);

