// Create floating hearts
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create sparkles effect
function createSparkle() {
    const sparklesContainer = document.getElementById('sparklesContainer');
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = '✨';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    sparklesContainer.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}

// Create hearts and sparkles periodically
setInterval(createHeart, 500);
setInterval(createSparkle, 800);

// Valentine's Day Countdown
function updateCountdown() {
    const valentinesDay = new Date('2026-02-14T00:00:00');
    const now = new Date();
    const diff = valentinesDay - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdownTimer').textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('countdownTimer').textContent = 'Happy Valentine\'s Day! 💕';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Love Quotes that rotate
const loveQuotes = [
    "You are my today and all of my tomorrows 💕",
    "In a sea of people, my eyes will always search for you ✨",
    "You're my favorite notification 💖",
    "I love you more than yesterday, less than tomorrow 💝",
    "You make my heart smile 😊",
    "Every love story is beautiful, but ours is my favorite 🌹"
];

let currentQuoteIndex = 0;
function showLoveQuote() {
    const quoteElement = document.querySelector('.quote-text');
    quoteElement.textContent = loveQuotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;
}

showLoveQuote();
setInterval(showLoveQuote, 15000);

// Notebook interaction - Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
const notebookContainer = document.getElementById('notebookContainer');
const notebookCover = document.getElementById('notebookCover');
const invitationCard = document.getElementById('invitationCard');
const letterContent = document.getElementById('letterContent');
const closeBtn = document.getElementById('closeBtn');
const continueBtn = document.getElementById('continueBtn');
const memorySection = document.getElementById('memorySection');
const backBtn = document.getElementById('backBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseOverlay = document.getElementById('responseOverlay');
const responseTitle = document.getElementById('responseTitle');
const responseMessage = document.getElementById('responseMessage');
const responseBtn = document.getElementById('responseBtn');

// Swipe and click to open notebook
let touchStartX = 0;
let touchEndX = 0;

notebookContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

notebookContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        openNotebook();
    }
}

notebookContainer.addEventListener('click', () => {
    openNotebook();
});

function openNotebook() {
    notebookContainer.classList.add('open');
    
    setTimeout(() => {
        invitationCard.style.display = 'none';
        letterContent.classList.add('show');
    }, 1200);
}

// Close letter and return to notebook
closeBtn.addEventListener('click', () => {
    letterContent.classList.remove('show');
    setTimeout(() => {
        invitationCard.style.display = 'flex';
        notebookContainer.classList.remove('open');
    }, 300);
});

// Continue to memory section
continueBtn.addEventListener('click', () => {
    letterContent.classList.remove('show');
    setTimeout(() => {
        memorySection.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
});

// Back to letter
backBtn.addEventListener('click', () => {
    memorySection.classList.remove('show');
    setTimeout(() => {
        letterContent.classList.add('show');
    }, 300);
});

// Handle Yes button
yesBtn.addEventListener('click', async () => {
    // Send response to backend
    await sendResponseToServer('yes');
    
    showResponse(
        '🎉 Yay! 🎉',
        "You just made my day! I can't wait to make this Valentine's Day special with you! 💕"
    );
    
    // Create explosion of hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// Handle Maybe button
noBtn.addEventListener('click', async () => {
    // Send response to backend
    await sendResponseToServer('maybe');
    
    showResponse(
        '😊 That\'s okay! 😊',
        "I appreciate your honesty! Maybe I can ask you again another time? Either way, you're still amazing! 💕"
    );
});

// Send response to NestJS backend
async function sendResponseToServer(answer) {
    try {
        const response = await fetch('/api/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer,
                timestamp: new Date().toISOString(),
            }),
        });
        
        const data = await response.json();
        console.log('Response saved:', data);
    } catch (error) {
        console.error('Error saving response:', error);
    }
}

// Show response overlay
function showResponse(title, message) {
    responseTitle.textContent = title;
    responseMessage.textContent = message;
    responseOverlay.classList.add('show');
}

// Close response overlay
responseBtn.addEventListener('click', () => {
    responseOverlay.classList.remove('show');
});

// Close response overlay when clicking outside
responseOverlay.addEventListener('click', (e) => {
    if (e.target === responseOverlay) {
        responseOverlay.classList.remove('show');
    }
});

// Add scroll reveal effect for memory cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Prevent "Maybe" button from being clicked too easily - Make it SUPER tricky!
let noButtonAttempts = 0;
const noButtonTexts = [
    "Maybe... 😊",
    "Wait, No! 😅",
    "Are you sure? 🤔",
    "Think again! 💭",
    "Really? 😢",
    "Please no... 🥺",
    "One more chance? 💕",
    "Wrong button! ⬅️",
    "Try the YES! ✨",
    "Come on... 🙏"
];

noBtn.addEventListener('mouseover', () => {
    noButtonAttempts++;
    
    // Change button text
    if (noButtonAttempts < noButtonTexts.length) {
        noBtn.textContent = noButtonTexts[noButtonAttempts];
    }
    
    // Get button and container dimensions
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();
    
    // Calculate max movement to keep button in container
    const maxX = (containerRect.width - buttonRect.width) / 2;
    const maxY = 100;
    
    // Increase movement range and speed with each attempt
    const movementMultiplier = Math.min(1 + (noButtonAttempts * 0.3), 3);
    const randomX = (Math.random() * maxX * 2 - maxX) * movementMultiplier;
    const randomY = (Math.random() * maxY * 2 - maxY) * movementMultiplier;
    
    // Apply transformation
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${1 - noButtonAttempts * 0.02})`;
    noBtn.style.transition = 'transform 0.3s ease';
    
    // Make Yes button bigger and more attractive
    if (yesBtn) {
        yesBtn.style.transform = `scale(${1 + noButtonAttempts * 0.05})`;
        yesBtn.style.transition = 'transform 0.3s ease';
    }
    
    // After many attempts, make it really hard
    if (noButtonAttempts > 5) {
        noBtn.style.opacity = Math.max(0.3, 1 - (noButtonAttempts - 5) * 0.1);
    }
});

// Reset position when mouse leaves
noBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        noBtn.style.transform = `scale(${1 - noButtonAttempts * 0.02})`;
    }, 300);
});

// Photo Lightbox Functionality
const photoLightbox = document.getElementById('photoLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

// Add click event to all clickable photos
document.querySelectorAll('.photo-clickable').forEach(photo => {
    photo.addEventListener('click', () => {
        const photoSrc = photo.getAttribute('data-photo');
        const photoCaption = photo.getAttribute('data-caption');
        
        lightboxImage.src = photoSrc;
        lightboxCaption.textContent = photoCaption;
        photoLightbox.classList.add('show');
    });
});

// Close lightbox
lightboxClose.addEventListener('click', () => {
    photoLightbox.classList.remove('show');
});

// Close lightbox when clicking outside the image
photoLightbox.addEventListener('click', (e) => {
    if (e.target === photoLightbox) {
        photoLightbox.classList.remove('show');
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoLightbox.classList.contains('show')) {
        photoLightbox.classList.remove('show');
    }
});

}); // End of DOMContentLoaded
