// CART BUTTON COLOR CHANGE
const bookmarkButtonsArray = Array.prototype.slice.call(
  document.querySelectorAll(".item__button-hidden--bookmark")
);

bookmarkButtonsArray.forEach(function(bookmarkButton) {
  bookmarkButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    const buyButton = document.querySelector(
      ".header__utility-button--bookmark"
    );
    buyButton.classList.add("header__utility-button--active");
  });
});

const cartButtonsArray = Array.prototype.slice.call(
  document.querySelectorAll(".item__button-hidden--cart")
);

cartButtonsArray.forEach(function(cartButton) {
  cartButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    const buyButton = document.querySelector(".header__utility-button--cart");
    buyButton.classList.add("header__utility-button--active");
  });
});

// MAP POPUP

var popup = document.querySelector(".map-modal");
var openPopupButton = document.querySelector(".button--open");
var closePopupButton = popup.querySelector(".modal__close");

openPopupButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
});

closePopupButton.addEventListener("click", function() {
  popup.classList.remove("modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      evt.preventDefault();
      popup.classList.remove("modal--show");
    }
  }
});

// CONTACT FORM POPUP
var formPopup = document.querySelector(".contacts__form");
var openPopupButton = document.querySelector(".button--open-form");
var closePopupButton = document.querySelector(".modal__close");

openPopupButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  formPopup.classList.add("modal--show");
});

closePopupButton.addEventListener("click", function() {
  formPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal--show");
    }
  }
});
