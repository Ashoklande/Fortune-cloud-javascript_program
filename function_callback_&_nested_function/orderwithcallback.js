

function placeorder(code,paymentcallback,Donecallback){
    console.log("Do the payment.");
    setTimeout(()=> paymentcallback(code,Donecallback),5000)
}

function payment(status,callback){
    console.log("payment done.");
    setTimeout(()=>{
        callback(status);
    },5000);
    
}

function Done(status){
    if(status == 200){
        console.log("Order place successfully.");
    }else{
        console.log("payment failed");
    }
}

placeorder(200,payment,Done);