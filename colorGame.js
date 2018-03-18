const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

const createArr = (size) => {
  let colors = [];
  for(var i = 0; i < size; i++) {
    const r = getRandomInt(0, 256);
    const g = getRandomInt(0, 256);
    const b = getRandomInt(0, 256);
    const result = `rgb(${r}, ${g}, ${b})`;
    colors.push(result);
  }
  return colors;
}
const size = 6;
const colors = createArr(size);
const selected = colors[getRandomInt(0, size)];
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
colorDisplay.innerText = selected.toUpperCase();

squares.forEach((square, index) => {
    square.style.backgroundColor = colors[index];
    square.addEventListener('click', () => {
      const choice = square.style.backgroundColor;
      if (choice === selected) {
        alert('WIN');
      } else {
        square.style.backgroundColor = '#232323';
      }
    })
})
