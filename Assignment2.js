
let Score = prompt("Enter the percentage");

if (Score >=90 && Score <=100){
    Score ="A";

}else if(Score >=80 && Score <=90){
    Score = "B";
}else if(Score >=70 && Score<=80){
    Score = "C";
}else if(Score >=60 && Score <=70){
    Score = "D";
}else
  Score = "F";

console.log("Score is = ",Score);
 