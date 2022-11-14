//DESCRIPTION:
// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// Courtesy of projecteuler.net (Problem 1)

function solution(number){
    let list = [];
    const arr = [];
    for (i = 0; i < number; i++){
        list.push(i)
    }
    for (i = 0; i < list.length; i++){
    if (list[i] % 5 == 0 && list[i] % 3 == 0){
        arr.push(list[i])
    } else if (list[i] % 5 == 0 || list[i] % 3 == 0){
        arr.push(list[i])
    } else if(list[i] < 0){
        return 1
    }
    }
    let total = arr.reduce((a, b) => a + b, 0);
    return (total)
}

//  https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript?filter=me&sort=best_practice&invalids=false

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }