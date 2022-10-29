const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USER', 'postgres'),
      password: env('DATABASE_PASSWORD', '0000'),
      ssl: env('DATABASE_SSL', false),
    },
    debug: false,
  },
});
