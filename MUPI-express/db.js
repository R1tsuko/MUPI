const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "1234567",
  host: "localhost",
  port: 5433,
  database: "mupi_db",
});

module.exports = pool;
