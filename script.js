function createMainPalette() {
  const fatherOfAll = document.getElementsByTagName('body')[0];
  const mainPalette = document.createElement('div');
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
