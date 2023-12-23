function login() {
    var login = document.querySelector("#login-button");
    login.innerText = "Logout";
}

function removePopup () {
    const popup = document.getElementById("popup");
    popup.remove();
}

function locationChange(element) {
    var location = element.value;
    alert("Location changed to " + location + ".");
}

var count1 = 12;
var count2 = 24;
var count3 = 33;

function likeNum1 () {
    var num1vote = document.querySelector("#num1");
    count1++;
    num1vote.innerText = count1 + " votes"
}

function likeNum2 () {
    var num2vote = document.querySelector("#num2");
    count2++;
    num2vote.innerText = count2 + " votes"   
}

function likeNum3 () {
    var num3vote = document.querySelector("#num3");
    count3++;
    num3vote.innerText = count3 + " votes"   
}

function playVideo(element) {
    element.play();
}

function pauseVideo(element) {
    element.pause();
}

function timeoutMessage() {
    alert("Your session is about to time out!");
}

setTimeout(timeoutMessage,10000); //10 second time out