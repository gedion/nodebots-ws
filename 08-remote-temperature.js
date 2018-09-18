const five = require('johnny-five');
const dnode = require('dnode');
const board = new five.Board();
let temperature;
board.on('ready', () => {
  temperature = new five.Temperature({
   "pin": "A0",
   "controller": "TMP36"
  });
});

const server = dnode({
  getTemperature : (done) => {
    done(temperature.celsius);
  }
});

server.listen(1337);
