function createEmail() {
  const subject = "I am A druid, who are you? Take the Quiz:";
  const pageLink = "https://devonmcguinness.com/";
  const text = "I am a Druid! Find out which app development platform fits your personality & skillset! #DataStorytelling";
  const quizURL = "www.quizURL.com";

  // Encode the subject and body parameters for the mailto link
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(`${text}\n\nTake the quiz: ${quizURL}`);

  // Create the mailto link
  const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

  // Open the link in a new tab or window
  window.open(mailtoLink, "_blank");
}

// Call the function to create the email
createEmail();