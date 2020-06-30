var contador = 1;

const menu_bar = document.querySelector('.menu_bar');
const nav = document.querySelector('nav')
menu_bar.addEventListener('click', () => {
  if (contador === 1) {
    nav.animate({
      left: ['-100%', '0%']
    },
      {
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1,
      }
    )
    nav.style.left = '0';
    contador = 0;
  } else {
    nav.animate({
      left: ['0%', '-100%']
    },
      {
        duration: 1000,
        easing: 'ease-in-out',
        iterations: 1,
      }
    )
    nav.style.left = '100%';
    contador = 1;
  }
})