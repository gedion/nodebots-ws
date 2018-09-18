const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
  const sensor = new five.Sensor("A2");
  const servo = new five.Servo(9);
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
    let rotate = five.Fn.map(this.value, 0, 1023, 0, 180);
    servo.to(rotate);
  });
});
