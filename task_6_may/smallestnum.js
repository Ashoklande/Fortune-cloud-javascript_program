// Find the Smallest Number in an Array


let arr = [2,20,4,6,1,60];


let largestNum = Infinity;

arr.forEach((ele)=>{
    if(ele < largestNum){
        largestNum = ele;
    }
})

console.log(largestNum);
