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

var form = document.getElementById("theForm");
var name1 = document.getElementById("name");
var email = document.getElementById("email");
var msg = document.getElementById("remarks");

function sendMsg(e){
    e.preventDefault();
    Email.send({
        SecureToken : "9aa745dd-19c2-4da3-9de7-f02c735062a3",
        To : 'safe.house.egy.1@gmail.com',
        From : email.value,
        Subject : "*From Website*",
        Body : msg.value,
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", sendMsg);
