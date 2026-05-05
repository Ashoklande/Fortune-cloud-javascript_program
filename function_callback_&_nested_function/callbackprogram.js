

// function myfunction(name,callback){
//     console.log(name);
//     callback();

// }

// function end(){
//     console.log("This is end function.");
// }

// myfunction("Ashoka",end);


function placeorder(Docallback,Donecallback){
    console.log("order placeorderd.");
    Docallback(Donecallback);
}

function doPayment(callback){
    console.log(" Do payment.");
    callback()
    
}

function paymentDone(){
    console.log("payment Done");
    
}



placeorder(doPayment,paymentDone);