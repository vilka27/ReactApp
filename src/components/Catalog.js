import React from 'react';
import ItemList from './ItemList';
import Item from './Item';
import getApiInfo from '../services/APIService';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    author: null,
                    description: "Samsung выпустила огромный телефон за 90 тысяч рублей. Кому он нужен?",
                    publishedAt: "2019-08-26T21:06:00Z",
                    source: {id: "lenta", name: "Lenta"},
                    title: "Куда уж больше! - Lenta.ru",
                    url: "https://lenta.ru/articles/2019/08/27/note/",
                    urlToImage: "https://icdn.lenta.ru/images/2019/08/23/19/20190823194617066/detail_e46e4890628d55fa6b5a9d1efd28d9d3.jpg"
                },
                {
                    author: null,
                    description: "В Сети опубликовали тизер девятого эпизода фантастической саги «Звездные войны». Ролик выложили на YouTube-канале Star Wars.",
                    publishedAt: "2019-08-26T20:48:06Z",
                    source: {id: null, name: "Gazeta.ru"},
                    title: "В Сети выложили тизер новых «Звездных войн» - Газета.Ru",
                    url: "https://www.gazeta.ru/culture/news/2019/08/26/n_13388149.shtml",
                    urlToImage: "https://img.gazeta.ru/files3/863/12305863/sw-pic905-895x505-97181.jpg",
                },
                {
                    author: null,
                    description: "",
                    publishedAt: "2019-08-26T20:33:00Z",
                    source: {id: null, name: "Fontanka.ru"},
                    title: "На Apple и Samsung подали в суд из-за излучения смартфонов - Фонтанка.Ру",
                    url: "https://www.fontanka.ru/2019/08/26/149/",
                    urlToImage: "https://www.fontanka.ru/pic/defitems/chizhik.jpg",
                },
                {
                    author: null,
                    description: "Официальный Twitter «Локомотива» опубликовал видео с новым игроком, не показав его лица.",
                    publishedAt: "2019-08-26T19:59:00Z",
                    source: {id: null, name: "Sport-express.ru"},
                    title: "«Локомотив» представит новичка во вторник. Футбол - Трансферы. СПОРТ-ЭКСПРЕСС - СПОРТ - ЭКСПРЕСС",
                    url: "https://m.sport-express.ru/football/transfers/news/lokomotiv-predstavit-novichka-vo-vtornik-1579443/",
                    urlToImage: "https://ss.sport-express.ru/userfiles/materials/sharing/157/1579443.jpg",
                },
                {
                    author: "RT на Русском",
                    description: "Помощник президента США по национальной безопасности Джон Болтон сообщил, что в ближайшее время посетит Украину в рамках курса по поддержке украинского лидера Владимира Зеленского.",
                    publishedAt: "2019-08-26T19:30:00Z",
                    source: {id: "rt", name: "RT"},
                    title: "Болтон анонсировал свой визит в Киев - RT на русском",
                    url: "https://russian.rt.com/ussr/news/662326-bolton-kiev-vizit",
                    urlToImage: "https://cdni.rt.com/russian/images/2019.08/article/5d6430fa18356193568b4567.JPG"
                },
                {
                    author: "https://www.facebook.com/bbcnews",
                    description: "Испытания под Северодвинском были связаны с разработкой оружия в связи с выходом США из договора по ПРО в 2002 году, заявил исполняющий обязанности постпреда России в Вене Алексей Карпов.",
                    publishedAt: "2019-08-26T19:29:45Z",
                    source: {id: null, name: "Bbc.com"},
                    title: "Россия связала аварию под Северодвинском с выходом США из договора по ПРО - BBC Русская служба",
                    url: "https://www.bbc.com/russian/news-49474121",
                    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_russian/3368/production/_108506131_tass_34991679.jpg",
                },
                {
                    author: null,
                    description: "Россия обсуждает с Huawei установку российской операционной системы (ОС) «Аврора» вместо Android на устройствах компании. Новая ОС будет использоваться для проведения национальной переписи населения в России. В настоящее время обсуждается установка «Авроры» н…",
                    publishedAt: "2019-08-26T18:46:00Z",
                    source: {id: "lenta", name: "Lenta"},
                    title: "Россия поможет Huawei закупкой 360 тысяч планшетов - Lenta.ru",
                    url: "https://lenta.ru/news/2019/08/26/huawei/",
                    urlToImage: "https://icdn.lenta.ru/images/2019/08/26/21/20190826213314684/detail_efc311f53ada8dfb6f023f32f5e37b0d.jpg",
                },
                {
                    author: null,
                    description: "Дональд Трамп заявил, что не намерен зарабатывать на организации саммита G7, если местом для проведения этого события в 2020 году выберут принадлежащий президенту США гольф-клуб Trump Doral в ...",
                    publishedAt: "2019-08-26T18:20:00Z",
                    source: {id: "rbc", name: "RBC"},
                    title: "Трамп пообещал каждой стране бунгало на саммите G7 в его гольф-клубе - РБК",
                    url: "https://www.rbc.ru/rbcfreenews/5d641fa59a7947eede5bfcb9",
                    urlToImage: "https://s0.rbk.ru/v6_top_pics/media/img/4/62/755668436423624.jpg",
                },
                {
                    author: "",
                    description: "Украинские силовики обстреляли окрестности села Коминтерново на юге самопровозглашенной Донецкой народной республики с применением зажигательных боеприпасов,... РИА Новости, 26.08.2019",
                    publishedAt: "2019-08-26T18:07:31Z",
                    source: {id: null, name: "Ria.ru"},
                    title: "Украинские силовики применили зажигательные боеприпасы в Донбассе - РИА Новости",
                    url: "https://ria.ru/20190826/1557931211.html",
                    urlToImage: "https://cdn22.img.ria.ru/images/sharing/article/1557931211.jpg?15561842001566843884"
                },
                {
                    author: null,
                    description: "А некоторые критики уже назвали её лучшей игрой Remedy.",
                    publishedAt: "2019-08-26T18:05:00Z",
                    source: {id: null, name: "Igromania.ru"},
                    title: "Control набрала 85 баллов из 100 на Metacritic - Игромания",
                    url: "https://www.igromania.ru/news/85641/Control_nabrala_85_ballov_iz_100_na_Metacritic.html",
                    urlToImage: "https://cdn.igromania.ru/mnt/news/5/8/f/e/e/b/85641/56fe834ec559bfa5_1200xH.jpg"
                },
                {
                    author: null,
                    description: "Президент США Дональд Трамп не исключил, что задержит повышение пошлин на китайский импорт из-за желания Пекина возобновить диалог. Китай подтвердил, что хочет «спокойных переговоров» и выступает против дальнейшей эскалации конфликта. После этих заявлений цен…",
                    publishedAt: "2019-08-26T17:58:00Z",
                    source: {id: "lenta", name: "Lenta"},
                    title: "США и Китаю надоело воевать - Lenta.ru",
                    url: "https://lenta.ru/news/2019/08/26/peace/",
                    urlToImage: "https://icdn.lenta.ru/images/2019/08/26/16/20190826162348276/detail_b35635dfc6df632c3d0dc247743620e6.png"
                },
                {
                    author: null,
                    description: "Минэкономразвития ухудшило экономический прогноз на будущий год и снизило оценку роста реальных располагаемых доходов россиян в 2019 году в десять раз — с 1 до 0,1 процента. Кроме того, оценка роста ВВП на 2020 год понижена с 2 до 1,7 процента, а прогноз по и…",
                    publishedAt: "2019-08-26T17:45:00Z",
                    source: {id: "lenta", name: "Lenta"},
                    title: "Россиянам предсказали падение роста доходов до нуля - Lenta.ru",
                    url: "https://lenta.ru/news/2019/08/26/dohody/",
                    urlToImage: "https://icdn.lenta.ru/images/2019/08/26/20/20190826205008959/detail_5abf600e443de062c25634f1b6fbd525.png"
                },
                {
                    author: "Григорий Медведев",
                    description: "Lada вышла на Украине на первое место по числу проданных автомобилей с 1991 года, всего было реализовано около 1 млн машин. Такие данные приводит издание Autoconsulting в понедельник, 26 августа.",
                    publishedAt: "2019-08-26T17:19:43Z",
                    source: {id: null, name: "Iz.ru"},
                    title: "Самой популярной машиной на Украине оказалась Lada - Известия",
                    url: "https://iz.ru/914411/2019-08-26/samoi-populiarnoi-mashinoi-na-ukraine-okazalas-lada",
                    urlToImage: "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-08/TASS_27189305.jpg?itok=7L1Nj1-k"
                }, {

                    author: "Елизавета Ивтушок",
                    description: "При этом депрессией такая связь не регулируется",
                    publishedAt: "2019-08-26T16:50:00Z",
                    source: {id: null, name: "Nplus1.ru"},
                    title: "200-тысячная выборка связала синдром беспокойных ног с повышенным риском самоубийства - N+1",
                    url: "https://nplus1.ru/news/2019/08/26/restless-leg",
                    urlToImage: "https://nplus1.ru/images/2019/08/26/775629314ac93f7cfc4595a523fddf83.gif"
                }

            ],
            currentItem: null
        }
        getApiInfo(this);
    }
    setItem(it) {
        this.setState({items: this.state.items, currentItem: it});
    }
    render() {
        
        const item = this.state.currentItem;
        if (item !== null && item !== undefined) {
            return (
                <div id="catalog">
                    <button onClick={() => this.setItem(null)} id={"backButton"}>🡐</button>
                    <div id="bigItem">
                        <Item
                            title={item.title}
                            urlToImage={item.urlToImage}
                            publishedAt={item.publishedAt}
                            description={item.description}
                            url={item.url}
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div id="catalog">
                    < ItemList
                        items={this.state.items}
                        onclick={(e) => (this.setItem(e))}
                    />
                </div>)
        }
    }
}

export default Catalog;
