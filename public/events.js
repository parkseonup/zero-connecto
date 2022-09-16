const btn = document.querySelector('.psuButton');
let mode = false;

function toggleClass() {
  if (!mode) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');

  mode = !mode;
}

btn.addEventListener('click', toggleClass);
