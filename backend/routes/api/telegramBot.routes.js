const router = require('express').Router();
const TelegramBot = require('node-telegram-bot-api');
const { EOL } = require('os');

router.post('/', async (req, res) => {
  try {
    const {
      name, email, phone, connection, tour, date,
    } = req.body;
    if (name && email && phone && connection && tour && date) {
      const bot = new TelegramBot(
        '6207140313:AAHEfc3e1QCfPXtrtwpGS0Iz3eh3tWnYdn0',
        { polling: true },
      );
      await bot.sendMessage(
        -851354767,
        `Имя пользователя: ${name},${EOL}Номер телефона: ${phone},${EOL}Емаил: ${email},${EOL}Выбранный тур: ${tour},${EOL}Желаемая дата: ${date},${EOL}Предпочтительный способ связи: ${connection}`,
      );
      await bot.stopPolling();
      res.json({ message: 'good' });
    } else {
      res.status(400).json({ message: 'Введите все данные' });
    }
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ message: error.message });
    res.status(500).json({ message: 'error.message' });
  }
});

module.exports = router;
