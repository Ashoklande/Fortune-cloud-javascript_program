    function hello(name,callback){
        console.log("hello .");
        callback(name);
    }


    hello("Ashok",function(name){
        console.log(name.toUpperCase());
    });