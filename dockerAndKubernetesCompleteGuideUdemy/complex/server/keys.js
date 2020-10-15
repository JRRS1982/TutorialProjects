// list of environment variables that need to be given to the container
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.PGUSER, // postgres user that w are going to log in with
  pgHost: process.env.PGHOST, // name of db we are going ot connect to inside postgres
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT
};
