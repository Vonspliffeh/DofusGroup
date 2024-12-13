import { bindModalToLinks, bindCloseModal } from "./modalManager.js";

export function createInscriptionModal() {
  const modal = document.createElement("div");
    modal.id = "accountModalId";
    modal.className = "accountModal";

    modal.innerHTML = `
    <div class="accountCreationDiv">
      <span class="close">&times;</span>
      <h2>Inscription</h2>
      <form id="accountForm" action="/inscription" method="POST">
        <label for="username">Pseudo :</label>
        <input type="text" id="username" name="username" placeholder="Entrez votre pseudo" required>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" placeholder="Entrez votre adresse" required>

        <label for="password">Mot de passe :</label>
        <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required>

        <label for="password">Mot de passe :</label>
        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmez votre mot de passe" required>
        
        <p>En validant ton inscription, tu acceptes les <a href="../htmlPages/CGU.html">CGU</a> et la <a href="../htmlPages/confidentialité.html">politique de confidentialité</a>.</p>

        <button class="boutonValider" type="submit">Valider</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  bindModalToLinks('.boutonCreation', 'accountModalId', 'modalOverlayId')
  bindCloseModal('accountModalId', 'modalOverlayId');
}