// 2) Write a program to remove duplicates from an array (without using Set).


let arr = [2,3,4,5,5,5,4];

let freq = {};
let result = [];
for(let value of arr){
    if(freq[value]){
        freq[value]++;
    }else{
        freq[value] = 1;
        result.push(value);
    }
}

console.log(result);
