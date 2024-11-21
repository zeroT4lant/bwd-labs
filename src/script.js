document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active'); // Открытие/закрытие меню
    burgerMenu.classList.toggle('active'); // Изменение иконки на крестик
  });
});
