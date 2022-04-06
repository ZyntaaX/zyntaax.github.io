/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faCodeCommit,
  faAt,
  faFileLines,
  faXmark,
  faChevronLeft,
  faCircleExclamation,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faCodeCommit,
  faGithub,
  faLinkedinIn,
  faAt,
  faFileLines,
  faXmark,
  faChevronLeft,
  faCircleExclamation,
  faTriangleExclamation,
);

export default FontAwesomeIcon;
