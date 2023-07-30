document.getElementById('sendEmailButton').addEventListener('click', () => {
  const recipient = document.getElementById('recipient').value;
  if (!recipient) {
    alert('Please enter a valid email address.');
    return;
  }

  const subject = "Quiz Results";
  const body = "You scored 8 out of 10 on the quiz. Well done!"; // just a dummy result

  sendQuizResults(recipient, subject, body);
});

function sendQuizResults(recipient, subject, body) {
  const emailData = {
    recipient,
    subject,
    body
  };

  fetch('/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      return response.text(); // if the server sends a response message upon success
    } else {
      throw new Error('Failed to send email');
    }
  })
  .then(message => {
    alert(message); // Display the server response message to the user
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while sending the email. Please try again later.');
  });
}