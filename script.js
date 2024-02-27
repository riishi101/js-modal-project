'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// //Above examples transformed into text
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);
// //Added text content to their console

//Refactoring removing {modal, overlay}
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Refactoring adding {modal, overlay}
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//We can close the modal by clicking outside of the modal and
//by clicking the close button, there's a 3rd way:
// KEY PRESS EVENTS => {esc key on keyboard}

document.addEventListener('keydown', function (e) {
  //console.log('A key was pressed');
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
