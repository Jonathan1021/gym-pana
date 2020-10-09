module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  ssl: false,
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
}