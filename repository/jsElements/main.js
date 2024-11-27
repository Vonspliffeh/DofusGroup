import { addBannerImage} from './imagebanner.js'
import { createNavbar } from './navbar.js';
import { addBackgroundImage } from './backgroundImage.js';
import { createFooter } from './footer.js';
import { createLoginModal } from './loginModal.js';
import { bindModalToLink } from './loginModal.js';

addBannerImage();
createNavbar();
addBackgroundImage();
createFooter();
createLoginModal();
bindModalToLink();

