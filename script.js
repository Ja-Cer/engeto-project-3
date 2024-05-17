const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

// Funkce pro výměnu Icon
const iconSwap = (iconAdd, iconRemove, location) => {
  location.classList.add(iconAdd);
  location.classList.remove(iconRemove);
};
//

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    iconSwap("fa-square-xmark", "fa-bars", hamburgerIcon);
    menuList.classList.remove("hidden"); //neupravujeme přes ".style.display", protože by Js mělo větší specificity než CSS.
  } else {
    iconSwap("fa-bars", "fa-square-xmark", hamburgerIcon);
    menuList.classList.add("hidden");
  }
});
