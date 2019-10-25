const chara = document.getElementById('chara');
const pikachu = document.getElementById('pikachu');
let srcs = [
  '/assets/images/chara-1.png',
  '/assets/images/chara-2.png',
  '/assets/images/chara-3.png',
];
let position = 0;
let index = 0;

setInterval(() => {
  chara.src = srcs[index];
  chara.style.left = `${position}px`;
  pikachu.style.left = `${position}px`;
  position += 1;
  index++;
  if (index >= 3) index = 0;
  if (window.screen.availWidth - 32 < position) position = 0;
}, 32);
