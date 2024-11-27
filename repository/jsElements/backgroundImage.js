export function addBackgroundImage() {

  const backgroundContainer = document.createElement('div');
  backgroundContainer.classList.add('backgroundContainer');

  const body = document.querySelector('body');
  const footer = document.querySelector('footer')

  body.insertBefore(backgroundContainer, footer);
};