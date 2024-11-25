import { addBannerImage} from './imagebanner.js'
import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { createLoginModal } from './loginModal.js';
import { bindModalToLink } from './loginModal.js';

addBannerImage();
createNavbar();
createFooter();
createLoginModal();
bindModalToLink();

