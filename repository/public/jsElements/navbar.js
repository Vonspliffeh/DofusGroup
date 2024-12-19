export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul class="navbar">
      <li><a href="index.html">Acceuil</a></li>
      <li><a href="../htmlPages/évènements.html">Évènements</a></li>
      <li><img src="../images/logoDofusGroup.png" alt="logo DofusGroup"></li>
      <li><a href="../htmlPages/communauté.html">Communauté</a></li>
      <li><a href="#" class="lienCompte" data-modal="loginModalId">Compte</a></li>
    </ul>
  `;
  document.querySelector('header').prepend(nav);
}