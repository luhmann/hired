import { observable } from 'mobx';

class TimerStore {
  @observable timer = 0;

  constructor() {
    setInterval(
      () => {
        this.timer += 1;
      },
      1000
    );
  }

  resetTimer() {
    this.timer = 0;
  }

  setTimer(value: number) {
    this.timer = value;
  }
}

// Generate singleton instance
const timerStore = new TimerStore();

// export the singleton as default
export default timerStore;

// export the class aswell eg for use in unit tests
export { TimerStore };
