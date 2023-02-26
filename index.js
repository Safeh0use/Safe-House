var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})

function darkMode(){
    var darkbody = document.body;
    darkbody.classList.toggle("dark-mode");
}

function clickON(){
    var con1 = document.getElementsByClassName("four")
    var con2 = document.getElementsByClassName("five")
    var con3 = document.getElementsByClassName("six")
    var con4 = document.getElementsByClassName("seven")
    con1.classList.toggle("dark-mode")
    con2.classList.toggle("dark-mode")
    con3.classList.toggle("dark-mode")
    con4.classList.toggle("dark-mode")
}