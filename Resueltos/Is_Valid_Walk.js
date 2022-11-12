// /You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  if (walk.length === 10){
  for(el of walk){
    if (el === 'n'){
         ns = ns + 1;
      } else if (el === 's'){
           ns = ns -1;
        } else if (el === 'e'){
             ew = ew + 1;
          } else if ( el === 'w'){
               ew = ew - 1;
            }
    } 
  if (ns === 0 && ew === 0 ){
      return true;
  }   else return false;
  }  else return false;
}
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
  console.log(isValidWalk(['w']));
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
  https://www.codewars.com/kata/54da539698b8a2ad76000228/solutions/javascript#:~:text=function%20isValidWalk(walk,dy%20%3D%3D%3D%200%0A%7D

  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }