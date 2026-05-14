

let sentence  = "I am Learning Mern-Stack";

let len = sentence.split(" ");



let newword ="";

for(let word of len){

  let modifiedword = word.split("").reverse().join("");
  
  newword += modifiedword + " "; 
}


console.log(newword);
