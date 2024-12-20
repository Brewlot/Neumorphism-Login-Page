document.addEventListener('mousemove', (e) => {
  const container = document.querySelector('.login-container');
  const { clientX: mouseX, clientY: mouseY } = e;
  const { left, top, width, height } = container.getBoundingClientRect();
  const x = mouseX - (left + width / 2);
  const y = mouseY - (top + height / 2);

  const shadowX = -x / 20;
  const shadowY = -y / 20;

  container.style.boxShadow = `
    ${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.5)
  `;
});

function oauthLogin(provider) {
  alert(`Logging in with ${provider}`);
  // Implement actual OAuth logic here
}
