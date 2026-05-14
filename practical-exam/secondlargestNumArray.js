
// 2) Find the second largest number in an array

const arr = [2,3,5,5,7,6];


let firstlargest = -Infinity;
let secondlargest = -Infinity;


for(let value of arr){
    
    if(value > firstlargest){
        secondlargest = firstlargest;
        firstlargest = value;
    }else if(value > secondlargest && value!==firstlargest){
        secondlargest = value;
    }
}

console.log(` second largest value = ${secondlargest}`);