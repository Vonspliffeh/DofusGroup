import { bindModalToLinks, switchModal, bindCloseModal } from "./modalManager.js";

export function createLoginModal() {
  const modal = document.createElement("div");
    modal.id = "loginModalId";
    modal.className = "loginModal";

    modal.innerHTML = `
    <div class="loginModalContent">
      <div class='connexionDiv'>
        <span class="close">&times;</span>  
        <h2>Connexion</h2>
        <form id="loginForm" action="/submit_login" method="POST">
          <label for="email">Email :</label>
          <input type="email" id="email" name="email" placeholder="Entrez votre adresse" required>

          <label for="password">Mot de passe :</label>
          <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required>
          <a href="">Mot de passe oublié</a>

          <button class="boutonConnexion" type="submit">Se connecter</button>
        </form>
      </div>
      <div class='inscriptionDiv'>
        <h2>Inscription</h2>
        <h3>Pas de compte DofusGroup?</h3>
        <p>Rejoind nous pour profiter de l'ensemble des fonctionnalités de DofusGroup!</p>
        <button class="boutonCreation" data-modal="accountModalId" type="submit">Créer un compte</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const openAccountModalButton = modal.querySelector(".boutonCreation");
  openAccountModalButton.addEventListener('click', (event) => {
    event.preventDefault();
    switchModal('loginModalId', 'accountModalId', 'modalOverlayId');
  });

  bindModalToLinks('.lienCompte', 'loginModalId', 'modalOverlayId')
  bindCloseModal('loginModalId', 'modalOverlayId');
}