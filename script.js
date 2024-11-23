// Get references to the DOM elements
const submitButton = document.getElementById('submitFeedback');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackList = document.getElementById('feedbackList');

// Array to hold feedback (for demo purposes, using an array here)
let feedbackArray = [];

// Handle feedback submission
submitButton.addEventListener('click', () => {
    const feedback = feedbackInput.value.trim();
    if (feedback !== "")