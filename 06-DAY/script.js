const date = new Date();

const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear();

const container = document.querySelector('.container');

container.querySelector('.month').textContent = month;
container.querySelector('.day').textContent = day;
container.querySelector('.years').textContent = year;