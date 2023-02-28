const router = require('express').Router();
const {
  models: { Subject },
} = require('../db');
module.exports = router;

// GET /api/subjects
router.get('/', async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      // attributes: ['id', 'name', 'createdAt', 'updatedAt'],
      where: {
        // status: 'approved',
      },
    });
    res.json(subjects);
  } catch (err) {
    next(err);
  }
});

// GET /api/subjects/:subjectId
router.get('/:subjectId', async (req, res, next) => {
  try {
    const subject = await Subject.findByPk(req.params.subjectId);
    res.json(subject);
  } catch (err) {
    next(err);
  }
});

// POST /api/subjects
router.post('/', async (req, res, next) => {
  try {
    const [subject] = await Subject.findOrCreate({
      where: { name: req.body.name },
      defaults: {
        status: 'approved',
      },
    });

    await subject.reload();

    res.json(subject);
  } catch (err) {
    next(err);
  }
});
