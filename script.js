const fatherOfAll = document.getElementsByTagName('body')[0];
const mainPalette = document.createElement('div');

// Trecho de código retirado do site https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript

function generateHexadecimalColor() {
  return '#' + parseInt(Math.random() * 0xFFFFFF)
    .toString(16)
    .padStart(6, '0');
}
// Fim de trecho de código retirado do site https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript

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
  // purple.style.backgroundColor = generateHexadecimalColor();

  const lilac = purple.nextElementSibling;
  lilac.style.backgroundColor = '#D291BC';
  lilac.id = 'lilac';
  // lilac.style.backgroundColor = generateHexadecimalColor();

  const violet = lilac.nextElementSibling;
  violet.style.backgroundColor = '#E0BBE4';
  violet.id = 'violet';
  // violet.style.backgroundColor = generateHexadecimalColor();
}
fillThePalettes();

function createMainBoard(individual) {
  const mainBoard = document.createElement('div');
  fatherOfAll.appendChild(mainBoard);
  mainBoard.id = 'pixel-board';
  mainBoard.style.width = `${((individual * 40) + (individual * 2))} px`;
  mainBoard.style.height = `${((individual * 40) + (individual * 2))} px`;
  function createIndividualPixels() {
    for (let index = 0; index < (individual * individual); index += 1) {
      const individualPixels = document.createElement('div');
      mainBoard.appendChild(individualPixels);
      individualPixels.classList = 'pixel';
      individualPixels.style.width = '40px';
      individualPixels.style.height = '40px';
      individualPixels.style.backgroundColor = 'white';
    }
  }
  createIndividualPixels();
}
createMainBoard(5);

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
  choiceBoard.setAttribute('type', 'number');
  choiceBoard.setAttribute('placeholder', 'Change the board size');
  choiceBoard.setAttribute('min', '1');
  button.after(choiceBoard);
  function createVQV() {
    const buttonVQV = document.createElement('button');
    fatherOfAll.appendChild(buttonVQV);
    buttonVQV.id = 'generate-board';
    buttonVQV.innerText = 'VQV';
    choiceBoard.after(buttonVQV);
  }
  createVQV();
}
createInput();

const choiceBoard = document.getElementById('board-size');
const buttonVQV = document.getElementById('generate-board');
function addBoard() {
  const newBoard = choiceBoard.value;
  const boardToErase = mainBoard;
  if (newBoard <= 0 || newBoard === '') {
    alert('Board inválido!');
  } else if (newBoard < 5) {
    boardToErase.remove();
    createMainBoard(5);
  } else if (newBoard > 50) {
    boardToErase.remove();
    createMainBoard(50);
  } else {
    boardToErase.remove();
    createMainBoard(newBoard);
  }
}

buttonVQV.addEventListener('click', addBoard);
