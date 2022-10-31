const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 5432),
      database: env('POSTGRES_DB', 'strapi'),
      user: env('POSTGRES_USER', 'postgres'),
      password: env('POSTGRES_PASSWORD', '0000'),
      ssl: env('DATABASE_SSL', false),
    },
    debug: false,
  },
});
