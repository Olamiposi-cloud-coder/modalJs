'use strict';

const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelectorAll('.close-modal');
const openModalBtn = document.querySelectorAll('.open-modal');

const openAndCloseModal = function (modalId) {
  const modalToOpen = document.getElementById(modalId);
  if (modalToOpen) {
    modalToOpen.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  } else {
    console.error("Couldn't find a modal element with ID:", modalId);
  }
};

openModalBtn.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    const modalId = event.target.dataset.modalId;
    openAndCloseModal(modalId);
  });
});

closeModalBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const modalId = btn.closest('.modal').id;
    openAndCloseModal(modalId);
  });
});

overlay.addEventListener('click', function () {
  const openModals = document.querySelectorAll('.modal:not(.hidden)');
  if (openModals.length > 0) {
    openModals.forEach(function (modal) {
      modal.classList.add('hidden');
    });
    overlay.classList.add('hidden');
  }
});

// Handling KeyboardEvent

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'enter') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
