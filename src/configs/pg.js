const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'db-horus',
    database: 'magos',
    password: '123456',
    port: 5432,
});

module.exports = pool;
