const path = require('path');
const generate = require('./generate');
const {errorLog} = require('../utils');

const [type, name] = process.argv.slice(2);

(function () {
  if (!name || !type) {
    errorLog('missing target name or type!');
    process.exit(0);
  }
  const options = {type, name};
  if (type === 'component') {
    generate({
      savedDir: path.resolve(__dirname, '../../app/components'),
      templateDir: path.resolve(__dirname, './component'),
      ...options,
    });
  } else if (type === 'screen') {
    generate({
      savedDir: path.resolve(__dirname, '../../app/screens'),
      templateDir: path.resolve(__dirname, './screen'),
      ...options,
    });
  } else {
    errorLog('no corresponding operation!');
    process.exit(0);
  }
})();
