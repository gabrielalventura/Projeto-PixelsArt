const fatherOfAll = document.getElementsByTagName('body')[0];
const mainPalette = document.createElement('div');

function createMainPalette() {
  fatherOfAll.appendChild(mainPalette);
  mainPalette.id = 'color-palette';

  function createIndividualPalettes() {
    for (let index = 0; index < 4; index += 1) {
      const individualPalettes = document.createElement('div');
      mainPalette.appendChild(individualPalettes);
      individualPalettes.className = 'color';
      individualPalettes.style.border = '1px solid black';
      if (index === 0) {
        individualPalettes.id = 'black';
        individualPalettes.style.backgroundColor = 'black';
        individualPalettes.classList.add('selected');
      }
    }
  }
  createIndividualPalettes();
}
createMainPalette();

function fillThePalettes() {
  const black = document.getElementById('black');

  const purple = black.nextElementSibling;
  purple.style.backgroundColor = 'purple';
  purple.id = 'purple';

  const lilac = purple.nextElementSibling;
  lilac.style.backgroundColor = '#D291BC';
  lilac.id = 'lilac';

  const violet = lilac.nextElementSibling;
  violet.style.backgroundColor = '#E0BBE4';
  violet.id = 'violet';
}
fillThePalettes();

function createMainBoard() {
  const mainBoard = document.createElement('div');
  fatherOfAll.appendChild(mainBoard);
  mainBoard.id = 'pixel-board';
  function createIndividualPixels() {
    for (let index = 0; index < 25; index += 1) {
      const individualPixels = document.createElement('div');
      mainBoard.appendChild(individualPixels);
      individualPixels.classList = 'pixel';
    }
  }
  createIndividualPixels();
}
createMainBoard();

function changeClass(palette) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  palette.target.classList.add('selected');
}
mainPalette.addEventListener('click', changeClass);

const mainBoard = document.getElementById('pixel-board');

function fillTheBoard(colorEvent) {
  const newColor = document.querySelector('.selected');
  const event = colorEvent.target;
  if (event.className === 'pixel') {
    event.style.backgroundColor = newColor.style.backgroundColor;
  }
}
mainBoard.addEventListener('click', fillTheBoard);

function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  fatherOfAll.appendChild(button);
  mainBoard.before(button);
  button.id = 'clear-board';
}
createButton();

const button = document.getElementById('clear-board');

function clearMainBoard() {
  const divToClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < divToClear.length; index += 1) {
    if (divToClear[index].style.backgroundColor !== 'white') {
      divToClear[index].style.backgroundColor = 'white';
    }
  }
}
button.addEventListener('click', clearMainBoard);

function createInput() {
  const choiceBoard = document.createElement('input');
  fatherOfAll.appendChild(choiceBoard);
  choiceBoard.id = 'board-size';
}
createInput();

const choiceBoard = document.getElementById('board-size');

// function createVQV() {
//   const buttonVQV = document.createElement('button');
//   choiceBoard.appendChild(buttonVQV);
//   buttonVQV.id = 'generate-board';
//   button.innerText = 'VQV';
//   choiceBoard.nextElementSibling(buttonVQV);
// }
// createVQV();
