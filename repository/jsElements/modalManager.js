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

export function bindModalToLinks(linkSelector, modalId, overlayId) {
  const links = document.querySelectorAll(linkSelector);
  console.log(`Nombre de liens trouvés pour "${linkSelector}":`, links.length);

  links.forEach(link => {
    console.log('Lien configuré pour ouvrir la modale :', link);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const modalId = link.getAttribute('data-modal');
      console.log(`Lien cliqué. Ouverture de la modale : ${modalId}`);
      openModal(modalId, 'modalOverlayId');
    });
  });
}

export function bindModalToButton(buttonSelector, modalId, overlayId) {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(`Lien cliqué. Ouverture de la modale : ${modalId}`);
      openModal(modalId, overlayId);
    });
  };
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