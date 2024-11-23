// Get references to the DOM elements
const submitButton = document.getElementById('submitFeedback');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackList = document.getElementById('feedbackList');

// Array to hold feedback (for demo purposes, using an array here)
let feedbackArray = [];

// Handle feedback submission
submitButton.addEventListener('click', () => {
    const feedback = feedbackInput.value.trim();
    
    // Check if feedback is not empty
    if (feedback !== "") {
        // Add the feedback to the array
        feedbackArray.push(feedback);

        // Clear the input field
        feedbackInput.value = "";

        // Update the feedback list on the page
        updateFeedbackList();
    }
});

// Function to update the feedback list on the webpage
function updateFeedbackList() {
    // Clear the existing list (if any)
    feedbackList.innerHTML = '';

    // Loop through the feedback array and add each feedback item to the list
    feedbackArray.forEach(feedback => {
        const li = document.createElement('li'); // Create a list item for each feedback
        li.textContent = feedback;  // Set the text of the list item
        feedbackList.appendChild(li);  // Append the list item to the ul
    });
}
