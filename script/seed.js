'use strict';

const {
  db,
  models: { User, Subject },
} = require('../server/db');

const subjectData = require('./data.js');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const subjects = await Promise.all(
    subjectData.map((subject) => {
      return Subject.create(subject);
    })
  );

  console.log(`seeded ${subjects.length} subjects`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
