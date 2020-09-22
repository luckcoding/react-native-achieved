/* eslint-disable no-octal-escape */
const fs = require('fs');
const util = require('util');

// promisify
const readFile = util.promisify(fs.readFile).bind(fs);
const writeFile = util.promisify(fs.writeFile).bind(fs);
const mkdir = util.promisify(fs.mkdir).bind(fs);
const readdir = util.promisify(fs.readdir).bind(fs);
const access = util.promisify(fs.access).bind(fs);

// console with color
const successLog = (msg) => console.log('\x1b[32m' + msg + '\033[0m');
const errorLog = (msg) => console.log('\x1b[31m' + msg + '\033[0m');

// has dir ?
const isAccess = async (dir) => {
  try {
    await access(dir);
    return true;
  } catch (e) {
    return false;
  }
};

function toCame(words) {
  return words
    .split('-')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.substr(1)}`)
    .join('');
}

module.exports = {
  readFile,
  writeFile,
  mkdir,
  readdir,
  access,
  successLog,
  errorLog,
  isAccess,
  toCame,
};
