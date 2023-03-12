const router = require('express').Router();

router.post('/', async (req, res) => {
  const {
    name, email, phone, connection, tour, date,
  } = req.body;
  if (name && email && phone && connection && tour && date) {
    const telegramMessage = `Имя пользователя: ${name}Почта: ${email}Выбранный тур: ${tour}Телефон: ${phone}Желаемая дата: ${date}Способ связи: ${connection}`;
    const result = await fetch(`https://api.telegram.org/bot6207140313:AAHEfc3e1QCfPXtrtwpGS0Iz3eh3tWnYdn0/sendMessage?chat_id=-851354767&text=${telegramMessage}`);
  } else {
    res.json('erorr');
  }
});

module.exports = router;
