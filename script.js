const submitButton = document.getElementById('submitFeedback');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackList = document.getElementById('feedbackList');

// Array to hold feedback 
let feedbackArray = ["App is a bit glitchy", "Great Customer Service"];

// Update the list with initial feedback
updateFeedbackList();

// Handle feedback submission
submitButton.addEventListener('click', () => {
    const feedback = feedbackInput.value.trim();
    
    // Ensure feedback isn't blank
    if (feedback !== "") {
        feedbackArray.push(feedback);  // Add feedback to array

        feedbackInput.value = "";  // Clear the input field

        updateFeedbackList();  // Update the feedback list
    }
});

// Function to update the feedback list on the page
function updateFeedbackList() {
    // Clear the current list
    feedbackList.innerHTML = '';

    // Loop through the feedback array and add each feedback item to the list
    feedbackArray.forEach(feedback => {
        const li = document.createElement('li');  // Create list item
        li.textContent = feedback;  // Set the text of the list item
        feedbackList.appendChild(li);  // Append to the list
    });
}