'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = process;
const compiler = exports.compiler = false;
const minifier = exports.minifier = false;
function process(contents) {
  const chunks = contents.split(/\r?\n/);
  if (chunks[chunks.length - 1] !== '') {
    chunks.push('');
  }
  return chunks.join('\n');
}