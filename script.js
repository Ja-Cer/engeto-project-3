//Načtení prvků pro light mode swap
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const aboutUs = document.querySelector(".about-us");
const aboutUsText = document.querySelector(".about-us-text");
const formApplication = document.querySelector(".formApplication");
const form = document.querySelector("form");
const footer = document.querySelector("footer");

const rootStyles = getComputedStyle(document.documentElement);

const headVarLight = rootStyles.getPropertyValue("--header-color-light");
const headVarDark = rootStyles.getPropertyValue("--header-color-dark");

const bodyVarLight = rootStyles.getPropertyValue("--body-color-light");
const bodyVarDark = rootStyles.getPropertyValue("--body-color-dark");

const formVarLight = rootStyles.getPropertyValue("--form-color-light");
const formVarDark = rootStyles.getPropertyValue("--form-color-dark");

//Načtení prvků pro Icon Swap
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const switchIcon = document.querySelector(".switch-icon");
const lightIcon = document.querySelector(".fa-solid.fa-sun");

//Načtení prvnků pro form password check display
const formPassword = document.querySelector(".form-input-password");
const formPasswordCheck = document.getElementById("formPasswordCheck");

//Načtení prvků pro form alerts
const formAlert = document.querySelector(".form-alert");

//Načtení prvků pro form checks před odesláním

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
    logo.style.color = "white";
    header.style.backgroundColor = headVarDark;
    aboutUs.style.backgroundColor = bodyVarDark;
    formApplication.style.backgroundColor = bodyVarDark;
    form.style.backgroundColor = formVarDark;
    aboutUsText.style.color = "white";
    footer.style.backgroundColor = bodyVarDark;
  } else {
    iconSwap("fa-sun", "fa-cloud-moon", lightIcon);
    logo.style.color = "black";
    header.style.backgroundColor = headVarLight;
    aboutUs.style.backgroundColor = bodyVarLight;
    formApplication.style.backgroundColor = bodyVarLight;
    form.style.backgroundColor = formVarLight;
    aboutUsText.style.color = "black";
    footer.style.backgroundColor = bodyVarLight;
  }
});

//Password 2nd verification display
formPassword.addEventListener("input", () => {
  let lettersCount = formPassword.value.length;

  console.log(lettersCount);

  if (lettersCount > 0) {
    formPasswordCheck.classList.remove("form-password-hidden");
  } else {
    formPasswordCheck.classList.add("form-password-hidden");
  }
});

//Check password length - Better to add this check to "On Click"
// otherwise it gets triggered too ofter
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //promazání předchozích hlášek
  let paragraphs = formAlert.getElementsByTagName("p");
  console.log(paragraphs);
  if (paragraphs.length > 0) {
    while (paragraphs.length > 0) {
      formAlert.removeChild(paragraphs[0]);
    }
  }

  //přidávání hlášek & zobrezní Alertů
  let lettersCount = formPassword.value.length;

  if (lettersCount > 0 && lettersCount < 9) {
    formAlert.classList.remove("form-alert-hidden");
    let pElement = document.createElement("p");
    pElement.textContent = "Password is too short";
    formAlert.appendChild(pElement);
  }
  // TO DO - kontrola shody hesel
  if (lettersCount > 0) {
    formAlert.classList.remove("form-alert-hidden");
    let pElement2 = document.createElement("p");
    pElement2.textContent = "Passwords are not matching";
    formAlert.appendChild(pElement2);
  }
});
