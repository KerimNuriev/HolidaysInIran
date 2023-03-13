const { Tour } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Tour.bulkCreate([
      {
        title: 'Тур на 8 дней и 7 ночей',
        price_1: 2000,
        price_2: 2250,
        days: 8,
        image: '/image/tour1.jpg',
        shortDescription:
          '1. 7 ночей проживания в гостинице типа «постель и завтрак» (сочетание традиционных, 3-х или 4-звездочных отелей). 2. Все трансферы в автомобилях с кондиционером (VIP BUS). 3. Официальный иранский, русскоязычный гид. 4. Письмо об одобрении визы (номер авторизации). 5. Все блюда, чай и минеральная вода. 6. Все входные билеты, за исключением дополнительных посещений или мероприятий. 7. Фотограф для приятные воспоминания о поездке!',
        description:
          'Этот тур планируется в соответствии со следующей таблицей; тем не менее, это может быть выполнено или повторено в программа с любого понедельника до следующей среды (исходя из того же расписания рейсов и времени). Стоимость тура действительна до 20 марта 2023 г., после чего она может быть увеличена в зависимости от уровня экономической инфляции в Иране. Цена тура действительна для группы от 15 до 20 (максимум) пассажиров. Исключения для тура: 1. Рейс Москва-Тегеран-Москва(согласно заявленному в маршруте расписанию). 2. Визовый сбор в посольстве или по прибытии. 3. Страховые взносы. 4. Любые блюда или напитки сверх того, что включено в программу тура. 5. Чаевые (водителю, гиду, носильщикам….) 6. Иранская сим-карта. 7. Личные расходы',
      },
      {
        title: 'Тур на 10 дней и 9 ночей',
        price_1: 250,
        price_2: 2750,
        days: 10,
        image: '/image/tour2.jpeg',
        shortDescription:
          '1. 9 ночей проживания в гостинице типа «постель и завтрак» (сочетание традиционных, 3-х или 4-звездочных отелей). 2. Все трансферы в автомобилях с кондиционером (VIP BUS). 3. Официальный иранский, русскоязычный гид. 4. Письмо об одобрении визы (номер авторизации). 5. Все блюда, чай и минеральная вода. 6. Все входные билеты, за исключением дополнительных посещений или мероприятий. 7. Фотограф для приятные воспоминания о поездке!',
        description:
          'Этот тур планируется в соответствии со следующей таблицей; тем не менее, это может быть выполнено или повторено в программа с любого понедельника до следующей среды (исходя из того же расписания рейсов и времени). Стоимость тура действительна до 20 марта 2023 г., после чего она может быть увеличена в зависимости от уровня экономической инфляции в Иране. Цена тура действительна для группы от 15 до 20 (максимум) пассажиров. Исключения для тура: 1. Рейс Москва-Тегеран-Москва(согласно заявленному в маршруте расписанию). 2. Визовый сбор в посольстве или по прибытии. 3. Страховые взносы. 4. Любые блюда или напитки сверх того, что включено в программу тура. 5. Чаевые (водителю, гиду, носильщикам….) 6. Иранская сим-карта. 7. Личные расходы',
      },
      {
        title: 'Индивидуальный тур',
        price_1: 2000,
        price_2: 2250,
        days: 8,
        image: '/image/tour3.jpeg',
        shortDescription:
          '1. 7 ночей проживания в гостинице типа «постель и завтрак» (сочетание традиционных, 3-х или 4-звездочных отелей). 2. Все трансферы в автомобилях с кондиционером (VIP BUS). 3. Официальный иранский, русскоязычный гид. 4. Письмо об одобрении визы (номер авторизации). 5. Все блюда, чай и минеральная вода. 6. Все входные билеты, за исключением дополнительных посещений или мероприятий. 7. Фотограф для приятные воспоминания о поездке!',
        description:
          'Этот тур планируется в соответствии со следующей таблицей; тем не менее, это может быть выполнено или повторено в программа с любого понедельника до следующей среды (исходя из того же расписания рейсов и времени). Стоимость тура действительна до 20 марта 2023 г., после чего она может быть увеличена в зависимости от уровня экономической инфляции в Иране. Цена тура действительна для группы от 15 до 20 (максимум) пассажиров. Исключения для тура: 1. Рейс Москва-Тегеран-Москва(согласно заявленному в маршруте расписанию). 2. Визовый сбор в посольстве или по прибытии. 3. Страховые взносы. 4. Любые блюда или напитки сверх того, что включено в программу тура. 5. Чаевые (водителю, гиду, носильщикам….) 6. Иранская сим-карта. 7. Личные расходы',
      },
    ]);
  },

  async down(queryInterface) {
    await Tour.destroy({ truncate: { cascade: true } });
  },
};
