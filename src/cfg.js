const UPDATE_INTERVAL = process.env.UPDATE_INTERVAL || 5 * 60 * 1000;
const ERROR_INTERVAL = process.env.ERROR_INTERVAL || 60 * 1000;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  UPDATE_INTERVAL,
  ERROR_INTERVAL,
  DATABASE_URL
}