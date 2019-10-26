const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvas_4x4 = document.getElementById('canvas_4x4');
const canvas_32x32 = document.getElementById('canvas_32x32');
const canvas_img = document.getElementById('canvas_img');

const canvas_current = document.querySelectorAll('.canvas_current');

const img = document.getElementById('img');



function draw_4x4() {
  const size = 128;
  for (let i = 0; i < matrix_4x4.length; i++) {
    for (let j = 0; j < matrix_4x4.length; j++) {
      ctx.fillStyle = '#' + matrix_4x4[i][j];
      ctx.fillRect( (i * size), (j * size), size, size );
    }
  }
}

canvas_4x4.addEventListener('click', function() {
  draw_4x4();
  canvas_current.forEach(item => item.classList.remove('active'));
  canvas_current[0].classList.add('active');
});



const matrix_4x4 = [
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["FFEB3B", "FFC107","FFC107","FFEB3B"],
  ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];
