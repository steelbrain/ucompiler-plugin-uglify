'use babel'

export const compiler = false
export const minifier = false
export function process(contents) {
  const chunks = contents.split(/\r?\n/)
  if (chunks[chunks.length - 1] !== '') {
    chunks.push('')
  }
  return chunks.join('\n')
}
