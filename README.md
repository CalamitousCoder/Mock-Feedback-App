# Mock-Feedback-App
Anonymous Feedback App
A simple web app that allows users to submit anonymous feedback and view feedback from others. The app features a basic UI where users can type their feedback and see a list of previously submitted feedback.

# How It's Made
** Concepts Used: DOM Manipulation, Event Handling, Arrays: Feedback is stored in an array and dynamically added to the list.

## App Structure
The project allows users to submit feedback through a text area, which is added to a dynamic list when the submit button is clicked. The feedback is stored in an array and displayed using JavaScript, with an event listener handling the submission and updating of the list. The updateFeedbackList() function is used to render the current list of feedback. The UI is styled using CSS, providing a clean and responsive design that displays feedback entries as list items. The project allows users to both submit and view feedback with a simple and adaptable interface.

## Notable JavaScript Methods

### UpdateFeedbackList() method 
  is responsible for dynamically updating the displayed feedback list on the web page. It first clears any existing feedback from the list by setting the HTML      content of the list container (feedbackList) to an empty string. Then, it iterates through the feedbackArray, which holds all the submitted feedback entries.     For each entry, it creates a new <li> (list item) element, sets its text content to the feedback, and appends it to the feedback list container in the DOM

# Lessons Learned
DOM Manipulation: This project helped solidify my understanding of manipulating the DOM with JavaScript.
Event Handling: I gained a deeper understanding of event listeners and handling user input through JavaScript.
