const router = require('express').Router();
const { Admin } = require('../../db/models');

router
  .route('/')
  .get(async (req, res) => {
    try {
      const admin = await Admin.findAll({
        order: [['createdAt', 'DESC']],
        where: {
          done: true,
        },
      });
      res.json(admin);
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { userName, password } = req.body;

      if (userName && password && req.session.adminId) {
        const newAdmin = await Admin.create({
          userName,
          password,
        });
        const { admin } = res.locals;
        if (newAdmin) {
          res.status(201).json(newAdmin);
        } else {
          res.status(404).json({ error: 'такой админ уже существует' });
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
      // удаляем задачу с заданным id
      const removedAdmin = await Admin.destroy({
        where: {
          // в req.params.id ляжет соответсвующая часть URL
          id: Number(req.params.id),
        },
      });

      if (removedAdmin === 0) {
        res.status(404).json({ success: false, message: 'Нет такого админа' });
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
      const updateAdmin = await Admin.findByPk(Number(req.params.id));

      if (!updateAdmin || updateAdmin.id !== req.session.adminId) {
        res.status(404).json({ success: false, message: 'Нет такого админа' });

        return;
      }

      // меняем состояние задачи и сохраняем в БД
      if ('userName' in req.body) updateAdmin.userName = req.body.userName;
      if ('password' in req.body) updateAdmin.password = req.body.password;
      await updateAdmin.save();

      res.json({ success: true });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

module.exports = router;
