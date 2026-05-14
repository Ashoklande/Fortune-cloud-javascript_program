

let str = "Ashoka";
let count = 0;
for(let char of str){
    if(char === "A" || 
       char === "a" ||
       char === "E" ||
       char === "e" ||
       char === "I" ||
       char === "i" ||
       char === "O" ||
       char === "o" ||
       char === "U" ||
       char === "u" ){
        count++
    }
}

console.log(`total No vowels are = ${count}`);
