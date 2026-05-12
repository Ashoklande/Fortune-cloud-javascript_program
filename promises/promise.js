const mypromise = new Promise((resolve,reject)=>{
    let mystak = true;

    if(mystak){
       setTimeout(()=>{
        resolve("Task solved");
       },4000) ;
    }else{
        reject("Task Fail");
    }
});


mypromise.then(result =>console.log(result)).catch(error => console.log(error));
