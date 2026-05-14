
// Write a program to find the frequency of each character in a string.


const str = "Ashokaa";

let freq = {};

for(let char of str){

    if(freq[char]){
        freq[char]++;
    }else{
        freq[char] = 1;
    }
}
let result = []
for(let key in freq){
    result.push(`${key} : ${freq[key]}`);
}

console.log(result);
