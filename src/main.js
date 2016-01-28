'use babel'

import {dirname} from 'path'

export const compiler = false
export const minifier = true

let uglify = null

export function process(contents, {fileName, absolutePath}, {config, state}) {
  if (uglify === null) {
    uglify = require('uglify-js')
  }
  const options = Object.assign({
    fromString: true,
    outSourceMap: 'something'
  }, config.uglify)
  const processed = uglify.minify(contents, options)
  state.sourceMap = JSON.parse(processed.map)
  state.sourceMap = {
    version: state.sourceMap.version,
    sources: [fileName],
    file: fileName,
    mappings: state.sourceMap.mappings,
    names: state.sourceMap.names,
    sourceRoot: dirname(absolutePath),
    sourcesContent: [contents]
  }
  return processed.code.slice(0, -30)
}
