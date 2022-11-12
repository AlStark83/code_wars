// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
function addBinary(a,b) {
    let num = a + b;
    let result = [];
    while(num > 0) {
        result.unshift(num % 2)
        num = Math.floor(num / 2)
    };
    return result.join("")
  }
  console.log(addBinary(3,6))
// -----------------------------
  return (a+b).toString(2)
//-------------------------------

