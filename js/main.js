//pop.html
let balloon = document.querySelectorAll(".balloon");
let container = document.querySelector("#container");
let play = document.querySelector('#audio');
let intro = document.querySelector('#intro');
let clap = document.querySelector('#clap');
let heading = document.querySelector('#heading');
let btn = document.querySelector('#btn');
// let pop =document.querySelectorAll(".pop");
let popped = 0;

window.onload = () => {
    intro.play();
}
// document.addEventListener('DOMContentLoaded', function(){
//     intro.play();
// })
   


balloon.forEach( function(e){
    e.addEventListener('click', function func (){
        e.style.display ="none";
        // e.style.backgroundColor ="transparent";
        // e.style.color = "#ffffff";
        play.play();
        e.removeEventListener('click', func);
        popped++;
        if(popped == balloon.length){
            heading.innerHTML ="That was awesome " + window.localStorage.getItem( "name") + " ! You popped all the balloons!";
            container.style.background = "url('https://i.gifer.com/AaMb.gif')";
            container.style.backgroundSize = "cover" ;
            container.style.backgroundPosition = "center" ;
            container.style.border = " 4px solid black";
            // heading.style.display ="none";
            clap.play();
        }
    });
            
} );

btn.addEventListener('click', function(){
    // window.location.href ="/index.html";
    window.location.reload()
});

// if(window.location.pathname == '/index.html'){
//     intro.play();
// }

