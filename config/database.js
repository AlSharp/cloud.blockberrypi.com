const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres'),
      port: env('DATABASE_PORT', 5432),
      database: env('POSTGRES_DB', 'strapi'),
      user: env('POSTGRES_USER', 'postgres'),
      password: env('POSTGRES_PASSWORD', 'postgres'),
      ssl: env('DATABASE_SSL', false),
    },
    debug: false,
  },
});
