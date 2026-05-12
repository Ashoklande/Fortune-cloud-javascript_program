const getData = async () =>{
    let data = await fetch("https://json-placeholder.mock.beeceptor.com/posts");
    return data;
}


 getData().then(data =>console.log(data));