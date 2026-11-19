const EventEmitter = require('events');

const event = new EventEmitter();

// Register event
event.on('click', () => {
    console.log("Button clicked!");
});

// Trigger event
event.emit('click');