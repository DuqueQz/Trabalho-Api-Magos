const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'localhost', // ou o host correto
    database: 'magos',
    password: '123456',
    port: 5433,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool: pool
};
