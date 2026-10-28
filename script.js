document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chat-widget-btn');
  const chatPopup = document.getElementById('chat-popup');
  const closeChat = document.getElementById('close-chat');

  if (chatBtn && chatPopup && closeChat) {
    chatBtn.addEventListener('click', () => {
      chatPopup.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', () => {
      chatPopup.classList.add('hidden');
    });
  }
});