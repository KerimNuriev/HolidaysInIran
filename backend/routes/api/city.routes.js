const router = require('express').Router();
const { City } = require('../../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const cities = await City.findAll({
        order: [['id', 'DESC']],
      });
      res.json(cities);
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { cityNameRu, cityNameEn, image, descriptionRu, descriptionEn } =
        req.body;
      const newCity = await City.create({
        cityNameRu,
        cityNameEn,
        image,
        descriptionRu,
        descriptionEn,
      });
      res.json(newCity);
    } catch (error) {
      res.json({ error: error.message });
    }
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      // удаляем задачу с заданным id
      const removedCity = await City.destroy({
        where: {
          // в req.params.id ляжет соответсвующая часть URL
          id: Number(req.params.id),
        },
      });

      if (removedCity === 0) {
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
      // достаём из БД задачу с заданным id
      const updateCity = await City.findByPk(Number(req.params.id));

      if (!updateCity) {
        res.status(404).json({ success: false, message: 'Нет такого админа' });

        return;
      }

      // меняем состояние задачи и сохраняем в БД
      if ('cityName' in req.body) updateCity.userName = req.body.cityName;
      if ('image' in req.body) updateCity.password = req.body.image;
      if ('description' in req.body) updateCity.password = req.body.description;
      await updateCity.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

module.exports = router;
