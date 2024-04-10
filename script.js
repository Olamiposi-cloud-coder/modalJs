'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.open-modal');

const openAndCloseModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', openAndCloseModal);
}

closeModalBtn.addEventListener('click', openAndCloseModal);
