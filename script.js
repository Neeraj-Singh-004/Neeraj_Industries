// Scroll-to-Top Button Behavior
const scrollTopBtn = document.getElementById('scrollTopBtn');
let buttonVisible = false;

// Show/Hide with transition
window.onscroll = function() {
    const shouldShow = document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;
    if (shouldShow && !buttonVisible) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
        buttonVisible = true;
    } else if (!shouldShow && buttonVisible) {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";
        buttonVisible = false;
    }
};

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typewriter Effect for the Welcome Message
const typewriterText = document.querySelector("#home h2");
const typewriterMessage = "Welcome to Neeraj Industries";
let index = 0;
const typewriterSpeed = 100; // Speed in milliseconds

function typeWriter() {
    if (index < typewriterMessage.length) {
        typewriterText.innerHTML += typewriterMessage.charAt(index);
        index++;
        setTimeout(typeWriter, typewriterSpeed);
    }
}

// Start typewriter effect when the page loads
window.onload = typeWriter;
