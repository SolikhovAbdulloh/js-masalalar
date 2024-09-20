//1-masala

// function sleepIn(weekday, vacation) {
//   return !weekday || vacation;
// }

// 2-masala

// function monkeyTrouble(aSmile, bSmile) {
//   return (aSmile && bSmile) || (!aSmile && !bSmile);
// }

// 3-masala

// function sumDouble(a, b) {
//   if (a == b) {
//     return 2 * (a + b);
//   } else return a + b;
// }

// 4-masala

// function diff21(n) {
//   if (n > 21) {
//     return (n - 21) * 2;
//   } else return 21 - n;
// }

// 5-masala

// function parrotTrouble(talking, hour) {
//   if (talking && (hour < 7 || hour > 20)) {
//     return true;
//   } else {
//     return false;
//   }
// }

//6-masala

// function makes10(a, b) {
//   if (a + b == 10 || a == 10 || b == 10) {
//     return true;
//   } else return false;
// }

// 7-masala

// function nearHundred(n){
//   if((n >= 90 && n <= 110) || (n >= 190 && n <= 210)){
    
//     return true 
    
//   }else{
//       return false

//   } 

// 8-masala

// function posNeg(a, b, negative) {
//   if (negative) {
//     return a < 0 && b < 0;
//   } else {
//     return (a < 0 && b > 0) || (a > 0 && b < 0);
//   }
// }

// 9-masala

//   function notString(str) {
//   if (str.startsWith("not")) {
//     return str;
//   } else {
//     return "not " + str;
//   }
// }

// 10-masala

// function missingChar(str, n){
      
//   return str.slice(0,n)+str.slice(n+1)
//     }
  

// 11-masala

    // function frontBack(str) {
    //   let arr = str.split("");

    //   let a = arr[0];

    //   arr[0] = arr[arr.length - 1];

    //   arr[arr.length - 1] = a;

    //   return arr.join("");
    // }

    // 12-masala

    // function frontThree(str) {
      
    //   let front = str.length < 3 ? str : str.substring(0, 3);

      
    //   return front + front + front;
    // }