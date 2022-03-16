const fs = require('fs');
const path = require('path');

function db() {
  const DB = fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf8');
  return JSON.parse(DB);
}
const DB = db();

module.exports = DB;
