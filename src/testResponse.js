export const testResponse = {
  status: 'ok',
  totalResults: 427,
  articles: [
    {
      author: null,
      description: 'Samsung выпустила огромный телефон за 90 тысяч рублей. Кому он нужен?',
      publishedAt: '2019-08-26T21:06:00Z',
      source: { id: 'lenta', name: 'Lenta' },
      title: 'Куда уж больше! - Lenta.ru',
      url: 'https://lenta.ru/articles/2019/08/27/note/',
      urlToImage: 'https://icdn.lenta.ru/images/2019/08/23/19/20190823194617066/detail_e46e4890628d55fa6b5a9d1efd28d9d3.jpg',
    },
    {
      author: null,
      description: '',
      publishedAt: '2019-08-26T20:33:00Z',
      source: { id: null, name: 'Fontanka.ru' },
      title: 'На Apple и Samsung подали в суд из-за излучения смартфонов - Фонтанка.Ру',
      url: 'https://www.fontanka.ru/2019/08/26/149/',
      urlToImage: 'https://www.fontanka.ru/pic/defitems/chizhik.jpg',
    },
    {
      author: 'RT на Русском',
      description: 'Помощник президента США по национальной безопасности Джон Болтон сообщил, что в ближайшее время посетит Украину в рамках курса по поддержке украинского лидера Владимира Зеленского.',
      publishedAt: '2019-08-26T19:30:00Z',
      source: { id: 'rt', name: 'RT' },
      title: 'Болтон анонсировал свой визит в Киев - RT на русском',
      url: 'https://russian.rt.com/ussr/news/662326-bolton-kiev-vizit',
      urlToImage: 'https://cdni.rt.com/russian/images/2019.08/article/5d6430fa18356193568b4567.JPG',
    },

    {
      author: null,
      description: 'Россия обсуждает с Huawei установку российской операционной системы (ОС) «Аврора» вместо Android на устройствах компании. Новая ОС будет использоваться для проведения национальной переписи населения в России. В настоящее время обсуждается установка «Авроры» н…',
      publishedAt: '2019-08-26T18:46:00Z',
      source: { id: 'lenta', name: 'Lenta' },
      title: 'Россия поможет Huawei закупкой 360 тысяч планшетов - Lenta.ru',
      url: 'https://lenta.ru/news/2019/08/26/huawei/',
      urlToImage: 'https://icdn.lenta.ru/images/2019/08/26/21/20190826213314684/detail_efc311f53ada8dfb6f023f32f5e37b0d.jpg',
    },
    {
      author: null,
      description: 'Дональд Трамп заявил, что не намерен зарабатывать на организации саммита G7, если местом для проведения этого события в 2020 году выберут принадлежащий президенту США гольф-клуб Trump Doral в ...',
      publishedAt: '2019-08-26T18:20:00Z',
      source: { id: 'rbc', name: 'RBC' },
      title: 'Трамп пообещал каждой стране бунгало на саммите G7 в его гольф-клубе - РБК',
      url: 'https://www.rbc.ru/rbcfreenews/5d641fa59a7947eede5bfcb9',
      urlToImage: 'https://s0.rbk.ru/v6_top_pics/media/img/4/62/755668436423624.jpg',
    },

    {
      author: null,
      description: 'Президент США Дональд Трамп не исключил, что задержит повышение пошлин на китайский импорт из-за желания Пекина возобновить диалог. Китай подтвердил, что хочет «спокойных переговоров» и выступает против дальнейшей эскалации конфликта. После этих заявлений цен…',
      publishedAt: '2019-08-26T17:58:00Z',
      source: { id: 'lenta', name: 'Lenta' },
      title: 'США и Китаю надоело воевать - Lenta.ru',
      url: 'https://lenta.ru/news/2019/08/26/peace/',
      urlToImage: 'https://icdn.lenta.ru/images/2019/08/26/16/20190826162348276/detail_b35635dfc6df632c3d0dc247743620e6.png',
    },
    {
      author: null,
      description: 'Минэкономразвития ухудшило экономический прогноз на будущий год и снизило оценку роста реальных располагаемых доходов россиян в 2019 году в десять раз — с 1 до 0,1 процента. Кроме того, оценка роста ВВП на 2020 год понижена с 2 до 1,7 процента, а прогноз по и…',
      publishedAt: '2019-08-26T17:45:00Z',
      source: { id: 'lenta', name: 'Lenta' },
      title: 'Россиянам предсказали падение роста доходов до нуля - Lenta.ru',
      url: 'https://lenta.ru/news/2019/08/26/dohody/',
      urlToImage: 'https://icdn.lenta.ru/images/2019/08/26/20/20190826205008959/detail_5abf600e443de062c25634f1b6fbd525.png',
    },
    {
      author: 'Елизавета Ивтушок',
      description: 'При этом депрессией такая связь не регулируется',
      publishedAt: '2019-08-26T16:50:00Z',
      source: { id: null, name: 'Nplus1.ru' },
      title: '200-тысячная выборка связала синдром беспокойных ног с повышенным риском самоубийства - N+1',
      url: 'https://nplus1.ru/news/2019/08/26/restless-leg',
      urlToImage: 'https://nplus1.ru/images/2019/08/26/775629314ac93f7cfc4595a523fddf83.gif',
    },
  ],
};
export const testResponseError = {
  status: 'error',
  code: 'apiKeyMissing',
  message: 'Something went wrong. Api key missing',
};
export const testResponseByDate = {
  status: 'ok',
  totalResults: 1,
  articles: [
    {
      author: null,
      description: 'Samsung выпустила огромный телефон за 90 тысяч рублей. Кому он нужен?',
      publishedAt: '2019-08-26T21:06:00Z',
      source: { id: 'lenta', name: 'Lenta' },
      title: 'Куда уж больше! - Lenta.ru',
      url: 'https://lenta.ru/articles/2019/08/27/note/',
      urlToImage: 'https://icdn.lenta.ru/images/2019/08/23/19/20190823194617066/detail_e46e4890628d55fa6b5a9d1efd28d9d3.jpg',
    }],
};
export default testResponse;
