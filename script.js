'use strict';

const grid = document.querySelector('.grid');
let gridHeight = parseInt(getComputedStyle(grid).height);
let gridWidth = parseInt(getComputedStyle(grid).width);
const gridArea = gridHeight * gridWidth;

const addHover = e => {
  if (e.target.classList.contains('square')) {
    e.target.style.opacity = String(+e.target.style.opacity + 0.1);
    const c1 = Math.trunc(Math.random() * 256);
    const c2 = Math.trunc(Math.random() * 256);
    const c3 = Math.trunc(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    console.log(e.target);
  }
};
const bindHover = addHover.bind(this);

const setSquares = numSq => {
  grid.replaceChildren();
  const sqSide = numSq;
  const sqCount = sqSide * sqSide;
  const sqHeight = gridHeight / sqSide;
  const sqWidth = gridWidth / sqSide;

  for (let i = 1; i <= sqCount; i++) {
    const square = document.createElement('div');
    square.style.height = `${sqHeight}px`;
    square.style.width = `${sqWidth}px`;
    square.style.opacity = '0';
    square.classList.add('square');
    grid.insertAdjacentElement('beforeend', square);
    /*
    if (i <= sqSide) {
      square.style.borderTop = '1px black solid';
    }
    if (i % sqSide === 1) {
      square.style.borderLeft = '1px black solid';
    }
    if (i % sqSide === 0) {
      square.style.borderRight = '1px black solid';
    }
    if (i > sqCount - sqSide) {
      square.style.borderBottom = '1px black solid';
    }
    */
  }
  grid.addEventListener('mouseover', bindHover);
};
setSquares(16);

const reset = document.querySelector('button');
reset.addEventListener('click', () => {
  const num = +prompt('Enter the number of squares per side');
  if (num <= 0 || num > 100) return;
  grid.removeEventListener('mouseover', bindHover);
  setSquares(num);
});
