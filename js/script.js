//loading costants for day/night mode
const header = document.querySelector("header");
const logo = document.getElementById("logo");
const navMenu = document.querySelectorAll("li a");
const aboutUs = document.getElementById("aboutUs");
const aboutUsText = document.getElementById("aboutUsText");
const food = document.getElementById("food");
const formApplication = document.getElementById("formApplication");
const form = document.querySelector("form");
const footer = document.querySelector("footer");
const contacts = document.getElementById("contacts");
const showcaseImages = document.querySelectorAll(".showcase-img");
const body = document.querySelector("body");

//loading CSS variables for day/night mode
const rootStyles = getComputedStyle(document.documentElement);

const textVarLight = rootStyles.getPropertyValue("--text-color-light");
const textVarDark = rootStyles.getPropertyValue("--text-color-dark");

//Loading constants for Icon Swap
const menuIcon = document.getElementById("menuIcon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

const switchIcon = document.getElementById("switchIcon");
const lightIcon = document.querySelector(".fa-solid.fa-cloud-moon");
// const lightIcon = document.querySelector(".fa-solid.fa-sun");

//Loading constants for FORM password check display
const formPassword = document.getElementById("password");
const formPasswordCheck = document.getElementById("formPasswordCheck");

//Loading constants for FORM alerts
const formAlert = document.getElementById("formAlert");

//Loading constants for FORM input checks before sending

// Funciont for Icon swap
const iconSwap = (iconAdd, iconRemove, location) => {
  location.classList.add(iconAdd);
  location.classList.remove(iconRemove);
};
////

//Function for swap to Dark Mode

function darkModeToggle(element) {
  element.classList.toggle("darkMode");
}

function hiddenToggle(element) {
  element.classList.toggle("hidden");
}

// Menu icon actions (icon swap + showing the menu)
menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    iconSwap("fa-square-xmark", "fa-bars", hamburgerIcon);
    menuList.classList.remove("hidden-menu");
  } else {
    iconSwap("fa-bars", "fa-square-xmark", hamburgerIcon);
    menuList.classList.add("hidden-menu");
  }
});

const imageSourceDay = [
  "./img/IMG_1.JPG",
  "./img/IMG_2.JPG",
  "./img/IMG_3.JPG",
];
const imageSourceNight = [
  "./img/IMG_1N.JPG",
  "./img/IMG_2N.JPG",
  "./img/IMG_3N.JPG",
];

// Actions upon hitting the Dark Mode switch
switchIcon.addEventListener("click", () => {
  darkModeToggle(body);
  darkModeToggle(header);
  darkModeToggle(form);

  // switching icon
  if (lightIcon.classList[1] === "fa-cloud-moon") {
    iconSwap("fa-sun", "fa-cloud-moon", lightIcon);

    //switching dark mode icon color
    switchIcon.style.color = "#eeeb31";

    //switching images in showcase section
    showcaseImages.forEach((img, index) => {
      img.src = imageSourceNight[index % imageSourceNight.length];
    });

    //switching text colors in menu
    navMenu.forEach((menu) => {
      menu.style.color = textVarDark;
    });
  } else {
    iconSwap("fa-cloud-moon", "fa-sun", lightIcon);

    //switching dark mode icon color
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

//FORM - Password 2nd verification display upon filling 1st password
formPassword.addEventListener("input", () => {
  let lettersCount = formPassword.value.length;

  if (lettersCount > 0) {
    formPasswordCheck.classList.remove("hidden");
  } else {
    formPasswordCheck.classList.add("hidden");
  }
});

//FORM details input - changing input area size based on content + counting characters left
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
    let pElement2 = document.createElement("p");
    pElement2.textContent = "Emails are not matching";
    formAlert.appendChild(pElement2);
  }

  let lettersCount = formPassword.value.length;

  if (lettersCount > 0 && lettersCount < 8) {
    let pElement = document.createElement("p");
    pElement.textContent = "Password is too short";
    formAlert.appendChild(pElement);
  }

  // checking if passwords match
  const passwordInput = document.getElementById("password");
  const passwordInput2 = document.getElementById("password2");
  const passwordInputValue = passwordInput.value;
  const passwordInput2Value = passwordInput2.value;

  if (lettersCount > 0 && passwordInputValue !== passwordInput2Value) {
    let pElement2 = document.createElement("p");
    pElement2.textContent = "Passwords are not matching";
    formAlert.appendChild(pElement2);
  }
});

//SCROLL-UP BUTTON

// visibility set-up

const upButtonWrapper = document.getElementById("upButtonWrapper");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    upButtonWrapper.classList.remove("hidden");
  } else {
    upButtonWrapper.classList.add("hidden");
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
