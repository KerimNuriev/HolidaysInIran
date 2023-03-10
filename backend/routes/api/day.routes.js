const router = require('express').Router();
const { Day } = require('../../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const days = await Day.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          done: true,
        },
      });
      res.json(days);
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { tourId, image, description, shortDescription } = req.body;

      if (
        tourId &&
        image &&
        description &&
        shortDescription &&
        req.session.adminId
      ) {
        const newDay = await Day.create({
          tourId,
          image,
          description,
          shortDescription,
        });
        const { admin } = res.locals;
        if (newDay) {
          res.status(201).json(newDay);
        } else {
          res.status(404).json({ error: 'такой день уже существует' });
        }
      } else {
        res.status(404).json({ error: 'ты кого хочешь обмануть)))))' });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const removedCity = await Day.destroy({
        where: {
          id: Number(req.params.id),
        },
      });

      if (removedDay === 0) {
        res.status(404).json({ success: false, message: 'Нет такого города' });
      } else {
        res.json({ success: true });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const updateAdmin = await Day.findByPk(Number(req.params.id));

      if (!updateAdmin || updateAdmin.id !== req.session.adminId) {
        res.status(404).json({ success: false, message: 'Нет такого админа' });

        return;
      }

      if ('userName' in req.body) updateAdmin.userName = req.body.userName;
      if ('password' in req.body) updateAdmin.password = req.body.password;
      await updateAdmin.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

module.exports = router;
