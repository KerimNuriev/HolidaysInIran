const router = require('express').Router();
const { Photo } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const days = await Photo.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json(days);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
