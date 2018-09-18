const five = require('johnny-five');
const board = new five.Board();
let temperature;
let led;
let button;
let buttonPressed = false;
board.on('ready', () => {
  led = new five.Led(13);
  button = new five.Button(5);
  piezo = new five.Piezo(9);

  temperature = new five.Temperature({
   "pin": "A0",
   "controller": "TMP36"
  });
 button.on('press', () => {
  console.log('button press');
  buttonPressed = true;
   led.off();
   piezo.noTone();
 });
  temperature.on('change', ()=> {
    if (temperature.celsius >= 50
      && !piezo.isPlaying && !buttonPressed) {
        led.on();
        piezo.frequency(587, 100000); // 
    } else {
      buttonPressed = false;
      piezo.noTone();
      led.off();
    }
  });
});
