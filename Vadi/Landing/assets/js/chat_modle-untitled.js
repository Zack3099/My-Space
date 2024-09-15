function sendMessage() {
    const message = document.getElementById('chat-input').value;
    if (message.trim() !== '') {
      const chatMessages = document.getElementById('chat-messages');
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      document.getElementById('chat-input').value = '';
    }
  }