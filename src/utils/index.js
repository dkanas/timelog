export { default as api } from './api'

export const to = promise => promise.then(res => ([null, res])).catch(e => [e])
