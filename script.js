"use strict";
/*
Limitation of querySelector():-When we use it with a selector with multiple elements,only the first one get selected.
*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
//function for opening the dialog box
const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//function for closing the dialog box
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//selecting each element belong to same class
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", open);
}

btnCloseModal.addEventListener("click", close);
overlay.addEventListener("click", close);
