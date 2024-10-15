const dynamicText = document.getElementById('dynamic-text');
const words = ["a Catalyst.", "an Innovator.", "a Leader.", "an Engineer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    dynamicText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    dynamicText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);  // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);  // Pause before typing next word
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);  // Initial delay before starting the effect
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.backgroundColor = `rgba(0, 0, 0, 0.9)`;
    } else {
      header.style.backgroundColor = `rgba(0, 0, 0, 0.3)`; // Default opacity when at the top
    }
  });

  function openTab(evt, tabName) {
    // Hide all tab content
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Remove the active class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
  
    // Show the clicked tab and add the active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Function to open the modal
  function openModal() {
    document.getElementById('courseModal').style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
  }

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    var modal = document.getElementById('courseModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }