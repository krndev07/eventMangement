var {Pool} = require('pg');
const connectionString = "postgres://postgres:kiran*852@localhost:5432/event";
const pool = new Pool({connectionString:connectionString,idleTimeoutMillis: 3000});
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
global.pool=pool;
module.exports = pool;