alert("Hello! I am an alert box!!");

// let darkMode = localStorage.getItem("darkMode");
// let icon = document.getElementById("dark");//icon id
//     icon.onclick = function afun() {
//       document.body.classList.toggle("dark-theme");//darktheme class
//       if(document.body.classList.contains("dark-theme")){
//         localStorage.setItem("darkMode", "enabled");
//       }
//       else{
//         localStorage.setItem("darkMode", null);
//       }
//     }
//     if (darkMode!=='null'){
//       document.body.classList.add("dark-theme");
//     }
    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-theme");
   }
