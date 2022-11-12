// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisor(integer){
    let numbers = [];
    for (let i = 2; i < integer; i++){
       if(integer % i === 0)(numbers.push(i));
    }
    if (numbers.length === 0){
      return `${integer} is prime`
    } else  return numbers
  }
  console.log(divisor(16));
  
  console.log (15 % 3=== 0);
  https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript#:~:text=function%20divisors(%20int%20)%20%7B%0A%20%20const%20arr%20%3D%20Array.from(%7Blength%3A%20int%2D1%7D%2C%20(_%2C%20i)%3D%3E%20i%2B1).slice(1).filter(el%20%3D%3E%20int%20%25%20el%20%3D%3D%3D%200)%0A%20%20return%20arr.length%20%3F%20arr%20%3A%20%60%24%7Bint%7D%20is%20prime%60%3B%0A%7D%3B
  function divisors( int ) {
    const arr = Array.from({length: int-1}, (_, i)=> i+1).slice(1).filter(el => int % el === 0)
    return arr.length ? arr : `${int} is prime`;
  };