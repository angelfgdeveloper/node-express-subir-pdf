const Server = require('./server');
const User = require('./user');
const Personal = require('./personal');
const Academic = require('./academic');
const Posgraduate = require('./posgraduate');
const Work = require('./work');

module.exports = {
  ...Server,
  User,
  Personal,
  Academic,
  Posgraduate,
  Work
}