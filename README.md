## Modal Window - A Simple JavaScript Modal Component

## About
This project provides a basic modal window component implemented with JavaScript. It enables you to easily integrate modal functionality into your web pages, allowing you to create pop-up windows for displaying content, confirmations, or other interactive elements.

## Features
Creates modal windows that can be opened and closed.
Uses data attributes on buttons to associate them with specific modals.
Includes a close button within each modal for easy dismissal.
Toggles the visibility of the modal overlay when a modal is opened or closed.

## Installation
Clone or download the repository.
Include the necessary files (HTML, CSS, and JavaScript) in your project.

## Usage
HTML
Add buttons to your HTML with the class "open-modal" and a data-modal-id attribute containing the ID of the corresponding modal element.

html
Copy code
<button class="open-modal" data-modal-id="modal1">Show modal 1</button>
<button class="open-modal" data-modal-id="modal2">Show modal 2</button>

<div class="modal hidden" id="modal1">
  <button class="close-modal">&times;</button>
  <h1>I'm a modal window One</h1>
  <p>
    Lorem ipsum dolor sit amet...
  </p>
</div>

<div class="modal hidden" id="modal2">
  <button class="close-modal">&times;</button>
  <h1>I'm a modal window Two</h1>
  <p>
    Lorem ipsum dolor sit amet...
  </p>
</div>

<div class="overlay hidden"></div>
CSS
Define the styles for the modal elements (including the hidden state), close buttons, and overlay in your CSS file.

## JavaScript
Include the JavaScript file (e.g., script.js) in your HTML before the closing </body> tag.

## Note: Use code with caution.

## Contribution
Feel free to contribute to this project by submitting pull requests for improvements or bug fixes.
