export function createConfidentialPolicy() {
  const confidentPage = document.createElement('section');
  confidentPage.innerHTML = `
  <div class="confidentDiv">
    <h1>Politique de Confidentialité de DofusGroup</h1>

      <h2>1.Collecte de l'information</h2>
        <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre pseudo et / ou votre adresse e-mail. En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, votre matériel, et la page que vous demandez.</p>

      <h2>2.Utilisation des informations</h2>
        <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
        <ul>
          <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
          <li>Fournir un contenu publicitaire personnalisé</li>
          <li>Améliorer notre site Web</li>
          <li>Améliorer le support en cas de bugs / demandes d'aide</li>
          <li>Vous contacter par e-mail</li>
        </ul>

      <h2>3.Divulgation à des tiers</h2>
        <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles. Nous pensons qu’il est nécessaire de partager des informations afin d’enquêter, de prévenir ou de prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions d’utilisation, ou quand la loi nous y contraint. Les informations non-privées, cependant, peuvent être fournies à d’autres parties pour le marketing et la publicité.</p>

        <h2>4. Protection des informations</h2>
        <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.</p>

          <h3>Est-ce que nous utilisons des cookies ?</h3>
          <p>Oui. Nos cookies améliorent l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n’est en aucune façon liée à des informations personnelles identifiables sur notre site.</p>

      <h2>5.Se désabonner</h2>
        <p>Nous utilisons l'adresse e-mail que vous fournissez pour vous envoyer des informations relatives à votre compte DofusGroup. Si à n’importe quel moment vous souhaitez vous désinscrire du site et ne plus recevoir d'e-mails, il convient d'en faire la demande par message privé à un des administrateurs ou modérateurs sur le Discord de DofusGroup.</p>

      <h2>6.Consentement</h2>
        <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p> 
  </div>
  `;
  document.querySelector('main').appendChild(confidentPage);
}

createConfidentialPolicy();