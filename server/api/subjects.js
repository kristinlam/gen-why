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
