const imageEl = document.getElementById('slide');
const time = 4000;
let image = ['./alaa/3.jpeg', './alaa/32.jpeg', './alaa/33.jpeg'];
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