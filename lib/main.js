'use strict';
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minifier = exports.compiler = undefined;
exports.process = process;

var _babelCore = require('babel-core');

const compiler = exports.compiler = false;
const minifier = exports.minifier = false;
function process(_ref) {
  let contents = _ref.contents;
  let file = _ref.file;
  let config = _ref.config;
  let state = _ref.state;

  const beginning = contents.substr(0, 11);
  if (beginning !== '"use babel"' && beginning !== "'use babel'") {
    return { contents: contents, sourceMap: null };
  }
  config.babel = config.babel || {};

  const transpiled = (0, _babelCore.transform)(contents, Object.assign({}, config.babel, {
    filename: file,
    filenameRelative: file,
    sourceRoot: config.root,
    sourceMaps: true
  }));
  state.sourceMap = transpiled.map.toString();
  return transpiled.code;
}

