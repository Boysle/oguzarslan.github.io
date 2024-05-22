const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mousemove', (event) => {
    const buttonRect = button.getBoundingClientRect();
    const xPos = event.clientX - buttonRect.left;
    const yPos = event.clientY - buttonRect.top;

    const xRotation = (yPos / buttonRect.height) * 30; // Calculate X rotation
    const yRotation = (xPos / buttonRect.width) * -30;  // Calculate Y rotation (negative for left)

    button.style.transform = `perspective(1000px) rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
  });
});