const router = require('express').Router();
const {
  models: { Subject },
} = require('../db');
module.exports = router;

// GET /api/subjects
router.get('/:status', async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      // attributes: ['id', 'name', 'createdAt', 'updatedAt'],
      where: {
        status: req.params.status,
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
    res.status(201).send(await Subject.create(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/subjects/:subjectId
router.delete('/:subjectId', async (req, res, next) => {
  try {
    const subject = await Subject.findByPk(req.params.subjectId);
    await subject.destroy();
    res.send(subject);
  } catch (err) {
    next(err);
  }
});
