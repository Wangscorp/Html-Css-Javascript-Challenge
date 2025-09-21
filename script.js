const images = document.querySelectorAll("#card img");
let current = 0;

function updateStack() {
  images.forEach((img, i) => {
    const indexFromCurrent = (i - current + images.length) % images.length;
    img.style.zIndex = indexFromCurrent;
    img.style.transform = `scale(${1 - indexFromCurrent * 0.03})`;
  });

  current = (current + 1) % images.length;
}

updateStack();

setInterval(updateStack, 2000);
