'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.open-modal');

const openAndCloseModal = function (event) {
  const buttonClicked = event.target;
  const modalId = buttonClicked.dataset.modalId;

  const modalToOpen = document.getElementById('modalId');
  modalToOpen.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

openModalBtn.forEach(function (btn) {
  btn.addEventListener('click', openAndCloseModal);
});

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', function () {
    const openModals = document.querySelectorAll('.modal:not(.hidden)');
    openModals.forEach(modal => modal.classList.add('hidden'));
  });
}
