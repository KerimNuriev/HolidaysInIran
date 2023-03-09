const { Admin } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  if (req.session.adminId) {
    const admin = await Admin.findOne({ where: { id: req.session.adminId } });

    res.locals.admin = admin;
  }
  next();
};
