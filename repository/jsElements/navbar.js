export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul class="navbar">
      <li><a href="index.html">Acceuil</a></li>
      <li><a href="../htmlPages/groupe.html">Groupe</a></li>
      <li><img class="logoNavbar" src="../images/logoDofus.webp" alt="logo Dofus"></li>
      <li><a href="../htmlPages/communauté.html">Communauté</a></li>
      <li><a href="#" id="login-link">Compte</a></li>
    </ul>
  `;
  document.querySelector('header').prepend(nav);
}