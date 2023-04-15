'use strict';

const {
  db,
  models: { User, Subject },
} = require('../server/db');

const subjectData = [
  {
    name: 'pants',
    link: 'https://jezebel.com/pants-canceled-1828581801',
    status: 'approved',
  },
  {
    name: 'saying "Merry Christmas"',
    link: 'https://www.npr.org/2018/12/21/678148112/millennials-strike-again-this-time-we-are-killing-cash-and-merry-christmas',
    status: 'approved',
  },
];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ username: 'kristin', password: '123', admin: true }),
  ]);

  const subjects = await Promise.all(
    subjectData.map((subject) => {
      return Subject.create(subject);
    })
  );

  console.log(`seeded ${users.length} users`);
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
