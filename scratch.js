// var nlp = require('compromise')
var nlp = require('/home/spencer/mountain/nlp-compromise/src');
var nlpDate = require('./src');
const plugin = require('./src/plugin')


//apply plugin
nlp.plugin(plugin);

let context = {
  today: '2023-12-03'
};
nlpDate(nlp('last season'), context)
nlpDate(nlp('this season'), context)
nlpDate(nlp('next season'), context)

// const spacetime = require('spacetime')
// let d = spacetime.now()
// // console.log(d.format('nice-short'))
// d.quarter(2)
// d.startOf('quarter')
// console.log(d.format('nice-short'))
