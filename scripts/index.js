const hamburMenu = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu__list');
const closeSymbol = document.querySelector('.close-symbol');

hamburMenu.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuList.classList.toggle('menu__list-showed');
  menuList.classList.toggle('side-menu');
  hamburMenu.style.display = 'none';
  closeSymbol.style.display = 'block';
});

closeSymbol.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuList.classList.toggle('menu__list-showed');
  menuList.classList.toggle('side-menu');
  hamburMenu.style.display = 'block';
  closeSymbol.style.display = 'none';
});
