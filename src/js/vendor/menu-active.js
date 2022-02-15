let url = document.location;
let navItems = document.querySelectorAll('.nav__link');

navItems.forEach(e => {
  if (url.href == e.href) {
    console.log(e.href);
    e.classList.add("nav__item-active")
  }
});
