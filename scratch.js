// var nlp = require('compromise')
var nlp = require('/home/spencer/mountain/nlp-compromise/src');
var nlpDate = require('./src');
const plugin = require('./src/plugin')


//apply plugin
nlp.plugin(plugin);

let context = {
  now: '2018-09-10T17:28:32.140Z',
};

let doc = nlp('a week before this summer at 4pm GST')
console.log(nlpDate(doc, context)[0])
