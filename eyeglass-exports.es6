'use strict'

const src = require('./index.es6')

module.exports = (eyeglass, sass) => {
  return {
    sassDir: src.includePaths[0]
  }
}
