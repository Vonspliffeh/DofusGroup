export function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footerDiv">
      <div class="footerColumn1">
        <h4>DofusGroup</h4>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="">Recherche de groupe</a></li>
          <li><a href="">Création de groupe</a></li>
          <li><a href="#" class="lienCompte" data-modal="loginModalId">Compte</a></li>
        </ul>
      </div>
      <div class="footerColumn2">
        <h4>Communauté</h4>
        <ul class="socialLink">
          <li><a href="">Discord</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
      <div class="footerColumn3">
        <h4>Autres liens</h4>
        <ul>
          <li><a href="">Contact</a></li>
          <li><a href="CGU.html">Conditions d'utilisation</a></li>
          <li><a href="">Politique de confidentialité</a></li>
          <li><a href="">Reporter un bug</a></li>
        </ul>
      </div>
    </div>
  `;
  document.querySelector('footer').appendChild(footer);
}
