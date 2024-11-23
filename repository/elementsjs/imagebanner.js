export function addBannerImage() {

  const bannerContainer = document.createElement('div');
  bannerContainer.classList.add('banner-container');

  const body = document.querySelector('body');
  const header = document.querySelector('header');

  body.insertBefore(bannerContainer, header);
}