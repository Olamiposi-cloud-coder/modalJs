'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.open-modal');

console.log(openModalBtn);

for (let i = 0; i < openModalBtn.length; i++)
  console.log(openModalBtn[i].textContent);
