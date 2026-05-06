//Remove Duplicate Elements from an Array


const arr = [1,3,4,1,3,4];

const obj = {}
const result =[];
arr.forEach((ele)=>{
        if(!obj[ele]){
            
            result.push(ele);
            
        }
        obj[ele] = ele;
})

console.log(result);
