var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerLogo = document.querySelector('.page-header__logo');

navMain.classList.remove('main-nav--nojs');

function openMenu() {
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  headerLogo.style.backgroundColor = '#283645';
  headerLogo.style.borderBottom = '1px solid #000';
  if (document.body.offsetWidth < 660) {
    headerLogo.style.paddingBottom = '21px';
  };
}
function closeMenu() {
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  headerLogo.style.backgroundColor = 'transparent';
  headerLogo.style.borderBottom = 'none';
  if (document.body.offsetWidth < 660) {
    headerLogo.style.paddingBottom = '18px';
  };
}

closeMenu();

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    openMenu()
  } else {
    closeMenu()
  };
});
