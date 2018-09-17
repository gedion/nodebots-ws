var five = require('johnny-five');
var board = new five.Board();
board.on('ready', () => {
  let led = new five.Led(9);
  let button = new five.Button(5);
  button.on('press', () => {
    led.toggle();
  });
});
