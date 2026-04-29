


function downloadMovie(callback){
    console.log("Downloading .....");
    setTimeout(()=>{callback()},5000);
}

function downloadend(){
    console.log("Download end.");
}

downloadMovie();