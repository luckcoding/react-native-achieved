const path = require('path');
const {readFile, writeFile, successLog} = require('./utils');

const iconIndexFile = path.resolve(
  __dirname,
  '../app/components/icon/index.tsx',
);
const namesFile = path.resolve(__dirname, '../app/components/icon/names.ts');

(async function () {
  try {
    const iconIndexFileString = await readFile(iconIndexFile, 'utf8');
    const names = String(iconIndexFileString).match(/(?<=case\s')\w+(?=')/g);
    const namesFileString = `export const IconNames = ${JSON.stringify(
      names,
    )}\n`;
    await writeFile(namesFile, namesFileString.replace(/,/g, ', '));
    successLog('Done!');
  } catch (err) {
    console.error(err);
  }
})();
