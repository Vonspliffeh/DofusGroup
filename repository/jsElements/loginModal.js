export function createLoginModal() {
  const modal = document.createElement("div");
  modal.id = "login-modal"
  modal.className = "modal"

  modal.innerHTML = `
    <div class="loginModalContent">
      <div class='connexionDiv'>
      <span class="close">&times;</span>  
        <h2>Connexion</h2>
        <form id="login-form" action="/submit_login" method="POST">
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
        <button class="boutonCreation" type="submit">Créer un compte</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModalButton = modal.querySelector(".close");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

export function bindModalToLink() {
  const loginLink = document.getElementById("login-link");

  if (loginLink) {
    loginLink.addEventListener("click", () => {

      const modal = document.getElementById("login-modal");
      modal.style.display = "flex";
    });
  }
}