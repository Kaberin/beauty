const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", menu);

function menu() {
  const menuNav = document.querySelector(".menu__nav");
  if (menuNav.style.display !== "flex") {
    console.log(menuNav.style.display);
    menuNav.style.display = "flex";
    menuNav.style.width = "300px";
    console.log(menuNav.style.display);
  } else {
    menuNav.style.display = "none";
  }
}
