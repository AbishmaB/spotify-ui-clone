function openSignup() { 
    closeLogin();
    document.getElementById("signup").style.display = "flex";
}

function closeSignup() {
    document.getElementById("signup").style.display = "none";
}

function openLogin() {
    closeSignup();
    document.getElementById("login").style.display = "flex";
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
}

