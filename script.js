var i = 0;
var speed = 100 // Time to passe in ms for typewriter animation

/**
 * Helper function for typeWriter
 * @param {string} word 
 * @param {string} id 
 */
function typeWriterHelper(word, id) {
  if (i < word.length) {
    document.getElementById(id).innerHTML += word.charAt(i);
    i++;
    setTimeout(typeWriterHelper, speed, word, id);
  }
}

/**
 * Function to animate text in a typewriter fashion
 * @param {string} word 
 * @param {string} id 
 */
function typeWriter(word, id) {
  i = 0;
  setTimeout(typeWriterHelper, 1000, word, id);
}

/**
 * Function to toggle dark mode
 */
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}