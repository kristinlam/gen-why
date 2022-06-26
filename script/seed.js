'use strict';

const {
  db,
  models: { User, Subject, Article },
} = require('../server/db');

const subjectData = [
  { name: 'napkins', status: 'approved' },
  { name: 'diamonds', status: 'approved' },
  { name: 'pants', status: 'approved' },
  { name: 'saying "Merry Christmas"', status: 'approved' },
  { name: 'honeymoons', status: 'approved' },
];

const articleData = [
  {
    title:
      "Millennials Strike Again: This Time We Are Killing Cash And 'Merry Christmas'",
    link: 'https://www.npr.org/2018/12/21/678148112/millennials-strike-again-this-time-we-are-killing-cash-and-merry-christmas',
    source: 'NPR',
  },
  {
    title: 'Pants Canceled',
    link: 'https://jezebel.com/pants-canceled-1828581801',
    source: 'Jezebel',
  },
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Create Users
  const users = await Promise.all([
    User.create({ username: 'kristin', password: '123', admin: true }),
  ]);

  // Create Subjects
  const subjects = await Promise.all(
    subjectData.map((subject) => {
      return Subject.create(subject);
    })
  );

  // Create Articles
  const articles = await Promise.all(
    articleData.map((article) => {
      return Article.create(article);
    })
  );

  // Set articles to subjects
  const [napkins, diamonds, pants, christmas, honeymoons] = subjects;
  const [christmasArticle, pantsArticle] = articles;
  await christmas.addArticle(christmasArticle);
  await pants.addArticle(pantsArticle);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${subjects.length} subjects`);
  console.log(`seeded ${articles.length} articles`);

  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  // };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
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

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
