const path = require('path');
const {
  isAccess,
  readdir,
  readFile,
  mkdir,
  writeFile,
  toCame,
  successLog,
  errorLog,
} = require('../utils');

const getTemplate = async (rename, dir) => {
  try {
    const filenames = await readdir(dir);
    const contents = await Promise.all(
      filenames.map(
        async (filename) => await readFile(path.join(dir, filename), 'utf8'),
      ),
    );
    return filenames.map((filename, index) => ({
      filename: filename.replace('template', rename),
      content: contents[index]
        .replace(/Template/g, toCame(rename))
        .replace(/template/g, rename),
    }));
  } catch (e) {
    return undefined;
  }
};

module.exports = async function generate(options) {
  const {savedDir, templateDir, type, name} = options;
  try {
    const targetDir = path.join(savedDir, name);

    if (await isAccess(targetDir)) {
      errorLog(`This ${type} already exists`);
      process.exit(0);
    }

    const files = await getTemplate(name, templateDir);

    await mkdir(targetDir);
    await Promise.all(
      files.map((file) =>
        writeFile(path.join(targetDir, file.filename), file.content),
      ),
    );
    successLog(`The ${name} ${type} was created successfully`);
  } catch (e) {
    console.log(e);
  }
};
