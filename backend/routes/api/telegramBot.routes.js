const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const {
      name, email, phone, connection, tour, date,
    } = req.body;
    if (name && email && phone && connection && tour && date) {
      const telegramMessage = `Имя пользователя: ${name}${'\n'}Почта: ${email}Выбранный тур: ${tour}Телефон: ${phone}Желаемая дата: ${date}Способ связи: ${connection}`;
      await fetch(`/bot6207140313:AAHEfc3e1QCfPXtrtwpGS0Iz3eh3tWnYdn0/sendMessage?chat_id=-851354767&text=${telegramMessage}`);
    }
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
