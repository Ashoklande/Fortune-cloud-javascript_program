
// Write a program to implement a Promise that resolves after 3 seconds.

const promise = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve("Promise resolve..");
    },3000)
})

promise.then((result=>console.log(result)
)).catch(error =>console.log(error)
)
