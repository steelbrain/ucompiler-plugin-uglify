'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = process;
const compiler = exports.compiler = false;
const minifier = exports.minifier = true;

let uglify = null;

function process(contents, _, _ref) {
  let config = _ref.config;
  let state = _ref.state;

  if (uglify === null) {
    uglify = require('uglify-js');
  }
  const options = Object.assign({
    fromString: true,
    outSourceMap: 'processed.map'
  }, config.uglify);
  const processed = uglify.minify(contents, options);
  state.sourceMap = processed.map;
  return processed.code.slice(0, -34);
}