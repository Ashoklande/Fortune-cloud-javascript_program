

function myfunction(name,callback){
    console.log(name);
    callback();

}

function end(){
    console.log("This is end function.");
}

myfunction("Ashoka",end);


