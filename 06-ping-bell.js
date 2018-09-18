const five = require("johnny-five");
const board = new five.Board();
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

let piezo;
board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  piezo = new five.Piezo(8);

});

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  // Plays the same song with a string representation
  piezo.play({
    // song is composed by a string of notes
    // a default beat is set, and the default octave is used
    // any invalid note is read as "no note"
    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
    beats: 1 / 4,
    tempo: 100
  });
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(1337);
