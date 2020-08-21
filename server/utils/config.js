require('dotenv').config();

let { PORT, SECRET_KEY, MONGODB_URI } = process.env;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = { PORT, SECRET_KEY, MONGODB_URI };
