export function openModal(modalId, overlayId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById(overlayId);

  if (modal && overlay) {
    modal.style.display = "flex";
    overlay.style.display = "block";
  };
}

export function closeModal(modalId, overlayId) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById(overlayId);

  if (modal && overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
  };
}

export function switchModal(fromModalId, toModalId, overlayId) {
  closeModal(fromModalId, overlayId);
  openModal(toModalId, overlayId); 
}


export function bindModalToLinks(linkSelector, defaultModalId, overlayId) {
  const links = document.querySelectorAll(linkSelector);
  console.log(`Nombre de liens trouvés pour "${linkSelector}":`, links.length);

  links.forEach(link => {
    console.log('Lien configuré pour ouvrir la modale :', link);

    link.addEventListener("click", (event) => {
      event.preventDefault();
      // Priorité au data-modal du lien, sinon fallback sur defaultModalId
      const modalId = link.getAttribute('data-modal') || defaultModalId;
      if (modalId) {
        console.log(`Lien cliqué. Ouverture de la modale : ${modalId}`);
        openModal(modalId, overlayId);
      } else {
        console.error(`Aucune modal ID définie pour le lien :`, link);
      }
    });
  });
}


export function bindCloseModal(modalId, overlayId) {
  const closeButton = document.querySelector(`#${modalId} .close`);
  const overlay = document.getElementById(overlayId);

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      closeModal(modalId, overlayId);
    });
  };

  if (overlay) {
    overlay.addEventListener("click", () => {
      closeModal(modalId, overlayId);
    });
  };
}