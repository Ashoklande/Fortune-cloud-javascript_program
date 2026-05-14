// Write a program to flatten a nested array (without using flat()).



let arr = [1,3,[3,4,[5,6]]]

function flatarray(arr){

    let result = [];
    
    for(let value of arr){
        if(Array.isArray(value)){
           result = result.concat( flatarray(value));
        }else{
            result.push(value);
        }
    }
    return result;
}


let result = flatarray(arr);

console.log(result);
