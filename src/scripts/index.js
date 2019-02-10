const canvas = document.querySelector('.main-canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = event => {
  if (!isDrawing) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  lastX = event.offsetX;
  lastY = event.offsetY;
};

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', event => {
  lastX = event.offsetX;
  lastY = event.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});
