const imageEl = document.getElementById('slide');
const time= 4000;
let image = ['./6.jpeg', './61.jpeg', './6.jpeg','./61.jpeg'];
let i = 0;

function changeImg(){
  imageEl.src = image[i];
  
  if (i<image.length-1){
   i++;
  } else{
    i=0;
  }

}

document.addEventListener('DOMContentLoaded', () => {
setInterval(() => changeImg(), time);
})