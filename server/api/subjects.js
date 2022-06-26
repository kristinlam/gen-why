const router = require('express').Router();
const {
  models: { Subject, Article },
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
    const subject = await Subject.findByPk(req.params.subjectId, {
      include: Article,
    });
    res.json(subject);
  } catch (err) {
    next(err);
  }
});
