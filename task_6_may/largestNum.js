// Find the Largest Number in an Array

let arr = [2,20,4,6,,60];


let largestNum = -Infinity;

arr.forEach((ele)=>{
    if(ele > largestNum){
        largestNum = ele;
    }
})

console.log(largestNum);
