class Chronometer {
  constructor() {
    this.currentTime= 0;
    this.currentTime2= 0;
    this.intervalId= null;
    this.internvalId2 = null;
  }

  start(printTimeCallback, printCentiseconds) {
    // the sintax:
    // const intervalId = setInterval(callbackFunction, delay);
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      };
    }, 1000);

    this.intervalId2 = setInterval(() => {
      this.currentTime2++;
      if (this.currentTime2 === 99) {
        this.currentTime2 = 0;
      }
      if (printCentiseconds) {
        printCentiseconds();
      };
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }

  getSeconds() {
    let seconds = (this.currentTime % 60);
    return seconds
  }
  getCentiseconds () {
    return this.currentTime2;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0;
   this.currentTime2 = 0;
  }

  split() {
   let a = this.computeTwoDigitNumber(this.getMinutes());
   let b = this.computeTwoDigitNumber(this.getSeconds());
   let c = this.computeTwoDigitNumber(this.currentTime2);
   return a + ":" + b + ":" + `${c}`;
  }

}
