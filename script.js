'use strict';

const grid = document.querySelector('.grid');
let gridHeight = parseInt(getComputedStyle(grid).height);
let gridWidth = parseInt(getComputedStyle(grid).width);
const gridArea = gridHeight * gridWidth;
let sqSide = 16;
let sqCount = sqSide * sqSide;
let sqHeight = gridHeight / sqSide;
let sqWidth = gridWidth / sqSide;

for (let i = 1; i <= sqCount; i++) {
  const square = document.createElement('div');
  square.style.height = `${sqHeight}px`;
  square.style.width = `${sqWidth}px`;
  square.classList.add('square');
  grid.insertAdjacentElement('beforeend', square);
}
