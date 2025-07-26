let count = 0;

const countDisplay = document.getElementById('count');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

incBtn.onclick = () => {
  count++;
  countDisplay.innerText = count;
};

decBtn.onclick = () => {
  count--;
  countDisplay.innerText = count;
};
