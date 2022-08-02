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
        individualPalettes.classList = 'color selection';
      }
    }
  }
  createIndividualPalettes();
}
createMainPalette();
