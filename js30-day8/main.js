const
  canvas = document.querySelector('#draw'),
  ctx = canvas.getContext('2d');
let
  isDrawing = false,
  lastX = 0,
  lastY = 0,
  hue = 0,
  direction = true;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

function draw(e) {
  if(!isDrawing) return;
  ctx.moveTo(lastX, lastY);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidt = hue;
  ctx.beginPath();
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  (hue > 360) ? hue = 0 : hue++;
  (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) ? direction = !direction : direction;
  (direction) ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
