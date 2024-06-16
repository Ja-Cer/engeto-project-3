//Načtení prvků pro day/night mode
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navMenu = document.querySelectorAll("li a");
const aboutUs = document.querySelector(".about-us");
const aboutUsText = document.querySelector(".about-us-text");
const formApplication = document.querySelector(".formApplication");
const form = document.querySelector("form");
const footer = document.querySelector("footer");
const contacts = document.querySelector(".footer-contacts");

//Načtení CSS variables pro day/night mode
const rootStyles = getComputedStyle(document.documentElement);

const headVarLight = rootStyles.getPropertyValue("--header-color-light");
const headVarDark = rootStyles.getPropertyValue("--header-color-dark");

const bodyVarLight = rootStyles.getPropertyValue("--body-color-light");
const bodyVarDark = rootStyles.getPropertyValue("--body-color-dark");

const textVarLight = rootStyles.getPropertyValue("--text-color-light");
const textVarDark = rootStyles.getPropertyValue("--text-color-dark");

const formVarLight = rootStyles.getPropertyValue("--form-color-light");
const formVarDark = rootStyles.getPropertyValue("--form-color-dark");

//Načtení prvků pro Icon Swap
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const switchIcon = document.querySelector(".switch-icon");
const lightIcon = document.querySelector(".fa-solid.fa-cloud-moon");
// const lightIcon = document.querySelector(".fa-solid.fa-sun");

//Načtení prvnků pro form password check display
const formPassword = document.getElementById("password");
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
  if (lightIcon.classList[1] === "fa-cloud-moon") {
    iconSwap("fa-sun", "fa-cloud-moon", lightIcon);

    logo.style.color = textVarDark;
    header.style.backgroundColor = headVarDark;
    aboutUs.style.backgroundColor = bodyVarDark;
    formApplication.style.backgroundColor = bodyVarDark;
    form.style.backgroundColor = formVarDark;
    aboutUsText.style.color = textVarDark;
    contacts.style.color = textVarDark;
    footer.style.backgroundColor = bodyVarDark;
    switchIcon.style.color = "#eeeb31";
    navMenu.forEach((menu) => {
      menu.style.color = textVarDark;
    });
  } else {
    iconSwap("fa-cloud-moon", "fa-sun", lightIcon);
    logo.style.color = textVarLight;
    header.style.backgroundColor = headVarLight;
    aboutUs.style.backgroundColor = bodyVarLight;
    formApplication.style.backgroundColor = bodyVarLight;
    form.style.backgroundColor = formVarLight;
    aboutUsText.style.color = textVarLight;
    contacts.style.color = textVarLight;
    footer.style.backgroundColor = bodyVarLight;
    switchIcon.style.color = "#ffffff";
    navMenu.forEach((menu) => {
      menu.style.color = textVarLight;
    });
  }
});

//Password 2nd verification display
formPassword.addEventListener("input", () => {
  let lettersCount = formPassword.value.length;

  if (lettersCount > 0) {
    formPasswordCheck.classList.remove("form-password-hidden");
  } else {
    formPasswordCheck.classList.add("form-password-hidden");
  }
});

// FORM - ALERTS

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //promazání předchozích hlášek
  let paragraphs = formAlert.getElementsByTagName("p");
  if (paragraphs.length > 0) {
    while (paragraphs.length > 0) {
      formAlert.removeChild(paragraphs[0]);
    }
  }

  //kontrola shody emailů
  const email = document.getElementById("emailInput");
  const email2 = document.getElementById("email2Input");
  const emailInput = email.value;
  const email2Input = email2.value;

  if (emailInput !== email2Input) {
    formAlert.classList.remove("form-alert-hidden");

    let pElement2 = document.createElement("p");
    pElement2.textContent = "Emails are not matching";
    formAlert.appendChild(pElement2);
  }

  let lettersCount = formPassword.value.length;

  if (lettersCount > 0 && lettersCount < 8) {
    formAlert.classList.remove("form-alert-hidden");
    let pElement = document.createElement("p");
    pElement.textContent = "Password is too short";
    formAlert.appendChild(pElement);
  }

  // kontrola shody hesel
  const passwordInput = document.getElementById("password");
  const passwordInput2 = document.getElementById("password2");
  const passwordInputValue = passwordInput.value;
  const passwordInput2Value = passwordInput2.value;

  if (lettersCount > 0 && passwordInputValue !== passwordInput2Value) {
    formAlert.classList.remove("form-alert-hidden");

    let pElement2 = document.createElement("p");
    pElement2.textContent = "Passwords are not matching";
    formAlert.appendChild(pElement2);
  }
});

//SCROLL-UP BUTtON

//Scroll-up butoon - visibility

const upButtonWrapper = document.getElementById("upButtonWrapper");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    upButtonWrapper.classList.remove("up-button-wrapper-hidden");
  } else {
    upButtonWrapper.classList.add("up-button-wrapper-hidden");
  }
});

//Scroll-up function
const upButton = document.querySelector(".up-button");

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

upButton.addEventListener("click", () => {
  scrollToTop();
});
