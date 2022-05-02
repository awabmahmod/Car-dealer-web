
alert("in this page you're allowed to customize the car you want before buying it");
function changeStyle1(){
    var element = document.getElementById("img1");
    element.style.borderColor = "red";
    var element = document.getElementById("img2");
    element.style.borderColor = "black";
    var element = document.getElementById("img3");
    element.style.borderColor = "black";    let selectedcolor = red;
    ;
 }
 function changeStyle2(){
    var element = document.getElementById("img2");
    element.style.borderColor = "red";
    var element = document.getElementById("img1");
    element.style.borderColor = "black";
    var element = document.getElementById("img3");
    element.style.borderColor = "black";    let selectedcolor = darkgrey;
    ;
 }
 function changeStyle3(){
    var element = document.getElementById("img3");
    element.style.borderColor = "red";
    var element = document.getElementById("img1");
    element.style.borderColor = "black";
    var element = document.getElementById("img2");
    element.style.borderColor = "black";    let selectedcolor = white;
    ;
 }



 function changeStylei1(){
    var element = document.getElementById("i1");
    element.style.borderColor = "red";
    var element = document.getElementById("i2");
    element.style.borderColor = "black";
    var element = document.getElementById("i3");
    element.style.borderColor = "black";   
    let selectedintiriorcolor = brown;
 }
 function changeStylei2(){
    var element = document.getElementById("i2");
    element.style.borderColor = "red";
    var element = document.getElementById("i1");
    element.style.borderColor = "black";
    var element = document.getElementById("i3");
    element.style.borderColor = "black";    let selectedintiriorcolor = black;
    ;
 }
 function changeStylei3(){
    var element = document.getElementById("i3");
    element.style.borderColor = "red";

    var element = document.getElementById("i1");
    element.style.borderColor = "black";
    var element = document.getElementById("i2");
    element.style.borderColor = "black";    let selectedintiriorcolor = red;
    ;
    
 }
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-theme");
}
 
function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
}
getSelectValue();
document.write(selectedcolor);
document.write(selectedintiriorcolor);
