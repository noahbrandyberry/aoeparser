const fs = require('fs');
const FireStoreParser = require('firestore-parser');
const lodash = require('lodash');
const repair = require('jsonrepair')

const input = fs.readFileSync('input', 'utf-8')
const response = JSON.parse(repair.jsonrepair(input))

let formatted = FireStoreParser(response)
formatted = formatted.filter((doc) => typeof doc === "object")
formatted = lodash.flatten(formatted)
formatted = lodash.flatten(formatted)
formatted = formatted.filter((doc) => typeof doc === "object")
formatted = lodash.flatten(formatted)
formatted = formatted.filter((doc) => doc.documentChange)
formatted = formatted.map((doc) => doc.documentChange.document.fields)

console.log(formatted)

if (!fs.existsSync('outputs')) {
  fs.mkdirSync('outputs');
}

fs.writeFile(`outputs/builds-${(new Date()).getTime()}.json`, JSON.stringify(formatted, null, 2), function(err) {
  if (err) {
      console.log(err);
  }
});