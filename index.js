const hamburgerButton = document.getElementById("hamburger");
const hamburgerImage = document.getElementById("hamburger-img");
const closeButton = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mainTag = document.querySelector("main");
const footerTag = document.querySelector("footer");
console.log(mainTag);
// hamburgerButton.addEventListener("click", () => {
//   hamburgerImage.classList.add("hide");
//   closeButton.classList.remove("hide");
// });

//  Q1 button par click event chalane ke bad kaise menu show hide kar sakte hai?

hamburgerImage.addEventListener("click", () => {
  hamburgerImage.classList.add("hide");
  closeButton.classList.remove("hide");
  mobileMenu.classList.add("show");
  mainTag.classList.add("overlay");
  footerTag.classList.add("overlay");
});
closeButton.addEventListener("click", () => {
  hamburgerImage.classList.remove("hide");
  closeButton.classList.add("hide");
  mobileMenu.classList.remove("show");
  mainTag.classList.remove("overlay");
  footerTag.classList.remove("overlay");
});
