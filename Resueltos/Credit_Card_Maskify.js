// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
    let size = cc.length;
    let last4 = size - 4;
    let hide = "#"
    if (size <= 4){
      return cc;
    } else {
        for (let i = 0; i < cc.length -5; i++){        
          hide = hide + "#"
        }
    }
    return hide + cc.slice(last4);
  }
  
  cc = "4556364607935616";
  size = cc.length
  let ultimos4 = size-4
  console.log(size)
  console.log(cc.at(-4));
  console.log(cc.length * (-1));
  console.log(cc.slice(ultimos4))
  console.log(maskify(cc))
  console.log("#"+"#")
  https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript#:~:text=function%20maskify(cc)%20%7B%0A%20%20return%20cc.slice(0%2C%20%2D4).replace(/./g%2C%20%27%23%27)%20%2B%20cc.slice(%2D4)%3B%0A%7D
  
  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
  