//loading costants for day/night mode
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const navMenu = document.querySelectorAll("li a");
const aboutUs = document.querySelector(".about-us");
const aboutUsText = document.querySelector(".about-us-text");
const food = document.querySelector(".food");
const formApplication = document.querySelector(".formApplication");
const form = document.querySelector("form");
const footer = document.querySelector("footer");
const contacts = document.querySelector(".footer-contacts");
const showcaseImages = document.querySelectorAll(".showcase-img");
console.log(showcaseImages);

//loading CSS variables for day/night mode
const rootStyles = getComputedStyle(document.documentElement);

const headVarLight = rootStyles.getPropertyValue("--header-color-light");
const headVarDark = rootStyles.getPropertyValue("--header-color-dark");

const bodyVarLight = rootStyles.getPropertyValue("--body-color-light");
const bodyVarDark = rootStyles.getPropertyValue("--body-color-dark");

const textVarLight = rootStyles.getPropertyValue("--text-color-light");
const textVarDark = rootStyles.getPropertyValue("--text-color-dark");

const formVarLight = rootStyles.getPropertyValue("--form-color-light");
const formVarDark = rootStyles.getPropertyValue("--form-color-dark");

//Loading constants for Icon Swap
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const switchIcon = document.querySelector(".switch-icon");
const lightIcon = document.querySelector(".fa-solid.fa-cloud-moon");
// const lightIcon = document.querySelector(".fa-solid.fa-sun");

//Loading constants for FORM password check display
const formPassword = document.getElementById("password");
const formPasswordCheck = document.getElementById("formPasswordCheck");

//Loading constants for FORM alerts
const formAlert = document.querySelector(".form-alert");

//Loading constants for FORM input checks before sending

// Funciont for Icon swap
const iconSwap = (iconAdd, iconRemove, location) => {
  location.classList.add(iconAdd);
  location.classList.remove(iconRemove);
};
////

// Menu icon
menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    iconSwap("fa-square-xmark", "fa-bars", hamburgerIcon);
    menuList.classList.remove("hidden");
  } else {
    iconSwap("fa-bars", "fa-square-xmark", hamburgerIcon);
    menuList.classList.add("hidden");
  }
});

const imageSourceDay = [
  "./img/IMG_1.jpg",
  "./img/IMG_2.jpg",
  "./img/IMG_3.jpg",
];
const imageSourceNight = [
  "./img/IMG_1N.jpg",
  "./img/IMG_2N.jpg",
  "./img/IMG_3N.jpg",
];

// light switch icon actions
switchIcon.addEventListener("click", () => {
  if (lightIcon.classList[1] === "fa-cloud-moon") {
    iconSwap("fa-sun", "fa-cloud-moon", lightIcon);

    logo.style.color = textVarDark;
    header.style.backgroundColor = headVarDark;
    aboutUs.style.backgroundColor = bodyVarDark;
    food.style.backgroundColor = bodyVarDark;
    formApplication.style.backgroundColor = bodyVarDark;
    form.style.backgroundColor = formVarDark;
    aboutUsText.style.color = textVarDark;
    contacts.style.color = textVarDark;
    footer.style.backgroundColor = bodyVarDark;
    switchIcon.style.color = "#eeeb31";

    //switching images in showcase section
    showcaseImages.forEach((img, index) => {
      img.src = imageSourceNight[index % imageSourceNight.length];
    });

    //switching colors in menu
    navMenu.forEach((menu) => {
      menu.style.color = textVarDark;
    });
  } else {
    iconSwap("fa-cloud-moon", "fa-sun", lightIcon);

    logo.style.color = textVarLight;
    header.style.backgroundColor = headVarLight;
    aboutUs.style.backgroundColor = bodyVarLight;
    food.style.backgroundColor = bodyVarLight;
    formApplication.style.backgroundColor = bodyVarLight;
    form.style.backgroundColor = formVarLight;
    aboutUsText.style.color = textVarLight;
    contacts.style.color = textVarLight;
    footer.style.backgroundColor = bodyVarLight;
    switchIcon.style.color = "#ffffff";

    //switching images in showcase section
    showcaseImages.forEach((img, index) => {
      img.src = imageSourceDay[index % imageSourceDay.length];
    });

    //switching colors in menu
    navMenu.forEach((menu) => {
      menu.style.color = textVarLight;
    });
  }
});

//FORMULAR

//FORM - Password 2nd verification display
formPassword.addEventListener("input", () => {
  let lettersCount = formPassword.value.length;

  if (lettersCount > 0) {
    formPasswordCheck.classList.remove("form-password-hidden");
  } else {
    formPasswordCheck.classList.add("form-password-hidden");
  }
});

//FORM details input - changing size based on content + counting characters left
const textarea = document.getElementById("textarea");
const counterParagraph = document.querySelector(".text-counter");

textarea.addEventListener("input", function () {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";

  let textLetterCount = textarea.value.length;
  counterParagraph.textContent = 1000 - textLetterCount;
});

// FORM - ALERTS

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Deleting preceding alerts
  let paragraphs = formAlert.getElementsByTagName("p");
  if (paragraphs.length > 0) {
    while (paragraphs.length > 0) {
      formAlert.removeChild(paragraphs[0]);
    }
  }

  //checking email matching
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

  // checking password match
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

//SCROLL-UP BUTTON

// visibility

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
