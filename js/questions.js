const QUESTIONS = [
    {   // Первый вопрос начинается тут
        src: "assets/audio/0060engl.mp3",   // путь к звуковому файлу текущего вопроса
        answers: [
            {
                text: "Он неприятный мужчина.",             // Первый вариант ответа к вопросу
                correct: false                      // true, если ответ правильный, false, если нет
            },
            {
                text: "Он очень приятный человек.",               // Второй вариант ответа к вопросу
                correct: true                       // true, если ответ правильный, false, если нет
            },
            {
                text: "Он неприятный мужчина.",     // Третий вариант ответа к вопросу
                correct: false                      // true, если ответ правильный, false, если нет
            }
        ]

    },  // Первый вопрос заканчивается тут (не забыть поставить запятую после фигурной скобки)
    {   // Второй вопрос начинается тут
        src: "assets/audio/0064engl.mp3",
        answers: [
            {
                text: "Эта женщина прекрасно выглядит.",
                correct: false
            },
            {
                text: "Эта дама просто возмутительна.",
                correct: false
            },
            {
                text: "Эта женщина очень привлекательна.",
                correct: true
            }
        ]
    },  // Второй вопрос заканчивается тут (не забыть поставить запятую после фигурной скобки)
    {
        src: "assets/audio/0067engl.mp3",
        answers: [
            {
                text: "Симона очень стройная, у нее осиная талия.",
                correct: true
            },
            {
                text: "Симона очень гибкая, у нее прекрасная осанка.",
                correct: false
            },
            {
                text: "Симона очень стройная, у нее прекрасная талия.",
                correct: false
            }
        ]

    },
    {
        src: "assets/audio/0073engl.mp3",
        answers: [
            {
                text: "Я хочу, чтобы у меня подольше сохранился загар.",
                correct: true
            },
            {
                text: "Я хочу, чтобы у меня ушли лишние килограммы.",
                correct: false
            },
            {
                text: "Я хочу, чтобы меня согревало солнце и ласкало море.",
                correct: false
            }
        ]

    },
    {
        src: "assets/audio/0089engl.mp3",
        answers: [
            {
                text: "Она выглядит просто прекрасно.",
                correct: false
            },
            {
                text: "Она очень молодо выглядит.",
                correct: true
            },
            {
                text: "Она очень эффектно выглядит.",
                correct: false
            }
        ]

    },
    {
        src: "assets/audio/0092engl.mp3",
        answers: [
            {
                text: "Вы прекрасно выглядите.",
                correct: true
            },
            {
                text: "Вы выглядите замечательно.",
                correct: false
            },
            {
                text: "Вы прекрасно смотритесь.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0124engl.mp3",
        answers: [
            {
                text: "Он просто мерзавец.",
                correct: false
            },
            {
                text: "Он просто позёр.",
                correct: false
            },
            {
                text: "Он просто дурак.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0129engl.mp3",
        answers: [
            {
                text: "Болтуны и лентяи мне не интересны.",
                correct: false
            },
            {
                text: "Болтуны и лентяи меня раздражают.",
                correct: false
            },
            {
                text: "Болтуны и лентяи мне действуют на нервы.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0132engl.mp3",
        answers: [
            {
                text: "Мама очень хорошая хозяйка – она всё успевает.",
                correct: false
            },
            {
                text: "Мама бросает деньги на ветер – она настоящая транжирка.",
                correct: true
            },
            {
                text: "Мама выбрасывает старьё – она не терпит хлама в доме.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0143engl.mp3",
        answers: [
            {
                text: "У нее хороший вкус.",
                correct: true
            },
            {
                text: "У нее странный взгляд.",
                correct: false
            },
            {
                text: "У нее изощренный вкус.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0208engl.mp3",
        answers: [
            {
                text: "Вы уже были в нашей стране?",
                correct: true
            },
            {
                text: "Вы уже бывали на этом курорте?",
                correct: false
            },
            {
                text: "Когда вы были здесь?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0237engl.mp3",
        answers: [
            {
                text: "Подождите немного!",
                correct: false
            },
            {
                text: "Минуточку, пожалуйста!",
                correct: true
            },
            {
                text: "Пожалуйста подождите!",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0329engl.mp3",
        answers: [
            {
                text: "Сегодня утром море было удивительного зеленого цвета.",
                correct: true
            },
            {
                text: "Сегодня вечером море было свинцового цвета.",
                correct: false
            },
            {
                text: "Сегодня утром море было замечательного зеленого цвета.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0056engl.mp3",
        answers: [
            {
                text: "Как вам нравится такое занятие?",
                correct: false
            },
            {
                text: "Как вы выдерживаете такую нагрузку?",
                correct: true
            },
            {
                text: "Вы легко выдерживаете такую нагрузку?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0099engl.mp3",
        answers: [
            {
                text: "Он неплохой специалист, и к сожалению, совершенно не понимает в интригах, которые кругом ведутся.",
                correct: false
            },
            {
                text: "Он очень хороший специалист, но, к сожалению, у него совершенно отсутствует дисциплина.",
                correct: false
            },
            {
                text: "Он очень квалифицированный специалист, но, к сожалению, совершенно не сведущ во всех интригах, которые вокруг него ведутся.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0174engl.mp3",
        answers: [
            {
                text: "Каковы условия поступления в университет или в институт?",
                correct: true
            },
            {
                text: "Какие преимущества дают дипломы ваших университетов и институтов?",
                correct: false
            },
            {
                text: "Какие выгоды я получу от поступления в университет или институт?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0190engl.mp3",
        answers: [
            {
                text: "Я отдала своего ребенка в частное учебное заведение.",
                correct: true
            },
            {
                text: "Я отдала своего ребенка в прекрасное учебное заведение.",
                correct: false
            },
            {
                text: "Я отдала своего ребенка в зарубежное учебное заведение.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0204engl.mp3",
        answers: [
            {
                text: "В свободное время я люблю бывать в библиотеке или театре.",
                correct: false
            },
            {
                text: "В свободное время я люблю бывать в театре или кино.",
                correct: true
            },
            {
                text: "В свободное время я люблю бывать на природе.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0215engl.mp3",
        answers: [
            {
                text: "Нет ничего проще!",
                correct: true
            },
            {
                text: "Нет ничего удивительного!",
                correct: false
            },
            {
                text: "Нет ничего страшного!",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0216engl.mp3",
        answers: [
            {
                text: "Во всех кинотеатрах можно входить в зал только перед сеансом.",
                correct: false
            },
            {
                text: "Во всех больших кинотеатрах можно выходить из зала в любой момент.",
                correct: false
            },
            {
                text: "Во всех больших кинотеатрах можно входить в зал в любой момент.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0243engl.mp3",
        answers: [
            {
                text: "А мне он не нравится, как композитор, но исполнитель-пианист он просто виртуоз.",
                correct: false
            },
            {
                text: "А мне он нравится, как композитор, но исполнитель-пианист он оставляет желать лучшего.",
                correct: false
            },
            {
                text: "А мне он не нравится, как композитор, но исполнитель-пианист он замечательный.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0285engl.mp3",
        answers: [
            {
                text: "В прошлый раз мой брат прекрасно отдохнул в горах.",
                correct: false
            },
            {
                text: "В прошлый раз мой брат совершил отличную прогулку в горы.",
                correct: true
            },
            {
                text: "В прошлый раз мой брат совершил восхождение в горы.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0286engl.mp3",
        answers: [
            {
                text: "Мы будем подниматься по горной дороге.",
                correct: true
            },
            {
                text: "Мы будем спускаться по плохой дороге.",
                correct: false
            },
            {
                text: "Мы будем подниматься по сложной дороге.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0293engl.mp3",
        answers: [
            {
                text: "Мои родители проводят отпуск на курорте.",
                correct: true
            },
            {
                text: "Мои родители проводят отпуск на даче.",
                correct: false
            },
            {
                text: "Мои родители отдыхают на курорте.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0294engl.mp3",
        answers: [
            {
                text: "Я люблю плавать в море.",
                correct: false
            },
            {
                text: "Я люблю отдыхать на море.",
                correct: true
            },
            {
                text: "Я люблю тёплое море.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0296engl.mp3",
        answers: [
            {
                text: "Какие у вас сегодня планы?",
                correct: true
            },
            {
                text: "Какие планы на сегодня?",
                correct: false
            },
            {
                text: "Какие у вас сегодня вопросы?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0329engl.mp3",
        answers: [
            {
                text: "Где будут проходить соревнования по конному спорту?",
                correct: false
            },
            {
                text: "Когда будут проходить соревнования по конному спорту?",
                correct: true
            },
            {
                text: "Когда можно посмотреть соревнования по конному спорту?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/3291engl.mp3",
        answers: [
            {
                text: "Примите мои поздравления.",
                correct: false
            },
            {
                text: "Примите мои соболезнования.",
                correct: false
            },
            {
                text: "Примите мои извинения.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0336engl.mp3",
        answers: [
            {
                text: "Друзья, какие прекрасные розы вы принесли!",
                correct: false
            },
            {
                text: "Друзья, какие красивые цветы вы принесли!",
                correct: true
            },
            {
                text: "Друзья, какие вкусные фрукты вы принесли!",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0353engl.mp3",
        answers: [
            {
                text: "Джо разлил бокал с красным вином прямо на мое новое платье.",
                correct: true
            },
            {
                text: "Джо разлил острый соус прямо на мое новое платье.",
                correct: false
            },
            {
                text: "Джо разлил бокал с вином прямо на мое модное платье.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0354engl.mp3",
        answers: [
            {
                text: "Еще не поздно, но нам пора уходить.",
                correct: false
            },
            {
                text: "Уже поздно, нам пора уходить.",
                correct: true
            },
            {
                text: "Уже поздно, продолжим завтра.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0358engl.mp3",
        answers: [
            {
                text: "Мы хорошо провели время, познакомились с интересными людьми.",
                correct: true
            },
            {
                text: "Мы прекрасно провели время, познакомились с удивительными людьми.",
                correct: false
            },
            {
                text: "Мы замечательно провели вечер, познакомились с интересными людьми.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0360engl.mp3",
        answers: [
            {
                text: "Разрешите вас поздравить?",
                correct: false
            },
            {
                text: "Разрешите вас проводить?",
                correct: true
            },
            {
                text: "Разрешите вас познакомить?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0377engl.mp3",
        answers: [
            {
                text: "Это довольно трудно, но мы это сделаем.",
                correct: false
            },
            {
                text: "Это довольно легко, мы все подготовим.",
                correct: false
            },
            {
                text: "Это довольно сложно, но мы попытаемся.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0407engl.mp3",
        answers: [
            {
                text: "Я не знаю, но думаю смогу могу вам помочь.",
                correct: false
            },
            {
                text: "Я не знаю, к сожалению, ничем не могу вам помочь.",
                correct: true
            },
            {
                text: "Я не знаю, к сожалению, не представлю, как надо.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0021engl.mp3",
        answers: [
            {
                text: "К кому мне подойти?",
                correct: false
            },
            {
                text: "К кому мне обратиться?",
                correct: true
            },
            {
                text: "Кому можно задать вопрос?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0034engl.mp3",
        answers: [
            {
                text: "Помогите мне, пожалуйста, правильно заполнить декларацию",
                correct: false
            },
            {
                text: "Помогите мне, пожалуйста, оформить таможенную пошлину.",
                correct: false
            },
            {
                text: "Помогите мне, пожалуйста, заполнить таможенную декларацию.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0034engl.mp3",
        answers: [
            {
                text: "Забронируйте, пожалуйста, номер с ванной в вашей гостинице.",
                correct: true
            },
            {
                text: "Забронируйте, пожалуйста, одноместный номер в вашей гостинице.",
                correct: false
            },
            {
                text: "Забронируйте мне, пожалуйста, номер в вашей гостинице.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0436engl.mp3",
        answers: [
            {
                text: "Я вообще-то не люблю тяжелую и жирную пищу.",
                correct: true
            },
            {
                text: "Я вообще-то люблю вкусную и жирную пищу.",
                correct: false
            },
            {
                text: "Я вообще-то не люблю тяжелую и нудную работу.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0540engl.mp3",
        answers: [
            {
                text: "У вас есть такие же туфли на размер меньше?",
                correct: false
            },
            {
                text: "У вас есть такое же платье на размер меньше?",
                correct: true
            },
            {
                text: "У вас есть такое же платье другой расцветки?",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0598engl.mp3",
        answers: [
            {
                text: "Красивые вещи всегда в моде, особенно драгоценности.",
                correct: true
            },
            {
                text: "Красивые вещи всегда ценятся, особенно меха.",
                correct: false
            },
            {
                text: "Красивые вещи всегда в моде, особенно брендовые.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0794engl.mp3",
        answers: [
            {
                text: "Я обладаю хорошими навыками вождения на скоростной трассе.",
                correct: false
            },
            {
                text: "Я не обладаю навыками оказания первой медицинской помощи.",
                correct: false
            },
            {
                text: "Я обладаю навыками оказания первой медицинской помощи.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0848engl.mp3",
        answers: [
            {
                text: "Мне нужны очки с диоптрией.",
                correct: false
            },
            {
                text: "Мне нужны очки со светофильтрами.",
                correct: false
            },
            {
                text: "Мне нужны солнцезащитные очки.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0956engl.mp3",
        answers: [
            {
                text: "Они живут вместе уже восемь лет, у них есть сын, и вот, наконец, они решили пожениться.",
                correct: false
            },
            {
                text: "Они живут вместе уже десять лет, у них есть дочь, и вот, наконец, они решили пожениться.",
                correct: true
            },
            {
                text: "Они прожили вместе уже десять лет, у них есть дочь, и вот, они решили развестись.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/0969engl.mp3",
        answers: [
            {
                text: "Она прекрасная хозяйка и примерная мать.",
                correct: true
            },
            {
                text: "Она прекрасная женщина и заботливая мать.",
                correct: false
            },
            {
                text: "Она прекрасная специалист и примерная работник.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/1036engl.mp3",
        answers: [
            {
                text: "Принятие гражданства – это акт, по которому иностранец, проживающий в чужой стране, принимает гражданство данной страны.",
                correct: true
            },
            {
                text: "Принятие гражданства – это акт, по которому человек, проживающий в чужой стране, принимает гражданство этой страны.",
                correct: false
            },
            {
                text: "Принятие гражданства – это акт, по которому иностранец, проживающий в другой стране, принимает гражданство данной страны.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/1294engl.mp3",
        answers: [
            {
                text: "Передайте большой привет коллегам.",
                correct: false
            },
            {
                text: "Передайте большой привет всем вашим.",
                correct: true
            },
            {
                text: "Передайте большой привет и поздравления.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/1323engl.mp3",
        answers: [
            {
                text: "Будьте добры, передайте мне соль.",
                correct: true
            },
            {
                text: "Будьте добры, верните мне зонт.",
                correct: false
            },
            {
                text: "Будьте добры, окажите мне услугу.",
                correct: false
            }
        ]
    },
    {
        src: "assets/audio/1324engl.mp3",
        answers: [
            {
                text: "Проводите меня, пожалуйста.",
                correct: false
            },
            {
                text: "Встретьте меня, пожалуйста.",
                correct: false
            },
            {
                text: "Подождите меня, пожалуйста.",
                correct: true
            }
        ]
    },
    {
        src: "assets/audio/0329engl.mp3",
        answers: [
            {
                text: "Разрешите пригласить вас в кафе?",
                correct: false
            },
            {
                text: "Разрешите пригласить вас на чашку кофе?",
                correct: true
            },
            {
                text: "Разрешите пригласить вас на фуршет?",
                correct: false
            }
        ]
    },
];