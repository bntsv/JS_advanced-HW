const devEnv = 1;

function loggerFactory(name) {
    var obj = {};
    obj.name = name;
    obj.smartLog = function smartLog() {
        if (devEnv == true) {
            console.log(`I'm on DEV!`);
            // outputs nothing???
        }
    }
    return obj;
};

var obj1 = loggerFactory('obj1');

obj1.smartLog();

/* ------------------------- instantiate smartLogger() ------------------------- */
/* if you've choose to implement it with "Constructor", then uncomment next line */
//const logger = new smartLogger();

/* if you've choose to implement it with "Factory", then uncoment next line      */
// const logger = smartLogger();
/* ----------------------------------------------------------------------------- */


// should print '[dev log]:....' if devEnv === 1
// should print nothing if devEnv === 0
// logger.log('msg');

function smartLogger() {
    var obj = {};
    obj.log = function smartLog(m) {
        if (devEnv === 1) {
            console.log(`[dev log]: ${m}`);
        }else{
            console.log(` `);
        }
    }
    return obj;
};

const logger = smartLogger();

logger.log('msg');