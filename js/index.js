let name = document.querySelector("#name");
let button = document.querySelector("#button");
let error = document.querySelector("#error");

button.addEventListener('click', function enter(){
    if(name.value ==""){
        error.innerHTML = "Enter your name";
        error.style.color ="red";
    }
    else{
    let name = document.querySelector("#name").value;
    window.localStorage.setItem("name", name);
    window.location.href="welcome.html";
    }
   
})  