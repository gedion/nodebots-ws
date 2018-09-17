var five = require('johnny-five');
var board = new five.Board();
let motor;

board.on('ready', () => {
  motor = new five.Motor(9);
  motor.start(200);
});

board.wait(2000, ()=> {
  motor.stop();
  board.wait(1000, ()=> {
    motor.start(200);
  });
});
