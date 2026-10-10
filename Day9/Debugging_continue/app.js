
const logger=require("./logger");
const debug=require("debug");

const debugApp=debug('app:main');

function add(a, b){
    debugApp('add() function started');
    debugApp("values: a=%d b=%d", a, b);

    const result=a + b;
    logger.info("Addition completed");
    debugApp("Result calculated: %d", result);

    return result;
}

logger.info("Application started");

const result=add(10, 30);
console.log("Final result: ", result);
logger.info("Application finished");

