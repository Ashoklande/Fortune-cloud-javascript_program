// Find Common Elements Between Two Arrays

let arr1 =[1,2,3,4,5];
let arr2 =[3,5,8,8,9,4];


arr1.forEach((ele)=>{
    arr2.forEach((ele2)=>{
        if(ele === ele2){
            console.log(ele);          
        }
    })
})