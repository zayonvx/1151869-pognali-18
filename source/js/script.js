var navigation = document.querySelector(".navigation");
var navigationToogle = document.querySelector(".button-toogle");
var navigationClose = document.querySelector(".button-toogle--close");
var navigationOpen = document.querySelector(".button-toogle--open");

navigation.classList.remove("navigation--no-js")

navigationToogle.addEventListener("click", function() {
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
    navigationClose.classList.remove("button-toogle--hide");
    navigationOpen.classList.add("button-toogle--hide");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
    navigationClose.classList.add("button-toogle--hide");
    navigationOpen.classList.remove("button-toogle--hide");
  }
})
