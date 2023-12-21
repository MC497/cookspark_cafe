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
