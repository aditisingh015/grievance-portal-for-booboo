document.getElementById('grievanceForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from reloading page

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value.trim();

  if (message === '') {
    alert('Please write something before sending!');
    return;
  }

  // For now, just show a thank you message
  alert(`Thank you, ${name.split('/')[0].trim()}! Your message has been received.`);

  // Clear the message box
  document.getElementById('message').value = '';

  // TODO: Add code here to send the message to Excel via Power Automate webhook
});
