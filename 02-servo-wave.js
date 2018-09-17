var five = require('johnny-five');
var board = new five.Board();
let servo;
board.on('ready', () => {
  servo = new five.Servo(9);
  servo.sweep();
});
board.wait(3000, () => {
  servo.stop();
  servo.center();
});
