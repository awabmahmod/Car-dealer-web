let email1 = localStorage.getItem("email1");
let name1 = localStorage.getItem("name1");
let phone1 = localStorage.getItem("phone1");
let pass1 = localStorage.getItem("pass1");

function validate() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("first").value +" "+document.getElementById("second").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("pass").value;
    if(email=="" || name=="" || phone=="" || pass==""){
        alert(" wrong inputs ");

    }
    else{
    localStorage.setItem("email1", email);
    localStorage.setItem("name1", name);
    localStorage.setItem("phone1", phone);
    localStorage.setItem("pass1", pass);
    window.open('profile2.html');
    }
}
document.getElementById("emailv").innerHTML = localStorage.getItem("email1");
document.getElementById("namev").innerHTML = localStorage.getItem("name1");
document.getElementById("phonev").innerHTML = localStorage.getItem("phone1");

