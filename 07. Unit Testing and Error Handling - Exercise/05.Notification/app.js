function notify(message) {
  
  let divNotificationElement = document.getElementById('notification');
  divNotificationElement.textContent = message;
  divNotificationElement.style.display = 'block';
  divNotificationElement.addEventListener('click', hideDivMessage);

  function hideDivMessage(e) {
    
    e.target.style.display = 'none';
  }
}