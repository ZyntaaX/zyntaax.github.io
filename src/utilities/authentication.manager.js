import { getAuth, signInWithEmailAndPassword, signOut } from '@/firebase';

// import Eventbus, { EVENT_USER_CHANGED } from '@/utilities/eventbus';
import Event, { EVENT_USER_CHANGED } from '@/utilities/event';

const auth = getAuth();

class User {
  constructor() {
    this.user = null;
    this.isLoggedIn = false;

    this.init();
  }

  init() {
    this.checkForStoredUser();
  }

  checkForStoredUser() {
    const tempUser = window.localStorage.getItem('user');
    if (tempUser) {
      this.user = JSON.parse(tempUser);
      console.log('User found in local storage');
      this.isLoggedIn = true;

      this.emitUserChange();
    }
  }

  emitUserChange() {
    Event.$emit(EVENT_USER_CHANGED, this);
  }

  async login(email, password) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          this.isLoggedIn = true;
          this.user = user;
          window.localStorage.setItem('user', JSON.stringify(user));

          this.emitUserChange();

          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async signOut() {
    let success = false;
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          this.isLoggedIn = false;
          this.user = null;
          success = true;
          window.localStorage.removeItem('user');

          this.emitUserChange();

          resolve(success);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new User();
