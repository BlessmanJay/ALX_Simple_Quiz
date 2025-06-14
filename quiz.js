function checkAnswer() {
  // Identifying the Correct Answer:
  // Declaring a variable and assigning a value
  const correctAnswer = "4";

  // Retrieving the User's Answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  let userAnswer = "";
  if (selectedOption) {
    userAnswer = selectedOption.value;
  }

  //   Comparing the User’s Answer with the Correct Answer
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. try again!";
  }
}
//   Add an Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
