const router = require('express').Router();
const {
  models: { Subject },
} = require('../db');
const { requireToken, isAdmin } = require('./middleware');

module.exports = router;

// GET /api/subjects/:status
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

router.post('/', async (req, res, next) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).send(subject);
  } catch (err) {
    if (!req.body.name) {
      res.status(400).send({ error: 'Topic is required' });
    } else if (!req.body.link) {
      res.status(400).send({ error: 'Link is required' });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      if (err.fields.includes('name')) {
        res.status(409).send({ error: 'Topic already exists' });
      } else if (err.fields.includes('link')) {
        res.status(409).send({ error: 'Link already exists' });
      }
    } else if (err.name === 'SequelizeValidationError') {
      if (err.errors[0].validatorKey === 'isUrl') {
        res.status(400).send({ error: 'Link is not a valid URL' });
      }
    } else {
      next(err);
    }
  }
});

// ADMIN ONLY ROUTES
// PUT /api/subjects/:subjectId
router.put('/:subjectId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const subject = await Subject.findByPk(req.params.subjectId);
    res.send(await subject.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/subjects/:subjectId
router.delete('/:subjectId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const subject = await Subject.findByPk(req.params.subjectId);
    await subject.destroy();
    res.send(subject);
  } catch (err) {
    next(err);
  }
});
