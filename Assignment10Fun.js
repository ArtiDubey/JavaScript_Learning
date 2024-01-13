/*Create a function using function keyword that takes a string as an agrument and returns the number of 
vowels in the string*/



// function word (){
//     let userword = "artidubey";
//     let count = 0;
//     for (let i =0 ; i< userword.length ; i++ ){
//         if (userword[i]=== "a" || userword[i]=== "e" || userword[i]=== "i"|| userword[i]=== "o"||userword[i]=== "u")
//         {
//             count++
            
//         }
//     }

//     console.log("Number of vowels are =",count);
    
// }
// word ();

//Perform same task with arrow function

const word = () => {
    let userword = "arti";
    let count = 0;
    for (let i =0 ; i< userword.length ; i++ ){
        if (userword[i]=== "a" || userword[i]=== "e" || userword[i]=== "i"|| userword[i]=== "o"||userword[i]=== "u")
        {
            count++
            
        }
    }

    console.log("Number of vowels are =",count);
    
}
word ();

