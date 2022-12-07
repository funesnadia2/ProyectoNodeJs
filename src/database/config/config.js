const globalsConstants = require('../../const/globalsConstants')
module.exports = {
  "development": {
    "username": globalsConstants.DB_USERNAME ,
    "password": globalsConstants.DB_PASSWORD,
    "database": globalsConstants.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
