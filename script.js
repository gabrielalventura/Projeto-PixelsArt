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

function createButton() {
  const button = document.createElement('button');
  const mainBoard = document.getElementById('pixel-board');
  button.innerText = 'Limpar';
  fatherOfAll.appendChild(button);
  mainBoard.before(button);
  button.id = 'clear-board';
}
createButton();

const button = document.getElementById('clear-board');

function clearMainBoard() {
  const miniBoards = document.getElementsByClassName('pixel');
  for (let index = 0; index < miniBoards.length; index += 1) {
    miniBoards[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearMainBoard);
