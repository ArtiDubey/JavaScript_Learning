/*For the given array with the price of 5 items [250,645,300,900,50] all item have an offer of 10% oFF on them
change the array to store final price after applying offer */


// let Price = [250,645,300,900,50];
// let Total =0 ;
// let Discount = 0;
// let DisPrice ;

// for(let val of Price) {
   
//     Total = val *10 ;
//     Discount = Total/100;
//     DisPrice = val - Discount ;
//    // console.log(Discount);
//     console.log(DisPrice);

// } 
// or 
let Price = [250,645,300,900,50];
let i = 0;
for(let val of Price){
 let Discount = val/10;
 Price[i] = Price[i]-Discount ; 
 console.log(`the item discount are ${Price[i]}`);
 i++;

 

}