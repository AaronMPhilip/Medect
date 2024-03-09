// Select the icon element
const icon = document.querySelector('.dark-mode-icon');

// Add click event listener
icon.addEventListener('click', () => {
  // Toggle dark-mode class on body
  document.body.classList.toggle('dark-mode');
});
