const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const switchIcon = document.querySelector(".switch-icon");
const lightIcon = document.querySelector(".fa-solid.fa-sun");

// Funkce pro výměnu Icon
const iconSwap = (iconAdd, iconRemove, location) => {
  location.classList.add(iconAdd);
  location.classList.remove(iconRemove);
};
////

// Menu icon
menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    iconSwap("fa-square-xmark", "fa-bars", hamburgerIcon);
    menuList.classList.remove("hidden"); //neupravujeme přes ".style.display", protože by Js mělo větší specificity než CSS.
  } else {
    iconSwap("fa-bars", "fa-square-xmark", hamburgerIcon);
    menuList.classList.add("hidden");
  }
});

// light switch icon actions
switchIcon.addEventListener("click", () => {
  if (lightIcon.classList[1] === "fa-sun") {
    iconSwap("fa-cloud-moon", "fa-sun", lightIcon);

    // //////// Doplnit přepínání stylů na "night mode"
  } else {
    iconSwap("fa-sun", "fa-cloud-moon", lightIcon);
  }
});
