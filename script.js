const disc = document.getElementById('disc');

disc.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a URL)

  const textToCopy = "99chrome";

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
  alert('Succefully Copied the Chrome Discord Name')
});

// Youtube Icon
const yt = document.getElementById('yt');

yt.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a URL)

  const textToCopy = "Soon";

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
  alert('The Youtube Channel Soon Will Be Out')
});

// Mail Icon
const mail = document.getElementById('mail');

mail.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a URL)

  const textToCopy = "cnefzi05@gmail.com";

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
  alert('Succefully Copied the Chrome Email')
});
