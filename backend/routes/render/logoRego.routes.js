const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');

router.route('/admin').get(async (req, res) => {
  const { admin } = res.locals;
  if (admin) {
    res.json({
      isLoggedIn: true,
      admin: {
        id: admin.id,
        userName: admin.userName,
      },
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});
router.route('/register').post(async (req, res) => {
  const { userName, password } = req.body;

  const existingUser = await Admin.findOne({ where: { userName } });
  // проверяем есть ли уже такой пользователь в БД
  if (existingUser) {
    res.status(422).json({ error: 'Такой пользователь уже есть' });
    return;
  }

  // создаём нового пользователя
  const newAdmin = await Admin.create({
    userName,
    // хэшируем пароль, чтобы не хранить в открытом виде в БД
    password: await bcrypt.hash(password, 10),
  });

  // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
  req.session.adminId = newAdmin.id;
  res.json({ id: newAdmin.id, userName: newAdmin.userName });
});

router.route('/login').post(async (req, res) => {
  try {
    const { userName, password } = req.body;
    const existingAdmin = await Admin.findOne({ where: { userName } });

    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (
      existingAdmin &&
      (await bcrypt.compare(password, existingAdmin.password))
    ) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.adminId = existingAdmin.id;
      req.session.admin = existingAdmin;
      res.json({ id: existingAdmin.id, userName: existingAdmin.name });
    } else {
      res
        .status(401)
        .json({ error: 'Такого пользователя нет либо пароли не совпадают' });
    }
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: 'Unexpected server error. Try later.' });
  }
});

router.route('/logout').post((req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = router;
