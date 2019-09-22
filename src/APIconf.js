
const baseUrl = 'https://newsapi.org/v2/everything?';
const domains = [
  'fontanka.ru',
  'lenta.ru',
  'rt.com',
  'nplus1.ru',
  'www.rbc.ru'];
const params = ['language=ru',
  'apiKey=568e0f13627645c48300f3fd0bfc0ee0',
  `domains=${domains.join(',')}`,
  'page=1',
];
const URL = baseUrl + params.join('&');
export default URL;
