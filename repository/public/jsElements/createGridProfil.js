export function createGridProfil() {
  const gridProfil = document.createElement('div');
  gridProfil.classList.add('gridProfil');
  gridProfil.innerHTML = ``

  document.querySelector('main').appendChild(gridProfil);
}