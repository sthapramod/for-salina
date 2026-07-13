function login() {
    let pass = document.getElementById("password").value;

    if(pass === "salina donkey"){
        window.location.href = "home.html";
    }else{
        document.getElementById("error").innerHTML =
        "❌ Wrong Password";
    }
}