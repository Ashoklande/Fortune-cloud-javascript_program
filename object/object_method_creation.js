

const car = {
    name : "Maruti",
    type : "4-wheeler",
    model : "base",
    color : "white",
    changeName : (name) => {  //custom method of car to changeName;
        car.name = name;
        console.log("Name change sucessfully..");
        
    }, 
    

}

car.changeName("XUV-400");
console.log(car);
