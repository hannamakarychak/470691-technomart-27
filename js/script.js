const bookmarkButtonsArray = document.querySelectorAll(
  ".catalog-list__button-hidden--bookmark"
);

bookmarkButtonsArray.forEach(bookmarkButton => {
  bookmarkButton.addEventListener("click", evt => {
    evt.preventDefault();
    const buyButton = document.querySelector(
      ".header__utility-button--bookmark"
    );
    buyButton.classList.add("header__utility-button--active");
  });
});

const cartButtonsArray = document.querySelectorAll(
  ".catalog-list__button-hidden--cart"
);

cartButtonsArray.forEach(cartButton => {
  cartButton.addEventListener("click", evt => {
    evt.preventDefault();
    const buyButton = document.querySelector(".header__utility-button--cart");
    buyButton.classList.add("header__utility-button--active");
  });
});
