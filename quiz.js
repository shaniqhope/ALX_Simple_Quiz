// Function to check the answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // If no answer is selected, show a message
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
