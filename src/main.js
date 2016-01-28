'use babel'

export const compiler = false
export const minifier = true

let uglify = null

export function process(contents, _, {config, state}) {
  if (uglify === null) {
    uglify = require('uglify-js')
  }
  const options = Object.assign({
    fromString: true,
    outSourceMap: 'processed.map'
  }, config.uglify)
  const processed = uglify.minify(contents, options)
  state.sourceMap = processed.map
  return processed.code.slice(0, -34)
}
