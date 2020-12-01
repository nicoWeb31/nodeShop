const msql = require('mysql2');

const pool = msql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '',

})

module.exports = pool.promise();