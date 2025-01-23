function login() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pas').value;
    
    if (user == "Rasmi" && pass == "Rasmi123") {
        alert('Welcome Back \n Sir, Rasmi Ranjan Sahoo');
        window.location = "Nhome.html";
    } else {
        alert('Sorry, Try Again!!');
    }
}