module.exports = {
  database: process.env.DB_NAME || 'gym-pana',
  username: process.env.DB_USER || 'jvega@zeus-db',
  password: process.env.DB_PASS || '$vC0RL2s!U8?',
  host: process.env.DB_HOST || 'zeus-db.mysql.database.azure.com',
  dialect: 'mysql',
  ssl: false,
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
}