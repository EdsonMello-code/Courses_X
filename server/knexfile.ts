import path from 'path';
// Update with your config settings.

import settingConnection from './src/config/settingConnection';

export default {
  development: {
    client: 'pg',
    connection: settingConnection,
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  },
};
