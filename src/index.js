const defaults = require('./defaults')

const normalize = require('./01-normalize')
const tagger = require('./02-tagger')
const tokenize = require('./03-tokenize')

const nlpDate = function(doc, context = {}) {
  context = Object.assign({}, defaults, context)
  //get rid of some junk
  doc = normalize(doc)
  //tag for dates more aggressively than compromise does
  doc = tagger(doc)
  //(step-4 is called from step-3)
  let results = tokenize(doc, context)
  return results
}
module.exports = nlpDate
