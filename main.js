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

    // 13-masala 

//     function backAround(str){
    
//     let lastChar = str.charAt(str.length - 1);
    
//     return lastChar + str + lastChar;
// }
// }

    //14-masala

    // function isMultipleOf3Or5(num) {
    //   return num % 3 === 0 || num % 5 === 0;
    // }

    //15-masala 

    // function n(str) {
    //   let n = str.slice(0, 2);

    //   return n + str + front;
    // }

    //16-masala

    // function startsWithHi(str) {
      
    //   return str.startsWith("hi");
    // }

    //17-masala 

//   function checkTemperatures(temp1, temp2) {
//     return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
//   }