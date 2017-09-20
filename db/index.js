const conn = require('./conn')
const seed = require('./seed')

const sync = ()=> {
  return conn.sync({ force: true })
}

module.exports = {
  sync,
  seed,
  models: {
    // model names here
  }
}
