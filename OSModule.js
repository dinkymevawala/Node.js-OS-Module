var os = require('os');
console.log("OS CPU architecture: " + os.arch());
console.log("Free memory of the system: " + Math.round(((os.freemem() / 1024 / 1024 / 1024) * 100)) / 100 + " GB");
