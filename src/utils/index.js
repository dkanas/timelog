export { default as api } from './api'

export const to = promise => promise.then(res => ([null, res])).catch(e => [e])

export const logError = error => process.env.NODE_ENV === 'development' && console.error(error)
