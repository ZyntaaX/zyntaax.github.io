// events - a super-basic Javascript (publish subscribe) pattern
// Creds to magistr4815 (StackOverflow) for the original implementation

export const EVENT_USER_CHANGED = 'user-changed';

class Event {
  constructor() {
    this.events = {};
  }

  $on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  $off(eventName, fn) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i += 1) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  $emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  }
}

export default new Event();
