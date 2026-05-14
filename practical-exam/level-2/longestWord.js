
// 4) Find the longest word in a sentence

let sentence  = "I am Learning Mern-Stack";

let longestword = '';
let currentStr = '';

for(let char of sentence){
    if(char !== " "){
        currentStr += char;
    }else{

        if( currentStr.length > longestword.length){
            longestword = currentStr;
            currentStr ="";
        }
    }


}

if( currentStr.length > longestword.length){
            longestword = currentStr;
            currentStr ="";
          }

console.log(longestword);
