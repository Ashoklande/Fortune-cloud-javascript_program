
// 4) Find Missing Number (1 to n)

let arr = [1,2,3,5,6,7,8,9];

let sum = 0;
for(let i =0;i<arr.length - 1 ;i++){
    let next = arr[i] + 1;

    if(arr[i+1]!== next ){
        console.log(next);
        break;
    }

}


