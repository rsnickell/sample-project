const bunyan = require('node-bunyan');
function createLogger(name:string): any {
  const logger = bunyan.createLogger({name});
  return logger;
}

export { createLogger };