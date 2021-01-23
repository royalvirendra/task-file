var counter = 3;
var form = document.getElementById("form");



document.getElementById('head2').style.display = "none";
document.getElementById('error').style.display = "none";


document.getElementById("form").addEventListener('submit', (e) => {
    let username = document.getElementById("uname");
    let head1 = document.getElementById("head1");
    let head2 = document.getElementById("head1");
    let password = document.getElementById("pswd");
    let error = document.getElementById("error");
    let loginbutton = document.getElementById("loginbutton");



    e.preventDefault();

    if ((username.value == "admin") && (password.value == "admin")) {
        form.style.display = "none";
        head1.style.display = "none";
        head2.style.display = "block";
        head2.innerHTML = "log in sucessfull !!!"
    } else {
        counter--;
        if (counter == 0) {
            username.disabled = true;
            password.disabled = true;
            loginbutton.disabled = true;
            error.style.display = "block";
            error.innerHTML = "* your three attempts are over";
            error.style.color = "red";
        }
    }



});