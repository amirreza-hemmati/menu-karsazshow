console.clear();
const toggleMenu = document.getElementById("toggle-menu");
const toggleMenu__menu = document.getElementById("toggle-menu__menu");
const toggleMenu__width = document.getElementById("toggle-menu__width");
const toggleMenu__widthOne = toggleMenu__width.children[0];
const toggleMenu__widthTwo = toggleMenu__width.children[1];
const toggleMenu__widthThree = toggleMenu__width.children[2];
const menu = document.querySelectorAll(".toggle-menu__menu")[0];
const aside = menu.querySelector(".aside-menu");
const divMenu = menu.querySelector(".div-menu");
const clickedToggleMenu = document.getElementById("clicked-toggle-menu");
const sidebarMenu = document.getElementById("sidebar-menu");
const listSideBarMenu = sidebarMenu.children;
const content = document.querySelectorAll(".content-sidebar");

clickedToggleMenu.addEventListener("click", event => {
  event.preventDefault();

  const toggleMenuWidth = toggleMenu.offsetWidth;
  aside.style.width = `${toggleMenuWidth}px`;

  toggleMenu.classList.toggle("navbar__menu-hover-clicked");
  toggleMenu__widthOne.classList.toggle("hover__icon_width-one-clicked");
  toggleMenu__widthTwo.classList.toggle("hover__icon_width-two-clicked");
  toggleMenu__widthThree.classList.toggle("hover__icon_width-three-clicked");
  menu.classList.toggle("toggle-menu__menu__toggleClass");

  setTimeout(() => {
    divMenu.classList.toggle("toggle-div");
  }, 300);
});

sidebarMenu.addEventListener("click", event => {
  event.preventDefault();

  if (event.target.classList.contains("sidebar")) {
    const key = event.target.getAttribute("data-content").split("-")[1] - 1;

    if (content[key]) {
      content.forEach((el, contentKey) => {
        const elements = event.target.parentElement.parentElement.children;
        el.classList.remove("activate");
        elements[contentKey].classList.remove("activate");
        if(contentKey == key){
          elements[key].classList.add("activate");
          el.classList.add("activate");
        }
      });
    }
  }
});

$(".div-menu > ul > li").hover(function () {
  $(this).children("ul").fadeToggle(200);
});