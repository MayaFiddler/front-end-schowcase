// 1. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// 2. Real Voice Recognition using Web Speech API
const micButton = document.getElementById('mic-button');
const feedbackMessage = document.getElementById('feedback-message');

// Check if the browser supports speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES'; // You can change this to 'es-ES' for Spanish!
    recognition.interimResults = false; // Only show final results

    // What happens when you click the button
    micButton.addEventListener('click', () => {
        try {
            recognition.start(); // Start listening
            micButton.classList.add('recording');
            micButton.textContent = '🔴 Listening...';
            feedbackMessage.textContent = 'Please speak now...';
            feedbackMessage.className = 'visible';
            feedbackMessage.style.color = 'inherit';
        } catch (error) {
            feedbackMessage.textContent = 'Microphone is already listening.';
        }
    });

    // What happens when the AI understands your speech
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        
        // Reset the button
        micButton.classList.remove('recording');
        micButton.textContent = '🎤 Try Again';
        
        // Display what the user actually said!
        feedbackMessage.textContent = `You said: "${transcript}"`;
        feedbackMessage.style.color = '#27ae60'; // Success green
    };

    // What happens if there is an error (e.g., no microphone allowed)
    recognition.onerror = (event) => {
        micButton.classList.remove('recording');
        micButton.textContent = '🎤 Try Again';
        feedbackMessage.textContent = 'Error: Could not hear you. Check mic permissions.';
        feedbackMessage.style.color = '#e74c3c'; // Error red
    };

} else {
    // Fallback for older browsers that don't support the API
    micButton.addEventListener('click', () => {
        feedbackMessage.textContent = 'Sorry, your browser does not support voice recognition. Try Chrome!';
        feedbackMessage.className = 'visible';
        feedbackMessage.style.color = '#e74c3c';
    });
}