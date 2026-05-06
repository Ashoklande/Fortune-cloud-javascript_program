// Reverse an Array

let arr = [5,6,7,89,];

let i = 0;
let j = arr.length-1;

while(i < j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}

console.log(arr);
