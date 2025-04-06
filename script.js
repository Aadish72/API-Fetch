const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,sexist,explicit&type=single";


const func=async ()=>{
    const response=await fetch(url);
    const data =await response.json();
    let a=document.getElementById("joke");
    a.innerHTML="";
    a.innerHTML+=data.joke
}

