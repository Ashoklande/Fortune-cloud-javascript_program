const arr = [2,3,4,2,4,6];

let freq = {}

for(let value of arr){
    if(freq[value]){
        freq[value]++
    }else{
        freq[value] = 1;
    }
}
let result = []
for(let key in freq){
    if(freq[key] > 1){
        result.push(key);
    }

}

console.log(result);
