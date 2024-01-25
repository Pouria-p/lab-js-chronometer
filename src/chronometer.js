class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (this.currentTime === 3) {
        clearInterval(this.intervalId);
      }
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here

    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // let str = ":";
    // let minutes = this.getMinutes();
    // let seconds = this.getSeconds();
    // console.log(minutes + str + seconds);
    // return minutes + str + seconds;
    let newValue = JSON.stringify(value);
    if (newValue.length === 1) {
      return "0" + newValue;
    }
    return newValue;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    console.log(minutes + ":" + seconds);
    return `${minutes}:${seconds}`;
  }
}
