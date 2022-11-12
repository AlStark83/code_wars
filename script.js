// // ordena un array de izquierda a derecha o de derecha a izquierda (ascendente o odescendente por elección en formula)
// const flip=(d, a)=>{
//     //TODO
//     if (d === "R"){
//       return a.sort(function(a, b) {return a - b})
//     } else if (d === "L"){
//         return a.sort(function(a, b){return b - a})
//     }
//     return 
//   }

// // Ordena un número regresando sus digitos de mayor a menor creando el número mas alto posible con esa combinacion de valores. https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript)
// function descendingOrder(n){
//     let arr = [];
//     let i;
//     while (i !== "empty string")
//         {i = n.toString().substring(i, i+1)
//         arr.push(i)
//     }
//     return arr.sort(function(a, b){return b - a})
// }
//     console.log(descendingOrder(4523))

//     let numro = 45678;
//     console.log(numro.size)
//     console.log(descendingOrder(355177))
//     console.log(numro.toString().substring(6))

// let array = [150,160,164,157,163,182,170,159,157,151,161,163,178,173,172]
// function promedio(array){
//   const acc = (acumulador , numero) => acumulador + numero;
//   let total = array.reduce(acc, 0);
//   return resultado = total / array.length
// }
// // ---------------------------------------------------
// // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// // Your task is to write a function maskify, which changes all but the last four characters into '#'.

// function maskify(cc){
//   let size = cc.length;
//   let last4 = size - 4;
//   let hide = "#"
//   if (size <= 4){
//     return cc;
//   } else {
//       for (let i = 0; i < cc.length -5; i++){        
//         hide = hide + "#"
//       }
//   }
//   return hide + cc.slice(last4);
// }

// cc = "4556364607935616";
// size = cc.length
// let ultimos4 = size-4
// console.log(size)
// console.log(cc.at(-4));
// console.log(cc.length * (-1));
// console.log(cc.slice(ultimos4))
// console.log(maskify(cc))
// console.log("#"+"#")
// https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript#:~:text=function%20maskify(cc)%20%7B%0A%20%20return%20cc.slice(0%2C%20%2D4).replace(/./g%2C%20%27%23%27)%20%2B%20cc.slice(%2D4)%3B%0A%7D

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// --------------------------------------------

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// function divisor(integer){
//   let numbers = [];
//   for (let i = 2; i < integer; i++){
//      if(integer % i === 0)(numbers.push(i));
//   }
//   if (numbers.length === 0){
//     return `${integer} is prime`
//   } else  return numbers
// }
// console.log(divisor(16));

// console.log (15 % 3=== 0);
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript#:~:text=function%20divisors(%20int%20)%20%7B%0A%20%20const%20arr%20%3D%20Array.from(%7Blength%3A%20int%2D1%7D%2C%20(_%2C%20i)%3D%3E%20i%2B1).slice(1).filter(el%20%3D%3E%20int%20%25%20el%20%3D%3D%3D%200)%0A%20%20return%20arr.length%20%3F%20arr%20%3A%20%60%24%7Bint%7D%20is%20prime%60%3B%0A%7D%3B
// function divisors( int ) {
//   const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
//   return arr.length ? arr : `${int} is prime`;
// };
//-----------------------------------------------------------------------------------------------------------------------
//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// function isValidWalk(walk) {
//   let ns = 0;
//   let ew = 0;
//   if (walk.length === 10){
//   for(el of walk){
//     if (el === 'n'){
//          ns = ns + 1;
//       } else if (el === 's'){
//            ns = ns -1;
//         } else if (el === 'e'){
//              ew = ew + 1;
//           } else if ( el === 'w'){
//                ew = ew - 1;
//             }
//     } 
//   if (ns === 0 && ew === 0 ){
//       return true;
//   }   else return false;
//   }  else return false;
// }
//   console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
//   console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
//   console.log(isValidWalk(['w']));
//   console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
//   https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript#:~:text=function%20isValidWalk(walk,dy%20%3D%3D%3D%200%0A%7D

//   function isValidWalk(walk) {
//     var dx = 0
//     var dy = 0
//     var dt = walk.length
    
//     for (var i = 0; i < walk.length; i++) {
//       switch (walk[i]) {
//         case 'n': dy--; break
//         case 's': dy++; break
//         case 'w': dx--; break
//         case 'e': dx++; break
//       }
//     }
    
//     return dt === 10 && dx === 0 && dy === 0
//   }
//-------------------------------------------------------------------------------------------------
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// function addBinary(a,b) {
//     let num = a + b;
//     let result = [];
//     while(num > 0) {
//         result.unshift(num % 2)
//         num = Math.floor(num / 2)
//     };
//     return result.join("")
//   }
//   console.log(addBinary(3,6))
//-----------------------------
//   return (a+b).toString(2)
//-------------------------------

// DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// // Examples:
// // s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
function printerError(s){
  let errors = 0;
  let colors = 0;
  let nothing = `${errors}/${colors}`;
  let  result = {errors = (s.match(/[n-z]/g).length) &&
    colors = s.length};
    let alts = ((s === null || s === undefined || s.Num) ? nothing : result);  
    return `${errors}/${colors}`;
  }
console.log(printerError()