let darkMode = localStorage.getItem("darkMode");
let icon = document.getElementById("dark");//icon id
    icon.onclick = function () {
      document.body.classList.toggle("dark-theme");//darktheme class
      if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("darkMode", "enabled");
      }
      else{
        localStorage.setItem("darkMode", null);
      }
    }
    if (darkMode!=='null'){
      document.body.classList.add("dark-theme");
    }