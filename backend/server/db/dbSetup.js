import pool from './pool';

pool.on('connect', () => {
  console.log('connected to the db');
});

const createRecommendationTable = () => {
	const userCreateQuery = `CREATE TABLE if not exist recommendations1
(
    r_name text,
    intensity text,
    benefit_description text,
    url text
)`;

	pool.query(userCreateQuery)
    .then((res) => {
      console.log(`create: ${res}`);
      pool.end();
    })
    .catch((err) => {
      console.log(`create err: ${err}`);
      pool.end();
    });
};

/**
 * Create All Tables
 */
const dropRecommendationsTable = () => {
  const usersDropQuery = 'DROP TABLE IF EXISTS recommendations1';
  pool.query(usersDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop All Tables
 */
const createAllTables = () => {
  createRecommendationTable();
};

/**
 * Drop All Tables
 */
const dropAllTables = () => {
  dropRecommendationsTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

export {
  createAllTables,
  dropAllTables,
};

require('make-runnable');