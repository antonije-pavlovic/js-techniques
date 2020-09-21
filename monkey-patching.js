// Save the original console.log() method
const log = console.log;
console.log = function() {
    // Invoke the original method with an additional parameter
    log.apply(this, [(new Date()).toString()].concat(arguments));
};

console.log('Logging'); // Mon Sep 21 2020 21:06:33 GMT+0200 (Central European Summer Time) [Arguments] { '0': 'Logging' }
