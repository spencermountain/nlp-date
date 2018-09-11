const logicParse = require('./01-logic')

//
const tokenize = function(doc, context) {
  let results = []
  //this part is handled in compromise
  doc.debug()
  let dates = doc.dates()
  dates.forEach((ts) => {
    let obj = logicParse(ts, context)
    if (obj) {
      obj.text = ts.out('text')
      obj.normal = ts.out('normal')
      console.log(obj.start.format('eee dd MMM yyyy, h:mma') + '   →   ' + obj.end.format('eee dd MMM yyyy, h:mma') + '\n')
      // obj.offsets = ts.out('offset')
      results.push(obj)
    }
  })
  return results
}
module.exports = tokenize
