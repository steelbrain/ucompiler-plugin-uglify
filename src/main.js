'use babel'

import {transform} from 'babel-core'

export const compiler = false
export const minifier = false
export function process({contents, file, config, state}) {
  const beginning = contents.substr(0, 11)
  if (beginning !== '"use babel"' && beginning !== "'use babel'") {
    return {contents, sourceMap: null}
  }
  config.babel = config.babel || {}

  const transpiled = transform(contents, Object.assign({}, config.babel, {
    filename: file,
    filenameRelative: file,
    sourceRoot: config.root,
    sourceMaps: true
  }))
  state.sourceMap = transpiled.map.toString()
  return transpiled.code
}
