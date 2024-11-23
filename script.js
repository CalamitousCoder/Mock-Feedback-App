const submitButton = document.getElementById('submitFeedback');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackList = document.getElementById('feedbackList');

// Array to hold feedback 
let feedbackArray = ["App is a bit glitchy", "Great Customer Service"];

// Handle feedback submission
submitButton.addEventListener('click', () => {
    const feedback = feedbackInput.value.trim();
    
    // Ensure feedback isn't blank when clicked
    if (feedback !== "") {
        
        feedbackArray.push(feedback);

        
        feedbackInput.value = "";

       
        updateFeedbackList();
    }
});

// add feedback to list
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

