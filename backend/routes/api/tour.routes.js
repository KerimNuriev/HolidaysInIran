const router = require('express').Router();
const { Tour, Schedule, Day } = require('../../db/models');

router.route('/').get(async (req, res) => {
  try {
    const tours = await Tour.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Schedule,
          order: [['startDay'], 'ASC'],
        },
        {
          order: [['id'], 'DESC'],
          model: Day,
        },
      ],
    });
    res.json(tours);
  } catch (error) {
    res.json({ error: error.message });
  }
});
//   .post(async (req, res) => {
//     try {
//       const { cityName, image, description } = req.body;

//       if (cityName && image && description && req.session.adminId) {
//         const newCity = await City.create({
//           cityName,
//           image,
//           description,
//         });
//         const { admin } = res.locals;
//         if (newCity) {
//           res.status(201).json(newCity);
//         } else {
//           res.status(404).json({ error: 'такой город уже существует' });
//         }
//       } else {
//         res.status(404).json({ error: 'ты кого хочешь обмануть)))))' });
//       }
//     } catch (error) {
//       res.json({ error: error.message });
//     }
//   });

// router
// .route('/:id')
// .get(async (req, res) => {
//   try {
//     const { id } = req.params;
//     const tour = await Tour.findAll({
//       where: { id },
//       order: [['createdAt', 'DESC']],
//       include: [Schedule, Day],
//     });
//     res.json(tour);
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// });
//   .delete(async (req, res) => {
//     try {
//       // удаляем задачу с заданным id
//       const removedCity = await City.destroy({
//         where: {
//           // в req.params.id ляжет соответсвующая часть URL
//           id: Number(req.params.id),
//         },
//       });

//       if (removedCity === 0) {
//         res.status(404).json({ success: false, message: 'Нет такого города' });
//       } else {
//         res.json({ success: true });
//       }
//     } catch (error) {
//       res.json({ error: error.message });
//     }
//   })
//   .put(async (req, res) => {
//     try {
//       // достаём из БД задачу с заданным id
//       const updateAdmin = await City.findByPk(Number(req.params.id));

//       if (!updateAdmin || updateAdmin.id !== req.session.adminId) {
//         res.status(404).json({ success: false, message: 'Нет такого админа' });

//         return;
//       }

//       // меняем состояние задачи и сохраняем в БД
//       if ('userName' in req.body) updateAdmin.userName = req.body.userName;
//       if ('password' in req.body) updateAdmin.password = req.body.password;
//       await updateAdmin.save();

//       res.json({ success: true });
//     } catch (error) {
//       res.json({ error: error.message });
//     }
//   });

module.exports = router;
