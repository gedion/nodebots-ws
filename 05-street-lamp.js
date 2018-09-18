let five = require("johnny-five");
let photoresistor;
let NIGHT_TIME_TH = 600;

board = new five.Board();

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  let led = new five.Led(9);

  // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    let nightTimeThreshold = this.value;
    if(this.value > NIGHT_TIME_TH) {
      led.on();
    } else {
      led.off();
    }
  });
});

