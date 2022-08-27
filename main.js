let usernameInput = document.getElementById('username-input');
let passwordInput = document.getElementById('password-input');
let buttonInput = document.getElementById('button-input');
let buttonOut = document.getElementById('button-out');
let nameReg = document.getElementById('name-reg');
let usernameReg = document.getElementById('username-reg');
let passwordReg = document.getElementById('password-reg');
let form = document.getElementById('form');
let home = document.getElementsByClassName('home');


function onReg() {
    localStorage.setItem("username", usernameReg.value);
    localStorage.setItem(usernameReg.value, passwordReg.value);
    localStorage.setItem(passwordReg.value, nameReg.value);
    alert("Terima kasih! \nAnda telah menjadi member.");
    

}

let nameKey;


function onLogin() {
    location.reload();
    let nameKey = localStorage.getItem(passwordInput.value);
   
    if (usernameInput.value == "priaadmaja" && passwordInput.value == "priaadmaja") {
        localStorage.setItem("username", "priaadmaja")
        // localStorage.setItem("priaadmaja", "admaja");
        // localStorage.setItem("admaja", "creator");
        window.location.replace("creator.html");

    } else if (usernameInput.value == "admin" && passwordInput.value == "123456") {
        localStorage.setItem("username", "admin");
        // localStorage.setItem("admin", "123456");
        // localStorage.setItem("123456", "admin");
        window.location.replace("admin.html");

    } else if (usernameInput.value == "moderator" && passwordInput.value == "moderator") {
        localStorage.setItem("username", "moderator");
        // localStorage.setItem("moderator", "mod123");
        // localStorage.setItem("mod123", "moderator");
        window.location.replace("moderator.html");

    } else if (usernameInput.value == localStorage.getItem("username") && passwordInput.value == localStorage.getItem(usernameInput.value)) {
        window.location.replace("member.html");

    } else if (usernameInput.value == "" && passwordInput.value == "") {
        window.location.replace("#");
    
    } else {
        window.location.replace("penyusup.html");
    
    }

}

document.getElementById('nameSet').innerHTML = localStorage.getItem(nameKey.value);

function onLogout() {
    localStorage.clear();
    location.reload();
    window.location.replace("index.html")
}