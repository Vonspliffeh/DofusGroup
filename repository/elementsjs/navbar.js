export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul class="navbar">
      <li><a href="index.html">Acceuil</a></li>
      <li><a href="pageshtml/groupe.html">Groupe</a></li>
      <li><img class="logoNavbar" src="images/logoDofus.webp" alt="logo Dofus"></li>
      <li><a href="pageshtml/communauté.html">Communauté</a></li>
      <li><a href="pageshtml/compte.html">Compte</a></li>
    </ul>
  `;
  document.querySelector('header').prepend(nav);
}