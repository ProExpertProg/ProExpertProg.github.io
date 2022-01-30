const sh = require('shelljs');
const upath = require('upath');

const srcPath = upath.resolve(upath.dirname(__filename), '../dist');
const destPath = upath.resolve(upath.dirname(__filename), '..');

sh.cp('-r', `${srcPath}/*`, destPath)
