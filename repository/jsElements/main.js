import { addBannerImage} from './imagebanner.js'
import { createNavbar } from './navbar.js';
import { addBackgroundImage } from './backgroundImage.js';
import { createFooter } from './footer.js';
import { openModal, closeModal } from './modalManager.js';
import { createLoginModal } from './createLoginModal.js';
import { createInscriptionModal } from './createInscriptionModal.js';

addBannerImage();
createNavbar();
addBackgroundImage();
createFooter();
openModal();
closeModal();
createLoginModal();
createInscriptionModal();



