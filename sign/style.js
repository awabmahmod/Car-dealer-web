function validate() {
    let username = document.getElementById("name").value;
    let Password = document.getElementById("password").value;
    if (username == 'alaa' && Password == '123456789') {
        window.open("../profile.html");
    }
    else if (username == localStorage.getItem("name1") && Password == localStorage.getItem("pass1")) {
        window.open("../profile2.html");

    }
    else {
        alert(" log in failed");
    }

}
