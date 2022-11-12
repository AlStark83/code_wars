//Extract the domain name from a URL
// Desccrption: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url){
    //your code here
   let change = ""
    if (url.includes("www."))change = "www.";
    if (url.includes("https://")) change = "https://";
    if (url.includes("http://")) change = "http://";
    if (url.includes("http://www.")) change = "http://www.";
    if (url.includes("https://www.")) change = "https://www.";
  
    switch(change){
    case "www.": newUrl = url.replace((change), ""); break;
    case "https://": newUrl = url.replace((change), ""); break; 
    case "http://": newUrl = url.replace((change), ""); break; 
    case "http://www.": newUrl = url.replace((change), ""); break; 
    case "https://www.": newUrl = url.replace((change), ""); break; 
    default: newUrl = url;
    }
    newUrl = newUrl.split(".");
    return newUrl[0]
  }

  //https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript?filter=me&sort=best_practice&invalids=false

  function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
  }