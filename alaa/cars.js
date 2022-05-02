const imageEl = document.getElementById('slide');
const time = 4000;
let image = ['./alaa/13.jpeg', './alaa/11.jpeg', './alaa/1.jpeg', './alaa/12.jpeg'];
let i = 0;

function changeImg() {
  imageEl.src = image[i];

  if (i < image.length - 1) {
    i++;
  } else {
    i = 0;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => changeImg(), time);
})