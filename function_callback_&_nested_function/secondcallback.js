


let arr = [1,2,3,4,5,6];



function main1(callback){
    console.log("main function");
    arr.forEach(callback);
}


function printnum(number){
    console.log(number);
}

main1(printnum)